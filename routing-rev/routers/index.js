const express = require('express');
const productCtrl = require('../controllers/productController');

const router = express.Router();

router.get('/', productCtrl.homePage);
router.get('/about',productCtrl.aboutPage);

module.exports = router;