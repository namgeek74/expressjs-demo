require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const usersRoute = require('./routes/users.route');
const authRoute = require('./routes/auth.route');
const middlewares = require('./middlewares/auth.middleware');
const productsRoute = require('./routes/products.route');
const sessionMiddleware = require('./middlewares/session.middleware');
const cartRoute = require('./routes/cart.route');
const transferRoute = require('./routes/transfer.route');

const app = express();

app.use(cookieParser(process.env.SECRET_STRING));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(sessionMiddleware);
app.use('/users', middlewares.requireAuth, usersRoute);
app.use('/auth', authRoute);
app.use('/products', productsRoute);
app.use('/cart', cartRoute);
app.use('/transfer', transferRoute);

const port = 5000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});

console.log("add some changes");
