import express from "express";

import { Products } from "../types/Products";

const router = express.Router();
const products: Products = [];
const PATH = "/add-product";

// We are don't call the next function, 
// so we don't go to the next middleware
router.get(PATH, (_, res) => {
  res.render("add-product", { docTitle: "Add Product", path: PATH });
});

router.post(PATH, (req, res) => {
  products.push({
    title: req.body.title
  });

  res.redirect("/");
});

export {
  products
};
export default router;