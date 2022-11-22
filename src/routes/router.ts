import express from "express";
import * as ct from "../controllers";

const router = express.Router();

router.get("/product/summary", ct.getProductInfo);

export default router;
