const { Router } = require("express");
const userRouter = require("./userRouter");

const router = Router();

router.use('/',userRouter);


module.exports = router;