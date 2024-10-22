const { Router } = require("express");
const AdminCtl = require('../controllers/adminController')


const router = Router();

router.get('/',AdminCtl.homePage);

module.exports = router;