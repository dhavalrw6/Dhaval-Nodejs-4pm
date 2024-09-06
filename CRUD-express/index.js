const express = require('express');

const port = 8081;

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded());

let students = []


app.get('/', (req, res) => {
    // console.log(students);
    return res.render('form', {
        students
    });
})

app.post('/insertData', (req, res) => {

    let { id, username, email, password, editId } = req.body;

    if (editId) {
        let data = students.map((val) => {
            if (val.id == editId) {
                val.username = username;
                val.email = email;
                val.password = password
            }
            return val;
        })
        students = data;
    }
    else {
        students.push({ id, username, email, password });
    }

    return res.redirect('/');
})

app.get('/deleteData/:id', (req, res) => {
    // let { id } = req.query;
    let { id } = req.params;
    console.log(id);
    // let data = students.filter((student)=> student.id != id)
    let data = students.filter((student) => {
        return student.id != id;
    })
    students = data
    return res.redirect('/');
})

app.get('/editData/:id', (req, res) => {
    // let { id } = req.query;
    let { id } = req.params;
    console.log(id);
    let data = students.filter((student) => {
        return student.id == id;
    });

    console.log(data[0]);

    return res.render('edit', {
        data: data[0]
    });

})

app.listen(port, (err) => {
    if (err) {
        console.log("Servar not start.");
        return false;
    }
    console.log("Server Start http://localhost:" + port);
})