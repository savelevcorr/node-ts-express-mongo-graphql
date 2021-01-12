import express from "express";

import { products } from "./admin";

const router = express.Router();
const PATH = "/";

// Root route
router.get(PATH, (_, res) => {
  res.render("shop", { products, docTitle: "Shop", path: PATH });
});

export default router;