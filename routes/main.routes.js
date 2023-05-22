const express = require('express');
const Product = require('../models/Product.model.js');
const router = express.Router();
const data = require('../data.js');

router.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
});
module.exports = router;
