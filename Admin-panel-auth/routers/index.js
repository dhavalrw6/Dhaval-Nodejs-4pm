const express = require('express');
const adminCtl = require('../controllers/adminPanelControllers');
const productCtl = require('../controllers/productControllers');
const userRouter = require('./userRouter');
const { userAuth } = require('../middlewares/userAuth');
const router = express.Router();

router.get('/',userAuth ,adminCtl.homePage);
router.get('/form-basic', adminCtl.formBasicPage);
router.get('/tables', adminCtl.tablePage);

router.post('/form-basic', productCtl.create);
router.get('/deleteData/:id', productCtl.deleteData);
router.get('/editData/:id', productCtl.editPage);
router.post('/editData/:id', productCtl.editData);

router.use('/user', userRouter);

module.exports = router; 