const express = require('express');
const controllers = require('../controllers/products.controller');

const router = express.Router();

router.get('/', controllers.products);

router.post('/pagination', controllers.products);

module.exports = router;
