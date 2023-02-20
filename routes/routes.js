const express = require("express");
const router = express.Router();
const {getTotal,getAllProducts,addToCart, getCart,clearCart, removeFromCart, updateQty} = require("../controller/productController");

router.get("/getProducts", getAllProducts);
router.get("/getTotal", getTotal);
router.patch("/updateQty", updateQty);
router.patch("/addToCart", addToCart);
router.patch("/removeFromCart", removeFromCart);
router.patch("/clearCart", clearCart);
router.get("/getCart", getCart);

module.exports = router;
