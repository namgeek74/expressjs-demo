const express = require("express");
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send('User list')
})

app.listen(port, function () {
    console.log("Server listening on port " + port);
})