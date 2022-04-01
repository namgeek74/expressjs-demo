const express = require('express');
const { route } = require('express/lib/application');
const controllers = require('../controllers/users.controller');
const validate = require("../validate/users.validate");

const router = express.Router();

router.get('/', controllers.index);

router.get("/cookie", (req, res, next) => {
    res.cookie("user-id", 12345);
    res.send("Hello");
})

function middleware1(req, res, next) {
    res.locals.success = true;
    next();
}

function middleware2(req, res, next) {
    console.log(res.locals.success);
    res.send("Hello middleware")
}

router.get("/test-middleware", middleware1, middleware2);

router.get('/search', controllers.search);

router.get('/create', controllers.create);

router.get('/:userId', controllers.detail);

router.post('/create', validate.validatePostCreate, controllers.postCreate);

module.exports = router;
