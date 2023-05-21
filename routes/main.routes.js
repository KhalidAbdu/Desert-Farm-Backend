const express = require('express');
const Product = require('../models/Product.model.js');
const router = express.Router();
const data = require('../data.js');

router.get('/', async (req, res) => {
  const createdProducts = await Product.insertMany(data.products);
  res.json({ createdProducts });
});
module.exports = router;
