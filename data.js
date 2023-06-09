const bcrypt = require('bcryptjs');

const data = {
  users: [
    {
      name: 'khalid',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: true,
    },
    {
      name: 'Abdu',
      email: 'user@gmail.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'product1',
      slug: 'product1-',
      image: '/images/p1.png',
      price: 230,
      countInTock: 10,
      brand: 'company1',
      rating: 3.4,
      category: 'seeds',
      numReviews: 10,
      decription: 'good',
    },
    {
      name: 'product2',
      slug: 'product2-',
      image: '/images/p2.png',
      price: 230,
      countInTock: 0,
      brand: 'company2',
      rating: 3.4,
      category: 'seeds',
      numReviews: 10,
      decription: 'good',
    },
    {
      name: 'product3',
      slug: 'product3-',
      image: '/images/p3.png',
      price: 230,
      countInTock: 10,
      brand: 'company3',
      rating: 3.4,
      category: 'seeds',
      numReviews: 10,
      decription: 'good',
    },
    {
      name: 'product4',
      slug: 'product4-',
      image: '/images/p4.png',
      price: 230,
      countInTock: 10,
      brand: 'company4',
      rating: 3.4,
      category: 'seeds',
      numReviews: 10,
      decription: 'good',
    },
  ],
};
module.exports = data;
