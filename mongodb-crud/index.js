const express = require('express');
const db = require('./config/database');


const port = 8081;

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    return res.render('index');
})

app.listen(port, (err) => {
    if (!err) {
        db
        console.log("server Start \nhttp://localhost:" + port);
    }
})