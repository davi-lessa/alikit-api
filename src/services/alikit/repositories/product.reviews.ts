import { AliKit } from "../core/alikit";
import { Product } from "./product";
import { JSDOM } from "jsdom";
import { PickPartial } from "../utils/types";

interface QueryOptions {
  ownerMemberId: any;
  memberType: string;
  productId: any;
  companyId: any;
  evaStarFilterValue: "all Stars" | "5 Stars" | "4 Stars" | "3 Stars" | "2 Stars" | "1 Stars";
  evaSortValue: "sortdefault@feedback" | "sortlarest@feedback";
  page: number;
  _currentPage: number | null;
  startValidDate: any;
  i18n: boolean;
  withPictures: boolean;
  withAdditionalFeedback: boolean;
  onlyFromMyCountry: boolean;
  version: any;
  isOpened: boolean;
  translate: string;
  jumpToTop: boolean;
  [key: string]: any;
}

export type ReviewsQueryOptionsPassedOptions = PickPartial<
  QueryOptions,
  "evaStarFilterValue" | "evaSortValue" | "withPictures" | "withAdditionalFeedback"
>;

export interface ReviewResponse {
  authorCountry: string;
  authorLink?: string | null;
  authorName?: string;
  imageLinks: string[];
  info: any;
  reviewText: string;
  starsCount: number;
  timestamp: number;
}

export class ProductReviews {
  private product: Product;
  private _query: QueryOptions;
  private _extractedCount: number;
  private _gottenReviews: any[];
  private _exhaused;
  private main: AliKit;

  constructor(product: Product, main: AliKit) {
    this.product = product;
    this._extractedCount = 0;
    this.main = main;
    this._gottenReviews = [];
    this._exhaused = false;

    this._query = {
      ownerMemberId: null,
      memberType: "seller",
      productId: null,
      companyId: null,
      evaStarFilterValue: "all Stars",
      evaSortValue: "sortdefault@feedback",
      page: 1,
      _currentPage: null,
      startValidDate: null,
      i18n: true,
      withPictures: false,
      withAdditionalFeedback: false,
      onlyFromMyCountry: false,
      version: null,
      isOpened: true,
      translate: "Y",
      jumpToTop: false,
      v: 2,
    };
  }

  // private get _pageCount(): number {
  //   // Sometimes the review page returns a smaller value even for All stars. Better not to use.
  //   const totalPages = Math.ceil(this._totalReviews / this._perPage);
  //   return totalPages;
  // }

  // private get _totalReviews(): number {
  //   const totalReviews = this.product.modules.title.data.feedbackRating.totalValidNum;
  //   return totalReviews;
  // }

  get hasMore(): boolean {
    return !this._exhaused;
  }

  private _nextURL() {
    const baseURL = new URL("https://feedback.aliexpress.com/display/productEvaluation.htm");

    Object.entries(this._query).forEach(([k, v]) => {
      let value = v ? String(v) : "";
      baseURL.searchParams.append(k, value);
    });

    return baseURL.href;
  }

  public get data() {
    return this._gottenReviews;
  }

  private get _currentPage(): number {
    return this._query.page;
  }

  private set _currentPage(num: number) {
    this._query._currentPage = this._query.page;
    this._query.page = num;
  }

  public get currentPage() {
    return this._currentPage;
  }

  public get totalGot() {
    return this._extractedCount;
  }

  setup(options: ReviewsQueryOptionsPassedOptions = {}) {
    const pId = this.product.modules.common.data.productId;
    const omId = this.product.modules.common.data.sellerAdminSeq;
    const cId = this.product.modules.action.data.companyId;

    if (!pId || !omId) throw new Error("Couldn't get product ID and seller ID");

    this._query.productId = pId;
    this._query.ownerMemberId = omId;
    this._query.companyId = cId;
    this._extractedCount = 0;
    this._gottenReviews = [];

    Object.entries(options).forEach(([optionKey, optionVal]: [string, any]) => {
      if (optionVal) this._query[optionKey] = optionVal;
    });
  }

  private getStarsCountByPercentage(percentage: number | string) {
    let map: any = {
      "100": 5,
      "80": 4,
      "60": 3,
      "40": 2,
      "20": 1,
    };
    return map[percentage] || null;
  }

  private _formatReviewsDomToData(reviews: any) {
    const reviewsData = reviews.map((reviewContainer: any) => {
      const authorName = reviewContainer.querySelector(".user-name a")?.textContent || "Annonymous";
      const authorLink = reviewContainer.querySelector(".user-name a")?.getAttribute("href") || null;
      const authorCountry = reviewContainer.querySelector(".fb-user-info .user-country")?.textContent?.trim();

      const reviewText = reviewContainer.querySelector(".buyer-feedback span:first-child")?.textContent?.trim();
      const starsPercent = reviewContainer
        .querySelector(".star-view span")
        // @ts-ignore
        ?.style?.width?.replace(/%/g, "")
        ?.trim();
      const starsCount = this.getStarsCountByPercentage(starsPercent);
      const date = reviewContainer.querySelector(".r-time-new")?.textContent?.trim() || 0;
      const timestamp = new Date(date).getTime();
      // @ts-ignore
      const imageLinks = [...reviewContainer.querySelectorAll(".r-photo-list img")].map((img) => img.src);

      const infoEntries = [...reviewContainer.querySelectorAll(".user-order-info > span")].map((inf) => {
        const title = inf.querySelector("strong")?.textContent?.replace(":", "") || "";
        const text = inf?.textContent?.replace(title, "")?.replace(":", "")?.trim();
        return [title, text];
      });
      const info: any = Object.fromEntries(infoEntries);

      // Useful and useless are got asynchronously.
      return {
        authorCountry,
        authorLink: authorLink && "https:" + authorLink,
        authorName,
        imageLinks,
        info,
        reviewText,
        starsCount,
        timestamp: date && timestamp,
      };
    });

    return reviewsData;
  }

  async getReviews() {
    if (this._exhaused) {
      console.warn("All reviews have already been extracted.");
      return null;
    }
    // Standard method can be faster and easier to configure a proxy later
    const feedbackItemClassName = ".feedback-item";

    try {
      console.log(this._nextURL(), this._currentPage);
      const translation_lang = "pt_BR";

      // We have to set this cookie in request to get the reviews translated
      const cookie = `intl_locale=${translation_lang};acs_usuc_t=x_csrf=${this.product.csrf_token}&acs_rt=`;

      const rawHTML = await this.main.request.standardRequest(this._nextURL(), "GET", {
        headers: {
          "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          cookie,
        },
      });

      let formatted = rawHTML.replace(/\s\s+/g, " ");

      const dom = new JSDOM(formatted, { runScripts: "dangerously" });
      const reviews = [...dom.window.document.querySelectorAll(feedbackItemClassName)];
      const reviewsData = this._formatReviewsDomToData(reviews);

      const hasMore = !dom.window.document.querySelector(".ui-pagination-next.ui-pagination-disabled");
      console.log("Has more:", hasMore);

      this._gottenReviews = [...this._gottenReviews, ...reviewsData];
      this._extractedCount += reviewsData.length;
      this._currentPage++;
      this._exhaused = !hasMore;
      return reviewsData;
    } catch (error) {}
  }
}
