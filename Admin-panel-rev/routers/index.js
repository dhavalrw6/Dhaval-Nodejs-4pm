const { Router } = require("express");
const ApRouter = require("./admin_panelRouter");
const adminRouter = require("./adminRouter");


const router = Router();

router.use('/', ApRouter);
router.use('/', adminRouter);

module.exports = router;