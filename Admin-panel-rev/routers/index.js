const { Router } = require("express");
const ApRouter = require("./admin_panelRouter");


const router = Router();

router.use('/',ApRouter);

module.exports = router;