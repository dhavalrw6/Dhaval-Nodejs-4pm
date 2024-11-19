
const LocalStrategy = require('passport-local').Strategy;

const passport = require('passport');
const admin = require('../models/adminSchema');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        let Admin = await admin.findOne({ email });
        if (Admin) {
            if (Admin.password == password) {
                return done(null, Admin);
            }
            else {
                return done(null, false);
            }
        }
        else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
}))

passport.serializeUser((Admin, done) => {
    return done(null, Admin.id);
})

passport.deserializeUser(async (id, done) => {
    try {
        let Admin = await admin.findById(id);

        if (Admin) {
            return done(null, Admin);
        }
        else {
            return done(null, false);
        }

    } catch (error) {
        return done(error, false);
    }
})

passport.AdminPassportAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        return res.redirect('/login');
    }
}

module.exports = passport;