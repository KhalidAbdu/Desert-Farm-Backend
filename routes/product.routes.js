const express = require('express');
const Product = require('../models/Product.model.js');
const router = express.Router();
const data = require('../data.js');

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});
router.get('/slug/:slug', async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
module.exports = router;
