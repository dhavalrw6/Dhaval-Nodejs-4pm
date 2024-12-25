const { Router } = require("express");
const productRouter = require("./productRouter");
const categoryRouter = require("./categoryRouter");
const subCategoryRouter = require("./subCategoryRouter");


const router = Router();

router.get('/', (req, res) => {
    return res.render('index');
})

router.use('/product', productRouter);
router.use('/product', categoryRouter);
router.use('/product', subCategoryRouter);

module.exports = router;