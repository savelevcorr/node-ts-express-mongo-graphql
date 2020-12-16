import express from "express";

import { Products } from "../types/Products";

const router = express.Router();
const products: Products = [];

// We are don't call the next function, 
// so we don't go to the next middleware
router.get("/add-product", (_, res) => {
  res.render("add-product", { docTitle: "Add Product" });
});

router.post("/add-product", (req, res) => {
  products.push({
    title: req.body.title
  });

  res.redirect("/");
});

export {
  products
};
export default router;