const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productControllers');

router.get("/getAllProduct", productsController.getAllProducts);
router.get("/getProductId/:id", productsController.getProductsById);
router.patch("/:id", productsController.editProduct);
router.delete("/:id", productsController.removeProductById);
router.post("/createProduct", productsController.createProduct);

module.exports = router;
