const express = require('express');
const db = require('./config/database');
const bodyParser = require('body-parser');
const userModel = require('./models/userSchema');

const port = 8081;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    userModel.find({}).then((data) => {
        console.log(data);
        return res.render('index', {
            data
        });
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.post('/insertData', (req, res) => {
    let { username, email, password, phone } = req.body;
    userModel.create({
        username: username,
        email: email,
        password: password,
        phone: phone
    }).then((data) => {
        console.log(data);
        return res.redirect('/');
    }).catch((err) => {
        console.log(err);
        return false;
    })

})

app.listen(port, (err) => {
    if (!err) {
        db
        console.log("server Start \nhttp://localhost:" + port);
    }
})