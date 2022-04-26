const shortid = require('shortid');
const User = require('../models/user.model');

module.exports.index = async (req, res) => {
  const users = await User.find();
  res.render('users/index', { users });
};

module.exports.search = async (req, res) => {
  let q = req.query.q;
  // let matchedUser = db
  //   .get('users')
  //   .value()
  //   .filter((item) => item.name.toLowerCase().indexOf(q) !== -1);
  const users = await User.find();
  let matchedUser = users.filter(
    (item) => item.name.toLowerCase().indexOf(q) !== -1
  );

  res.render('users/index', {
    users: matchedUser,
  });
};

module.exports.create = (req, res) => {
  res.render('users/create');
};

module.exports.detail = async (req, res) => {
  const id = req.params.userId;

  const user = await User.findById(id);

  res.render('users/view', {
    user: user,
  });
};

module.exports.postCreate = async (req, res) => {
  req.body.avatar = req.file.path.split('\\').slice(1).join('/');

  await User.create(req.body);
  res.redirect('/users');
};
