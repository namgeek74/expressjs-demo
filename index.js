const express = require("express");
const bodyParser = require('body-parser');
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");

db = low(adapter);

db.defaults({ users: [] }).write();

const app = express();

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const port = 5000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/users', (req, res) => {
    res.render("users/index", {
        users: db.get("users").value()
    });
})

app.get('/users/search', (req, res) => {
    let q = req.query.q;
    let matchedUser = db.get("users").value().filter(item => item.name.toLowerCase().indexOf(q) !== -1);

    res.render('users/index', {
        users: matchedUser
    })
})

app.get("/users/create", (req, res) => {
    res.render("users/create");
})

app.post("/users/create", (req, res) => {
    db.get("users").push(req.body).write();
    // users.push(req.body);
    res.redirect("/users");
})

app.listen(port, function () {
    console.log("Server listening on port " + port);
})