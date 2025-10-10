import bodyParser from "body-parser";
import express from "express";

import dotenv from "dotenv";
import config from "./config/config.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoute.js"

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({
        name: config.name,
        port: config.port,
        status: "OK",
        version: config.version,
    });
});
//app.use("/api/auth", authRoutes);

app.use("/products", productRoutes);

app.listen(config.port, ()=>{
    console.log(`Server Running at port ${config.port} in the version ${config.version} ......`);
});