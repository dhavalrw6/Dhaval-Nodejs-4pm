const express = require('express');
const db = require('./config/database');
const path = require('path');

const app = express();

const port = 3000;

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname + '/assets')));
app.use('uploads', express.static(path.join(__dirname + '/uploads')));

app.use('/', require('./routers'))

app.listen(port, (err) => {
    if (!err) {
        db();
        console.log('server start.');
        console.log('http://localhost:' + port);
    }
})