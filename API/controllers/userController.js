const userModel = require("../models/userSchema")
const jwt = require('jsonwebtoken');

module.exports.getData = async (req, res) => {
    try {
        let users = await userModel.find({});
        return res.json(users);
    } catch (error) {
        return res.json({ 'message': error.message })
    }
}

module.exports.createData = async (req, res) => {
    try {
        console.log(req.body);

        await userModel.create(req.body);
        return res.json({ 'message': 'Data created successfully' });
    } catch (error) {
        return res.json({ 'message': error.message })
    }
}

module.exports.login = async (req, res) => {
    try {
        let user = await userModel.findOne({ username: req.body.username });
        if (user) {
            if (user.password == req.body.password) {
                let payload = {
                    username: user.username,
                    role: "user"
                }

                let token = jwt.sign(payload, 'userkey');

                return res.cookie('token', token).json({ 'message': 'Login successfully.' })
            }
            else {
                return res.json({ 'message': 'Password not match.' });
            }
        }
        else {
            return res.json({ 'message': 'User Not Found.' });
        }
    } catch (error) {

    }
}

module.exports.clearCookieData = (req, res) => {
    return res.clearCookie('token').json({ "message": "Data cleared." });
}

module.exports.indexPage = (req, res) => {
    return res.render('index');
}

module.exports.createUser = async (req, res) => {
    try {
        await fetch('http://localhost:8080/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body)
        })

        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}

module.exports.getUserData = async (req, res) => {
    try {
        await fetch('http://localhost:8080/user', {
            method: 'GET',
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            return res.send(data);
        }).catch((err) => {
            console.log(err.message);
            return res.json({ 'message': "error" });
        })

    } catch (error) {
        return res.json({ 'message': error.message });
    }
}