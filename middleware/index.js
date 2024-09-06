const express = require('express');

const port = 8081;

const app = express();

app.set('view engine', 'ejs');

let middleware = (req, res, next) => {
    // console.log("hello from middleware..");

    let { name } = req.query;
    if (name == "admin") {
        return next();
    }
    return res.redirect('/');
}

app.get('/home', middleware, (req, res) => {
    return res.render('home');
})

app.get('/', (req, res) => {
    return res.render('index');
})

app.listen(port, () => console.log("http://localhost:" + port))