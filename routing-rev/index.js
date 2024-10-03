const express = require('express');
const { db } = require('./config/database.js');
const bodyParser = require('body-parser');



const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
// app.get('/', (req, res) => {
//     res.send("Hello..");
// })

app.use('/', require('./routers/index.js'));

app.listen(8081, (err) => {
    if (!err) {
        db();
        console.log("server start\n http://localhost:8081");
    }
})