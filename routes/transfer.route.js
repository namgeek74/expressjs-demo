const express = require('express');
const controllers = require('../controllers/transfer.controller');

const router = express.Router();

router.get('/', controllers.transfer);

router.post('/create', controllers.postCreate);

module.exports = router;
