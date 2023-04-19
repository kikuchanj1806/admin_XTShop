const mongoose = require("mongoose");
const schema = mongoose.Schema;
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
module.exports = mongoose.model("products", productsSchema);
