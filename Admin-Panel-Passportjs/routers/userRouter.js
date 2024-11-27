const { Router } = require("express");
const userController = require('../controllers/userController');
const passport = require("passport");

const userRouter = Router();

userRouter.get('/signup', userController.signupPage);
userRouter.post('/signup', userController.signup);
userRouter.get('/login', userController.loginPage)
userRouter.post('/login', passport.authenticate('user', { failureRedirect: '/user/login', successRedirect: '/' }));
userRouter.get('/logout', userController.logout);
userRouter.get('/profile', passport.userPassportAuth, userController.profilePage);

userRouter.post('/change-pass/:id', userController.changePassword);

module.exports = userRouter;