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
        return res.render('index', {
            data
        });
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.post('/insertData', (req, res) => {

    let editId = req.body.editId;

    if (editId) {
        userModel.findByIdAndUpdate(editId, { ...req.body }).then((data) => {
            console.log("data updated.");
            return res.redirect('/');
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }
    else {
        userModel.create({ ...req.body }).then((data) => {
            return res.redirect('/');
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }

})

app.get('/deleteData/:id', (req, res) => {
    let { id } = req.params;

    userModel.findByIdAndDelete(id).then((data) => {
        console.log("Data deleted..");
        return res.redirect('/');
    }).catch((err) => {
        console.log(err);
        return false;
    })

})

app.get('/editData/:id', (req, res) => {
    let { id } = req.params;
    userModel.findById(id).then((data) => {
        console.log(data);

        return res.render('edit', {
            data
        });
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