// const db = require('../db');
const Sessions = require('../models/sessions.model');
const Product = require('../models/product.model');

module.exports.addToCart = async (req, res, next) => {
  // TODOS: fix bug
  // currently it not update database like what expected, it create a array, not a object with id is key and value is count number
  // debug logic to update correct database and update UI for cart page to show item was added
  const productId = req.params.productId;
  const sessionId = req.signedCookies.sessionId;

  if (!sessionId) {
    res.redirect('/products');
    return;
  }

  // let counter = db
  //   .get('sessions')
  //   .find({ id: sessionId })
  //   .get('cart.' + productId, 0)
  //   .value();
  let currentSession = await Sessions.find({id: sessionId});

  // db.get('sessions')
  //   .find({ id: sessionId })
  //   .set('cart.' + productId, counter + 1)
  //   .write();

  res.redirect('/products');
};

module.exports.showCart = (req, res, next) => {
  // const products = db.get('products').value();
  // const cart = db
  //   .get('sessions')
  //   .find({ id: req.signedCookies.sessionId })
  //   .value();

  // const currentCart = [];
  // for (const item in cart.cart) {
  //   const product = {
  //     id: item,
  //     quantity: cart.cart[item],
  //     des: products.find((ele) => ele.id === item).description,
  //   };
  //   currentCart.push(product);
  // }

  // res.render('cart/index', { currentCart });
};
