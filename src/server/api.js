const express = require('express');
const router = express.Router();
const Product = require('./product');

// GET
router.get('/products', (req, res) => {
  Product.find({})  //find product
    .then(products => res.send(products))
})

router.get('/products/:id', (req, res) => {
  Product.findById({ _id: req.params.id })
    .then(product => res.send(product))
})

router.get('/products/category/:category', (req, res) => {
  Product.find({ category: req.params.category.toLowerCase() })
    .then(products => res.send(products))
})

router.get('/products/search/:query', (req, res) => {
  let { query } = req.params;
  let nameExpQuery = new RegExp(query.toUpperCase());
  let categoryExpQuery = new RegExp(query.toUpperCase());

  Product.find({ // Find by name field
    name: nameExpQuery 
  })
    .then(products => {
      if (products.length) {
        res.send(products);
      } else {  // Find by category field
        Product.find({ 
          category: categoryExpQuery 
        })
          .then(products => res.send(products))
      }
    })
})

// POST
router.post('/products', (req, res) => {
  Product.create(req.body)  //product creation
    .then(product => res.send(product))
    .catch(err => console.err(`${err} was occurred`))
})

// PUT
router.put('/products/:id', (req, res) => {
  Product.findByIdAndUpdate({ _id: req.params.id }, req.body) //product updating
    .then(() =>
      Product.findOne({ _id: req.params.id }) //find updated product
    )
    .then(product => res.send(product))
})

// DELETE
router.delete('/products/:id', (req, res) => {
  Product.deleteOne({ _id: req.params.id }) //product removing
    .then(removedProduct => res.send(removedProduct))
})

module.exports = router;