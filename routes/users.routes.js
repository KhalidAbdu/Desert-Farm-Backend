const express = require('express');
const User = require('../models/User.model');
const bcrypt = require('bcryptjs');
const router = express.Router();
const generateToken = require('../utils.js');

router.post('/', async (req, res) => {});

module.exports = router;
