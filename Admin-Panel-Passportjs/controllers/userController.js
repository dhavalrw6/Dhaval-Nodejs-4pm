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
        return res.redirect('/user/login')
    }
}

module.exports.loginPage = (req, res) => {
    return res.render('./pages/login');
}

module.exports.profilePage = (req, res) => {
    let user = req.user || {};
    return res.render('./pages/profile', {
        user
    });
}

module.exports.logout = (req, res) => {
    req.logout(() => {
        return res.redirect('/user/login');
    });
}

module.exports.changePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword, confPassword } = req.body;
        let { id } = req.params;
        let User = await user.findById(id);

        if (User.password === oldPassword) {
            if (newPassword == confPassword) {

                User.password = newPassword;
                await User.save();
                return res.redirect('/user/logout');
            }
        }

        return res.redirect('/user/profile');

    } catch (error) {
        console.log(error);
        return res.redirect('/user/profile');
    }
}

module.exports.changePasswordPage = (req, res) => {
    return res.render('./pages/change-password');
}