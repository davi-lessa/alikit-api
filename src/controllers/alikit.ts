import { NextFunction, Request, Response } from "express";
import { AliKit } from "../services/alikit/core/alikit";
import errorMap from "../services/alikit/utils/error.map";

export async function getProductInfo(req: Request, res: Response, next: NextFunction) {
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
