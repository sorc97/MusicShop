const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  category: String,
  price: Number,
  img: String
})

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;