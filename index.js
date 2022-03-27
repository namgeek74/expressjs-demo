const express = require("express");
const app = express();

const port = 3000;

let users = [
    { id: 1, name: "Nam" },
    { id: 2, name: "Huy" },
    { id: 3, name: "Kien" },
    { id: 4, name: "Thinh" },
    { id: 5, name: "Cong" },
    { id: 6, name: "Hieu" },
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
    let matchedUser = users.filter(item => item.name.toLowerCase().indexOf(q) !== -1);

    res.render('users/index', {
        users: matchedUser
    })
})

app.listen(port, function () {
    console.log("Server listening on port " + port);
})