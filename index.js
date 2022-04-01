const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const usersRoute = require('./routes/users.route');
const authRoute = require("./routes/auth.route");
const middlewares = require("./middlewares/auth.middleware");

const app = express();

const secretString = "hdasj982349";

app.use(cookieParser(secretString));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use('/users', middlewares.requireAuth, usersRoute);
app.use("/auth", authRoute);

const port = 5000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
