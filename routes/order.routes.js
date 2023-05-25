const express = require('express');
const User = require('../models/User.model');
const Order = require('../models/Order.model');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { isAuth, isAdmin } = require('../utils.js');

router.post('/', isAuth, async (req, res) => {
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

router.get('/summary', isAuth, isAdmin, async (req, res) => {
  try {
    const orders = await Order.aggregate([
      {
        $group: {
          _id: null,
          numOrders: { $sum: 1 },
          totalSales: { $sum: '$totalPrice' },
        },
      },
    ]);
    const users = await User.aggregate([
      {
        $group: {
          _id: null,
          numUsers: { $sum: 1 },
        },
      },
    ]);
    res.send({ users, orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.get('/list', isAuth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.get('/:id', isAuth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});
module.exports = router;
