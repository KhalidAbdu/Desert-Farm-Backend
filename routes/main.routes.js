const express = require('express');
const Product = require('../models/Product.model.js');
const router = express.Router();
const data = require('../data.js');
const User = require('../models/User.model.js');

router.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});
module.exports = router;
