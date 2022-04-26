const md5 = require('md5');
const User = require('../models/user.model');

module.exports.login = (req, res) => {
  res.render('auth/login');
};

module.exports.postLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.find({ email: email });

  if (!user.length) {
    res.render('auth/login', {
      errors: ['User does not exist.'],
    });
    return;
  }

  const hashedPassword = md5(password);

  if (user[0].password !== hashedPassword) {
    res.render('auth/login', {
      errors: ['Wrong password.'],
    });
    return;
  }

  res.cookie('userId', user[0]._id, {
    signed: true,
  });
  res.redirect('/users');
};
