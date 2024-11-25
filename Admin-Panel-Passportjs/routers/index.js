const { Router } = require("express");
const adminPanelRouter = require("./adminPanelRouter");

const router = Router();

router.use('/', adminPanelRouter)

module.exports = router;