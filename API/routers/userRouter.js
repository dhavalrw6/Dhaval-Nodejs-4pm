const { Router } = require("express");
const userController = require('../controllers/userController');
const { userAuth } = require("../middlewares/userAuthMiddleware");

const userRouter = Router();

userRouter.get('/user', userController.getData);
userRouter.post('/user', userController.createData);

userRouter.post('/login', userController.login);
userRouter.get('/clearCookie', userController.clearCookieData);



userRouter.get('/', userController.indexPage);

userRouter.post('/user/create', userController.createUser);
userRouter.get('/user/get', userController.getUserData);

module.exports = userRouter;