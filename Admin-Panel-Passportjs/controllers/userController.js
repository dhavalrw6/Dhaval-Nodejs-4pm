const { json } = require("body-parser");
const user = require("../models/userSchema");
const nodemailer = require("nodemailer");
module.exports.signupPage = (req, res) => {
    return res.render('./pages/signup');
}

module.exports.signup = async (req, res) => {
    try {
        console.log(req.body);
        let data = await user.create(req.body);
        console.log("User Created.");
        req.flash('success', 'User Created.');
        return res.redirect('/user/login');
    } catch (error) {
        console.log(error);
        // req.flash('error', error.message);
        return res.redirect('/user/signup');
    }
}

module.exports.loginPage = (req, res) => {
    return res.render('./pages/login');
}

module.exports.login = (req, res) => {
    req.flash('success', 'Login successfully.')
    return res.redirect('/');
}

module.exports.profilePage = (req, res) => {
    let user = req.user || {};
    return res.render('./pages/profile', {
        user
    });
}

module.exports.logout = (req, res) => {
    req.logout(() => {
        req.flash('success', 'Logged out successfully');
        return res.redirect('/user/login');
    });
}

module.exports.changePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword, confPassword } = req.body;
        let { id } = req.params;
        let User = await user.findById(id);

        if (User.password === oldPassword) {
            if (oldPassword !== newPassword) {
                if (newPassword === confPassword) {
                    User.password = newPassword;
                    await User.save();
                    console.log("password Change.");
                    req.flash('success', 'Password Changed Successfully.');
                    return res.redirect('/user/logout');
                }
                else {
                    req.flash('error', 'Password and Confirm Password do not match.');
                    console.log("New Password and Confirm Password do not match.");
                }
            }
            else {
                req.flash('error', 'Old Password and New Password cannot be same');
                console.log("Old Password and New Password are same..")
            }
        }
        else {
            req.flash('error', 'Old Password is incorrect');
            console.log("Old Password is incorrect..")
        }

        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error);
        // req.flash('error',error.message);
        return res.redirect(req.get('Referrer') || '/');
    }
}

module.exports.changePasswordPage = (req, res) => {
    return res.render('./pages/change-password');
}

module.exports.recoverPassword = async (req, res) => {
    try {
        let otp = Math.floor(10000 + Math.random() * 999999);
        let { email } = req.body;
        console.log(email);
        let User = await user.findOne({ email: email });
        if (User) {

            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // true for port 465, false for other ports
                auth: {
                    user: "dhavalleelawala@gmail.com",
                    pass: "dfnm ghix xwlx fgea",
                },
            });

            const info = await transporter.sendMail({
                from: '<dhavalleelawala@gmail.com>', // sender address
                to: `${User.email}`, // list of receivers
                subject: "OTP Verify", // Subject line
                html: `<b>Hello OTP: ${otp}</b>`, // html body
            });

            if (info.messageId) {
                // res.cookie('otp', otp);
                // res.cookie('id', User.id);
                req.session.otp = otp;
                req.session.userId = User.id;
            }

            console.log("Message sent: %s", info.messageId);
            req.flash('success', 'OTP send to your email');
            return res.redirect('/user/otp-verify');
        } else {
            console.log("User not found");
            req.flash('error', 'User not found');
            return res.redirect(req.get('Referrer') || '/');
        }

    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}

module.exports.otpVerifyPage = (req, res) => {
    return res.render("./pages/otp-verify");
}

module.exports.otpVerify = (req, res) => {
    if (req.body.otp == req.session.otp) {
        res.clearCookie('otp');
        req.flash('success', 'OTP verified');
        return res.redirect('/user/forgotPassword');
    }
    else {
        console.log("otp not match");
        req.flash('error', 'OTP not match');
        return res.redirect(req.get('Referrer') || '/');
    }
}

module.exports.forgotPasswordPage = (req, res) => {
    return res.render('./pages/forgotPassword');
}

module.exports.forgotPassword = async (req, res) => {
    try {
        let { newPassword, confirmPassword } = req.body;
        // console.log("session log", req.session.userId);

        let User = await user.findById(req.session.userId);
        console.log(User);
        if (newPassword == confirmPassword) {
            User.password = newPassword;
            await User.save();
            res.clearCookie('email');
            return res.redirect('/user/login');
        }
        else {
            return res.redirect(req.get('Referrer') || '/');
        }
    } catch (error) {

        console.log(error);
        return res.redirect(req.get('Referrer') || '/');
    }
}