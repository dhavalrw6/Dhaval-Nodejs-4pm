const user = require("../models/userSchema");

module.exports.signupPage = (req, res) => {
    return res.render('./pages/signup');
}

module.exports.signup = async (req, res) => {
    try {
        console.log(req.body);
        let data = await user.create(req.body);
        console.log("User Created.");
        return res.send(data);
    } catch (error) {
        console.log(error);
        if (error.key.username) {
            console.log(error.MongoServerError);
        }
        return res.redirect('/user/signup')
    }
}

module.exports.loginPage = (req, res) => {
    return res.render('./pages/login');
}

