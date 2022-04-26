const User = require('../models/user.model');

module.exports.requireAuth = async (req, res, next) => {
  const userId = req.signedCookies.userId;

  if (!userId) {
    res.redirect('/auth/login');
    return;
  }
  const user = await User.findById(userId);

  if (!user) {
    res.redirect('/auth/login');
    return;
  }

  res.locals.user = user;

  next();
};
