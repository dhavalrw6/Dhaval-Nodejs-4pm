const LocalStrategy = require('passport-local').Strategy;

const passport = require('passport');
const admin = require('../models/adminSchema');

passport.use(new LocalStrategy({
    usernameField: 'email',
}, async (email, password, done) => {
    try {
        let Admin = await admin.findOne({ email: email });
        if (!Admin) {
            return done(null, false);
        }
        else {
            if (Admin.password == password) {
                return done(null, Admin);
            }
            else {
                return done(null, false);
            }
        }
    } catch (error) {
        return done(error, false);
    }
}));

passport.serializeUser((Admin, done) => {
    return done(null, Admin.id);
})

passport.deserializeUser(async (id, done) => {
    let Admin = await admin.findById(id);
    return done(null, Admin); // req.user
})


passport.AdminPassportAuth = (req, res, next) => {
    if (!req.isAuthenticated()) {
       return res.redirect('/login');
    }
    next();
}

passport.setAdminAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.admin = req.user;
    }
    next();
}

module.exports = passport;