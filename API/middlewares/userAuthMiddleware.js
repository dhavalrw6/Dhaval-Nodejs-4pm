const jwt = require('jsonwebtoken');

module.exports.userAuth = (req, res, next) => {
    // console.log(req.cookies.token);
    let token = req.cookies.token;
    let decoded = jwt.verify(token, 'userkey');
    console.log(decoded);

    if(decoded.role === 'user'){
        return res.json({"message" : "welcome user"});
    }
    else
    {
        return res.json({ "message": "welcome admin" });
    }

    // if (req.params.id && req.cookies.token) {
    //     return next();
    // }
    // return res.status(401).json({ "message": "Unauthorized" });
}