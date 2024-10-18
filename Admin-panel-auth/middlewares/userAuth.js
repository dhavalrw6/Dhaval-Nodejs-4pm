module.exports.userAuth = (req, res, next) => {
    let { userId } = req.cookies;
    if (userId) {
        return next();
    } else {
        return res.redirect('/user/login');
    }
}