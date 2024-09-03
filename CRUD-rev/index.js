const express = require('express');

const port = 8081;

const app = express();

let empData = [
    {
        id: 1,
        username: "Dhaval",
        email: "dhaval@gmail.com",
        password: "123"
    }
]

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.render('form', {
        empData
    });
});

app.post('/insertData', (req, res) => {
    let { id, username, email, password, editId } = req.body;

    if (editId) {
        let data = empData.map((emp) => {
            if (emp.id == editId) {
                emp = { ...emp, username, email, password }
            }
            return emp;
        })
        empData = data; 
    } else {
        empData.push({ id, username, email, password });
    }

    return res.redirect('/');

})

app.get('/deleteData/:id', (req, res) => {
    let { id } = req.params;

    let data = empData.filter((emp) => {
        return emp.id != id
    })

    empData = data;

    return res.redirect('/');

});

app.get('/editData/:id', (req, res) => {
    let { id } = req.params;

    let data = empData.filter((emp) => {
        return emp.id == id
    })
    console.log(data[0]);
    res.render('edit', {
        data: data[0]
    });
});

app.listen(port, (err) => {
    if (!err) {
        console.log("server Start on http://localhost:" + port);
    }
});