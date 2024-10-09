const bookModle = require("../models/bookSchema");

module.exports.homePage = (req, res) => {
    return res.render('home');
}

module.exports.aboutPage = async (req, res) => {
    try {
        let data = await bookModle.find({});
        return res.render('about', { data });
    } catch (error) {
        console.log(error);
    }
}

module.exports.Home1Page = async (req, res) => {
    try {
        let data = await bookModle.find({});
        console.log(data);

        return res.render('index', { data });
    } catch (error) {
        console.log(error);
    }
}

module.exports.editPage = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await bookModle.findById(id);
        return res.render('edit', { data });
    } catch (error) {
        console.log(error);
        return res.render('edit');
    }
}


module.exports.createData = async (req, res) => {
    try {
        console.log(req.body);
        await bookModle.create(req.body);
        return res.redirect('/about');
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
        return res.redirect('/about');
    } catch (error) {
        console.log(error);
        return res.redirect('/about');
    }
}

module.exports.deleteBookData = async (req, res) => {
    try {
        let { id } = req.params;
        await bookModle.findByIdAndDelete(id);
        // console.log("Data Deleted");
        // return res.json("Data Deleted");
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        return res.redirect('back');
    }
}