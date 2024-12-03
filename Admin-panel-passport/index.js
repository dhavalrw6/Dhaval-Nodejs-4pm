const express = require("express");
const cookie = require("cookie-parser");
const app = express();

const port = 8081;

const path = require('path');
const { db } = require("./config/database");

const session = require("express-session");
const LocalStrategy = require('./middlewares/rev-passport');
const passport = require('passport');

app.set('view engine', 'ejs');
app.use(cookie());

app.use(express.static(path.join(__dirname + '/assets')));
app.use('/uploads', express.static(path.join(__dirname + '/uploads')))
app.use(express.urlencoded({ extended: true }))

// app.use(session({
//     name: 'Admin',
//     secret: 'Admin123',
//     resave: true,
//     saveUninitialized: false,
//     cookie: { maxAge: 1000 * 60 * 60 }
// }))

app.use(session({
    name: 'admin',
    secret: 'admin@123',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 }
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAdminAuth)

app.use('/', require('./routers'));


app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    db();
    console.log("server start \nhttp://localhost:" + port);

})
