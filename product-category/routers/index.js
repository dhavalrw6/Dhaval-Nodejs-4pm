const { Router } = require("express");
const productRouter = require("./productRouter");


const router = Router();

router.get('/', (req, res) => {
    return res.render('index');
})

router.use('/product', productRouter);

module.exports = router;