const express = require('express');
const userCtl = require('../controllers/userControllers');

const userRouter = express.Router();

userRouter.post('/create', userCtl.addUserData);
userRouter.get('/signup', userCtl.signupPage)
userRouter.get('/login', userCtl.loginPage)
userRouter.post('/login', userCtl.login)
userRouter.get('/logout', userCtl.logout);
module.exports = userRouter;