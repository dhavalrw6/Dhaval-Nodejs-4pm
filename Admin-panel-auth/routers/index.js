const express = require('express');
const adminCtl = require('../controllers/adminPanelControllers');
const productCtl = require('../controllers/productControllers');
const router = express.Router();

router.get('/', adminCtl.homePage);
router.get('/form-basic', adminCtl.formBasicPage);
router.get('/tables', adminCtl.tablePage);

router.post('/form-basic',productCtl.create);
module.exports = router; 