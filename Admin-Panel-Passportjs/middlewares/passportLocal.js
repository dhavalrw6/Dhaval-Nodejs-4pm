
const LocalStrategy = require('passport-local').Strategy;

const passport = require('passport');
const user = require('../models/userSchema');

passport.use('user',new LocalStrategy(async (username, password, done) => {
    try {
        let User = await user.findOne({ username });

        if (User) {
            if (User.password == password) {
                done(null, User);
            }
            else {
                done(null, false);
            }
        }
        else {
            done(null, false);
        }

    } catch (error) {
        done(error, false);
    }
}));

passport.serializeUser((User, done) => {
    return done(null, User.id);
})

passport.deserializeUser(async (id, done) => {
    let User = await user.findById(id);
    return done(null, User);
})

module.exports = passport;