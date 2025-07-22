import express from 'express';

import productController from '../controllers/productController.js';

const router = express.Router();



router.get("/", productController.getProducts);

router.get("/users", (req, res) => {
    const rawData = fs.readFileSync("./src/data/products.json", "utf8");
    const products = JSON.parse(rawData);

    const filterproducts = products.filter(products=>products.price > 20);

    res.status(200).json(filterproducts);
    // res.send("All Products");
});


router.get("/one", productController.getProductByID);

router.post("/", productController.createProduct);

export default router;