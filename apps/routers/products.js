const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productControllers');

router.get("/", productsController.getAllProducts);
router.post("/createProduct", productsController.createProduct);

module.exports = router;
