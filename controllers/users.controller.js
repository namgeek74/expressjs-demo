const shortid = require('shortid');
const db = require('../db');

module.exports.index = (req, res) => {
  res.render('users/index', {
    users: db.get('users').value(),
  });
};

module.exports.search = (req, res) => {
  let q = req.query.q;
  let matchedUser = db
    .get('users')
    .value()
    .filter((item) => item.name.toLowerCase().indexOf(q) !== -1);

  res.render('users/index', {
    users: matchedUser,
  });
};

module.exports.create = (req, res) => {
  res.render('users/create');
};

module.exports.detail = (req, res) => {
  const id = req.params.userId;

  const user = db.get('users').find({ id: id }).value();

  res.render('users/view', {
    user: user,
  });
};

module.exports.postCreate = (req, res) => {
  req.body.id = shortid.generate();
  db.get('users').push(req.body).write();
  res.redirect('/users');
};
