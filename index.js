const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const usersRoute = require('./routes/users.route');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use('/users', usersRoute);

const port = 5000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
