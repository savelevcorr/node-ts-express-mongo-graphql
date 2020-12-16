import express from "express";

import { products } from "./admin";

const router = express.Router();

// Root route
router.get("/", (_, res) => {
  res.render("shop", { products, docTitle: "Shop" });
});

export default router;