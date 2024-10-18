const User = require("../models/userSchema");

module.exports.addUserData = async (req, res) => {
    try {
        let data = await User.create(req.body);
        return res.redirect('/form-basic');
    } catch (error) {
        console.log(error);
        return res.redirect('/form-basic');
    }
}

module.exports.signupPage = (req, res) => {
    return res.render('signup');
}

module.exports.loginPage = (req, res) => {
    return res.render('login');
}

module.exports.login = async (req, res) => {
    try {
        let { username, password } = req.body;
        let user = await User.findOne({ username })
        
        if(user)
        {
            if(user.password == password)
            {   
                res.cookie('userId',user.id);
                return res.redirect('/');
            }
            else
            {
                return res.redirect('back');
            }
        }
        else
        {
            return res.redirect('back');
        }

    } catch (error) {
        console.log(error);
        res.redirect('back')
    }
}

module.exports.logout=(req,res)=>{
    res.clearCookie('userId');
    return res.redirect('/user/login');
}