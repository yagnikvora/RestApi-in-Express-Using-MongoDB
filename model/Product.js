const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: Number,
    ProductName: String,
    ProductPrice: Number,
    ProductDescription: String,
    ProductQuantity: Number,
});

module.exports = mongoose.model('Product', schema);