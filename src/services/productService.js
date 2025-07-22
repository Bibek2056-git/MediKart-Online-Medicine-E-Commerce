import fs from "fs";

const getProducts = () => {
    const rawData = fs.readFileSync("./src/data/products.json", "utf8");
    const products = JSON.parse(rawData);

    const filterproducts = products.filter(products=>products.price >= 20);
return filterproducts;
};

export default {getProducts};