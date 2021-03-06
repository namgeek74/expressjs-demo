const express = require('express');
const controllers = require('../controllers/cart.controller');

const router = express.Router();

router.get('/', controllers.showCart);

router.get('/add/:productId', controllers.addToCart);

module.exports = router;
