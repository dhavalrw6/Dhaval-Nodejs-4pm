const express = require('express')

const port = 8081;

const app = express();

app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//     return res.render('home');
// })

app.use('/', require('./routers'))

app.listen(port, (err) => {
    if (!err) {
        console.log("server start on http://localhost:" + port);

    }
})