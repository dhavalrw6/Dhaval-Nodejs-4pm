module.exports.homePage = (req, res) => {
    return res.render('home');
}

module.exports.aboutPage = (req, res) => {
    return res.render('about');
}

module.exports.contactPage = (req, res) => {
    return res.render('contact');
}