const bookModle = require("../models/bookSchema");

module.exports.homePage = (req, res) => {
    return res.render('home');
}

module.exports.aboutPage = (req, res) => {
    return res.render('about');
}

module.exports.createData = async (req, res) => {
    try {
        await bookModle.create(req.body);
        return res.json("Data Created.");
    } catch (error) {
        console.log(error);
    }
}

module.exports.getBookData = async (req, res) => {
    try {
        let data = await bookModle.find({});
        // return res.render('home', { data });
        return res.json(data);
    } catch (error) {
        console.log(error);

    }
}

module.exports.updateBookData = async (req, res) => {
    try {
        let { id } = req.params;
        await bookModle.findByIdAndUpdate(id, req.body);
        console.log("Data updated..");
        // return res.redirect('back');
        return res.json("Data updated..");
    } catch (error) {
        console.log(error);
    }
}

module.exports.deleteBookData = async (req, res) => {
    try {
        let { id } = req.params;
        await bookModle.findByIdAndDelete(id);
        // console.log("Data Deleted");
        return res.json("Data Deleted");
    } catch (error) {
        console.log(error);
    }
}