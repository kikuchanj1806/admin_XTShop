const mongoose = require("mongoose");
const schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const productsSchema = new schema({
    productId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountPrice: {
        type: Number,
        default: null,
    },
    description: {
        type: String,
        default: null,
    },
    imageUrl: {
        type: String,
        default: null,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
    updatedOn: {
        type: Date,
        default: Date.now,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
});
productsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("products", productsSchema);
