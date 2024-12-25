const express = require('express');
const db = require('./config/database');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const port = 8080;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser());

app.use('/', require('./routers'));

app.listen(port, (err) => {
    if (!err) {
        db();
        console.log("server start.");
        console.log("http://localhost:" + port);
    }
})