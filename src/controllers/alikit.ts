import { NextFunction, Request, Response } from "express";
import { AliKit } from "../services/alikit/core/alikit";
import { ReviewsQueryOptionsPassedOptions } from "../services/alikit/repositories/product.reviews";
import errorMap from "../services/alikit/utils/error.map";

export async function getProductSummary(req: Request, res: Response, next: NextFunction) {
  try {
    const productSource = String(req.query.source || "");
    const includeReviews = String(req.query.reviews || "");
    const reviewsPageQty = Number(req.query.reviewsPageQty || 1);
    const reviewsOnlyPics = Boolean(req.query.reviewsOnlyPics === "true" || false);
    const includeFullDescription = String(req.query.fulldesc || "");

    if (!productSource) throw new Error(errorMap.INVALID_URL);

    const alikit = new AliKit(productSource);
    const summary = await alikit.product.getData();

    // Reviews
    let reviewsOptions: ReviewsQueryOptionsPassedOptions = { withPictures: reviewsOnlyPics };
    alikit.product.reviews.setup(reviewsOptions);

    if (includeReviews === "true") {
      let page = 0;
      while (page < reviewsPageQty && alikit.product.reviews.hasMore) {
        await alikit.product.reviews.getReviews();
        page++;
      }
    }

    let reviews = alikit.product.reviews.data;

    let fullDescription = {};
    // Full description
    if (includeFullDescription === "true") fullDescription = await alikit.product.getFullDescription();

    if (summary) return res.json({ ...summary, reviews, fullDescription });
    else throw new Error(errorMap.GET_PRODUCT_DATA_FAIL);
  } catch (error) {
    res.status(400).json({ status: "error", message: "" });
    next(error);
  }
}

export async function getProductReviews(req: Request, res: Response, next: NextFunction) {
  try {
    const productSource = String(req.query.source);
    if (!productSource) throw new Error(errorMap.INVALID_URL);

    const alikit = new AliKit(productSource);
    const summary = await alikit.product.getData();

    if (summary) return res.json(summary);
    else throw new Error(errorMap.GET_PRODUCT_DATA_FAIL);
  } catch (error) {
    res.status(400).json({ status: "error", message: "" });
    next(error);
  }
}
