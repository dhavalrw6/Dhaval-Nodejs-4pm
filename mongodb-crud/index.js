const express = require('express');
const db = require('./config/database');
const bodyParser = require('body-parser');
const userModel = require('./models/userSchema');
const multer = require('multer');
const path = require('path')

const port = 8081;

const app = express();

app.use(express.static('node_modules'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/uploads', express.static(path.join(__dirname + '/uploads')))
console.log(__dirname);


// image Upload Start

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

let uploadImage = multer({ storage: storage }).single('image')

// image Upload end


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

app.post('/insertData', uploadImage, (req, res) => {

    let editId = req.body.editId;
    const image = req.file.path;
    console.log(req.file);


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
        userModel.create({ ...req.body, image: image }).then((data) => {
            return res.redirect('/');
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }
    res.redirect('/');

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