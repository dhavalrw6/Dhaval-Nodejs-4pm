const express = require('express');
const db = require('./config/database');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8081;

app.set('view engine', 'ejs');
app.use(cookieParser());

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', require('./routers'));

app.listen(port, (err) => {
    if (!err) {
        db();
        console.log("server start on\nhttp://localhost:" + port);
    }
})