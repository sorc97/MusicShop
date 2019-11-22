const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
  img: String
})

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;