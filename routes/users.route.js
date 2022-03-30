const express = require('express');
const controllers = require('../controllers/users.controller');

const router = express.Router();

router.get('/', controllers.index);
router.get('/search', controllers.search);

router.get('/create', controllers.create);

router.get('/:userId', controllers.detail);

router.post('/create', controllers.postCreate);

module.exports = router;
