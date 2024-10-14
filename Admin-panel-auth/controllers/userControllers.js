module.exports.addUserData = async (req, res) => {
    try {
        let data = await User.create(req.body);
        res.cookie('userId', data.id);
        return res.redirect('/form-basic');
    } catch (error) {
        console.log(error);
        return res.redirect('/form-basic');
    }
}