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
        const PAGE_SIZE = 2;
        let page = parseInt(req.query.page) || 1;
        let skip = (page - 1) * PAGE_SIZE;

        const totalProducts = await productsModel.countDocuments({});
        const totalPages = Math.ceil(totalProducts / PAGE_SIZE);

        const products = await productsModel.find({})
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(PAGE_SIZE);

        return Response.success(req, res, {
            products,
            page,
            totalPages,
            totalProducts
        }, 'Get all products successfully', 200);
    } catch (error) {
        console.log(error);
        return Response.error(req, res, 'Internal server error', 500);
    }
}
module.exports.getProductsById = async (req, res) => {
    try {
        const _id = req.params.id;
        const product = await productsModel.findById(_id);
        if (!product) {
            return Response.error(req, res, "Không tìm thấy sản phẩm", 500);
        }
        return Response.success(req, res, { product }, "Thành công", 200);
    } catch (error) {
        console.log(error);
        return Response.error(req, res, "Đã xảy ra lỗi", 500);
    }
};

module.exports.editProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const payload = req.body;
        const updatedProduct = await productsModel.findByIdAndUpdate(_id, { $set: { ...payload } });
        if (!updatedProduct) {
            return Response.error(req, res, "Không tìm thấy sản phẩm", 500);
        }
        Response.success(req, res, {}, "Sửa thành công", 200);
    } catch (error) {
        Response.error(req, res, "Đã xảy ra lỗi", 500);
    }
};

module.exports.removeProductById = async (req, res) => {
    try {
        const _id = req.params.id;
        const removedProduct = await productsModel.findByIdAndDelete(_id);
        if (!removedProduct) {
            return Response.error(req, res, "Không tìm thấy sản phẩm", 500);
        }
        Response.success(req, res, {}, "Xóa thành công", 200);
    } catch (error) {
        Response.error(req, res, "Đã xảy ra lỗi", 500);
    }
};
