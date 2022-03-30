const express = require('express');
const shortid = require('shortid');

const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('users/index', {
    users: db.get('users').value(),
  });
});

router.get('/search', (req, res) => {
  let q = req.query.q;
  let matchedUser = db
    .get('users')
    .value()
    .filter((item) => item.name.toLowerCase().indexOf(q) !== -1);

  res.render('users/index', {
    users: matchedUser,
  });
});

router.get('/create', (req, res) => {
  res.render('users/create');
});

router.get('/:userId', (req, res) => {
  const id = req.params.userId;

  const user = db.get('users').find({ id: id }).value();

  res.render('users/view', {
    user: user,
  });
});

router.post('/create', (req, res) => {
  req.body.id = shortid.generate();
  db.get('users').push(req.body).write();
  // users.push(req.body);
  res.redirect('/users');
});

module.exports = router;
