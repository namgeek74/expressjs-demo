const db = require('../db');

module.exports.products = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const itemPerPage = 3;

  const start = (page - 1) * itemPerPage;
  const end = page * itemPerPage;

  let products = db.get('products').value().slice(start, end);

  res.render('products/products', {
    products: products,
    currentPage: page
  });
};
