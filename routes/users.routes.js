const express = require('express');
const User = require('../models/User.model');
const bcrypt = require('bcryptjs');
const router = express.Router();
const generateToken = require('../utils.js');

router.post('/signin', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Sorry, Wrong email or password' });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
