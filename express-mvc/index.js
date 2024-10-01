const express = require('express');
const db = require('./config/database');
const bodyParser = require('body-parser')
const port = 8081;

const app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', require('./routers'))

// app.get('/',(req,res)=>{

// })

app.listen(port, (err) => {
    if (!err) {
        console.log("server start on http://localhost:" + port);

    }
})