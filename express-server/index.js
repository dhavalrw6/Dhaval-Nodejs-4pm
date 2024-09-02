const express = require('express');

const port = 8081;

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    return res.render('index');
})

app.get('/home', (req, res) => {
    return res.render('home');
})

app.listen(port, (err) => {
    if (err) {
        console.log("servar not start.");
        return false;
    }
    console.log("servar start on port: " + port);
})