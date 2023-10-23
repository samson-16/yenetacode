const express = require("express");
const productController = require("../controller/productController");

const router = express.Router();

router.get("/", productController.getAll);
router.get("/:id", productController.getProductById);
router.post("/", productController.addBank);
router.put("/",productController.updateProduct);
router.delete("/:id",productController.deleteProduct
);

module.exports = router;
