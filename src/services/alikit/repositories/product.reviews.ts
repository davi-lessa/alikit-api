import { AliKit } from "../core/alikit";
import { Product } from "./product";

interface QueryOptions {
  ownerMemberId: any;
  memberType: string;
  productId: any;
  companyId: any;
  evaStarFilterValue: "all Stars" | "5 Stars" | "4 Stars" | "3 Stars" | "2 Stars" | "1 Stars";
  evaSortValue: "sortdefault@feedback" | "sortlarest@feedback";
  page: number;
  currentPage: number | null;
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

interface QueryOptionsPassed extends Partial<QueryOptions> {}

export class ProductReviews {
  private product: Product;
  private _perPage: number;
  private _query: QueryOptions;
  main: AliKit;

  constructor(product: Product, main: AliKit) {
    this.product = product;
    this._perPage = 10;
    this.main = main;

    this._query = {
      ownerMemberId: null,
      memberType: "seller",
      productId: null,
      companyId: null,
      evaStarFilterValue: "all Stars",
      evaSortValue: "sortdefault@feedback",
      page: 1,
      currentPage: null,
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

  get _pageCount() {
    const totalReviews = this.product.modules.title.data.feedbackRating.totalValidNum;
    const totalPages = Math.ceil(totalReviews / this._perPage);
    return totalPages;
  }

  get _nextURL() {
    const baseURL = new URL("https://feedback.aliexpress.com/display/productEvaluation.htm");
    Object.entries(this._query).forEach(([k, v]) => {
      let value = v ? String(v) : "";
      baseURL.searchParams.append(k, value);
    });
    return baseURL.href;
  }

  get currentPage(): number {
    return this._query.page;
  }

  set currentPage(num: number) {
    this._query.currentPage = this._query.page;
    this._query.page = num;
  }

  setup(options: QueryOptionsPassed = {}) {
    const pId = this.product.modules.common.data.productId;
    const omId = this.product.modules.common.data.sellerAdminSeq;
    const cId = this.product.modules.action.data.companyId;

    if (!pId || !omId) throw new Error("Couldn't get product ID and seller ID");

    Object.entries(options).forEach(([optionKey, optionVal]: [string, any]) => {
      if (optionVal) this._query[optionKey] = optionVal;
    });

    this._query.productId = pId;
    this._query.ownerMemberId = omId;
    this._query.companyId = cId;
  }

  async getReviews() {
    // Standard can be faster and easier to configure proxy later
    try {
      console.log(this._nextURL, this.currentPage);

      const translation_lang = "pt_BR";
      // We have to set this cookie in request to get the reviews translated
      const cookie = `intl_locale=${translation_lang}`;

      const rawHTML = await this.main.request.standardRequest(this._nextURL, "GET", {
        headers: { "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7", cookie },
      });
      let formatted = rawHTML.replace(/\s\s+/g, " ");
      this.currentPage++;
      return formatted;
    } catch (error) {}
  }
}
