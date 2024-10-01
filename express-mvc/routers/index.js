const express = require('express')
const userData = require('../controllers/userController');

const router = express.Router();

router.get('/', userData.homePage);
router.post('/insertData', userData.createData);
router.get('/view',userData.viewPage);
router.get('/deleteData/:id',userData.deleteData);

module.exports = router;