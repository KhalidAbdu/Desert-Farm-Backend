const express = require('express');
const User = require('../models/User.model');
const Order = require('../models/Order.model');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { isAuth } = require('../utils.js');
router.post('/', isAuth, async (req, res) => {
  console.log('hikhalif', req.body.orderItems);
  console.log(req.user);
  try {
    const newOrder = new Order({
      orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    });
    const order = await newOrder.save();
    res.status(201).send({ message: 'New Order Created', order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

module.exports = router;
