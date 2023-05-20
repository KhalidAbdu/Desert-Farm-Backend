const router = require('express').Router();
const data = require('../data.js');

router.get('/', (req, res, next) => {
  res.json(data.products);
});
router.get('/slug/:slug', (req, res, next) => {
  const { slug } = req.params;
  const product = data.products.find((oneProduct) => oneProduct.slug === slug);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

module.exports = router;
