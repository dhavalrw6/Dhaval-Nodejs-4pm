const express = require('express');



const app = express();

app.set('view engine', 'ejs');
// app.get('/', (req, res) => {
//     res.send("Hello..");
// })

app.use('/', require('./routers/index.js'));

app.listen(8081, (err) => {
    if (!err) {
        console.log("server start\n http://localhost:8081");
    }
})