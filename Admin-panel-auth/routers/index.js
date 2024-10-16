const express = require('express');
const adminCtl = require('../controllers/adminPanelControllers');
const productCtl = require('../controllers/productControllers');
const router = express.Router();

router.get('/', adminCtl.homePage);
router.get('/form-basic', adminCtl.formBasicPage);
router.get('/tables', adminCtl.tablePage);

router.post('/form-basic',productCtl.create);
router.get('/deleteData/:id',productCtl.deleteData);
router.get('/editData/:id',productCtl.editPage);
router.post('/editData/:id',productCtl.editData);
module.exports = router; 