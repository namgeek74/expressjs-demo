const express = require("express");
const app = express();

const port = 3000;

let users = [
    { id: 1, name: "Nam" },
    { id: 2, name: "Kelvin" },
    { id: 3, name: "Kelvin Kien" },
]

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/user', (req, res) => {
    res.render("users/index", {
        users
    });
})

app.get('/users/search', (req, res) => {
    let q = req.query.q;
    let matchedUser = users.filter(item => item.name.indexOf(q) !== -1);
    // console.log(matchedUser);

    res.render('users/index', {
        users: matchedUser
    })
    // console.log(req.query);
})

app.listen(port, function () {
    console.log("Server listening on port " + port);
})