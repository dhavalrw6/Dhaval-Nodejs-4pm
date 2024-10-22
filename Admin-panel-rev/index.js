const express = require("express");

const app = express();

const port = 8081;

const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/assets')));

app.use('/', require('./routers'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log("server start \nhttp://localhost:" + port);

})
