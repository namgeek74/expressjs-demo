const express = require("express");
const app = express();

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/user', (req, res) => {
    res.render("users/index", {
        users: [
            { id: 1, name: "Nam" },
            { id: 2, name: "Kelvin" },
        ]
    });
})


app.listen(port, function () {
    console.log("Server listening on port " + port);
})