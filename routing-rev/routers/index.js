const express = require('express');
const productCtrl = require('../controllers/bookController');

const router = express.Router();

router.get('/', productCtrl.homePage);
router.get('/about', productCtrl.aboutPage);
router.get('/delete/:id', productCtrl.deleteBookData);

router.get('/edit/:id', productCtrl.editPage);
router.post('/update/:id', productCtrl.updateBookData);
// book Api

router.get('/getData', productCtrl.getBookData);
router.post('/create', productCtrl.createData);
// router.patch('/update/:id', productCtrl.updateBookData);
// router.delete('/delete/:id',productCtrl.deleteBookData);



module.exports = router;