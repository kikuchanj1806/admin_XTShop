const productsModel = require('../models/products.model');
const { Response } = require("../../libs/helpers");


module.exports.createProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const filter = { productId: newProduct.productId };
        const update = { $set: newProduct };
        const options = { upsert: true, new: true };
        const product = await productsModel.findOneAndUpdate(filter, update, options);
        Response.success(req, res, { product }, 200);
    } catch (error) {
        console.log(error);
    }
};

module.exports.getAllProducts = async (req, res) => {
    try {
        const allPrd = await productsModel.find();
        Response.success(req, res, { allPrd }, 201);
    } catch (error) {
        console.log(error);
    }
}


