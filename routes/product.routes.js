const express = require('express');
const Product = require('../models/Product.model.js');
const router = express.Router();
const data = require('../data.js');
const { isAuth, isAdmin } = require('../utils.js');

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});
router.post('/', isAuth, isAdmin, async (req, res) => {
  const newProduct = new Product({
    name: 'new name' + Date.now(),
    slug: 'new-name' + Date.now(),
    image: '/images/p1.png',
    brand: 'new brand',
    decription: 'new decription',
    price: 0,
    countInTock: 0,
    numReviews: 0,
    rating: 0,
    category: 'new category',
  });
  const product = await newProduct.save();
  res.send({ message: 'Product Created', product });
});

const PAGE_SIZE = 3;
router.get('/admin', isAuth, isAdmin, async (req, res) => {
  const { query } = req;
  const page = query.page || 1;
  const pageSize = query.size || PAGE_SIZE;
  try {
    const products = await Product.find()
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    const countProducts = await Product.countDocuments();
    res.send({
      products,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
    });
  } catch (error) {}
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
