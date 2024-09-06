const express = require('express');
const path = require('path');
const port = 8081;

const app = express();

app.set('view engine', 'ejs');

// app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static('public'));

app.get('/', (req, res) => {
    return res.render('index');
});

app.listen(port, (err) => {
    if (!err) {
        console.log("server Start http://localhost:" + port);
    }
})