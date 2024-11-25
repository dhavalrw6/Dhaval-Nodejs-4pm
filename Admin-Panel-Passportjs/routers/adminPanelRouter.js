const { Router } = require("express");
const adminPanelController = require("../controllers/adminPanelController");
const adminPanelRouter = Router();

adminPanelRouter.get('/', adminPanelController.indexPage);

module.exports = adminPanelRouter;