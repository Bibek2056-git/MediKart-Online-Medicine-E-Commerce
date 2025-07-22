import productService from "../services/productService.js";



const getProducts = (req, res) => {
const products = productService.getProducts();
    res.status(200).json(products);
    // res.send("All Products");
};

const createProduct = (req, res) => {
    res.send("Create a product");
}; 

const getProductByID = (req, res) => {
    res.send("One Products");
};

export default { getProducts, createProduct, getProductByID };