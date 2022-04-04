const db = require('../db');

module.exports.addToCart = (req, res, next) => {
  // TODOS: fix bug
  // currently it not update database like what expected, it create a array, not a object with id is key and value is count number
  // debug logic to update correct database and update UI for cart page to show item was added
  const productId = req.params.productId;
  const sessionId = req.signedCookies.sessionId;

  if (!sessionId) {
    res.redirect('/products');
    return;
  }

  db.get('sessions')
    .find({ id: sessionId })
    .set('cart.' + productId, 1)
    .write();

  res.redirect('/products');
};
