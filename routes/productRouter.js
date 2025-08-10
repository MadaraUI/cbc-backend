import express from 'express';
import { createProducts, deleteProducts, getProductId, getProducts, updateProducts } from '../controllers/productController.js';


const productRouter = express.Router();

productRouter.get("/",getProducts)
productRouter.post("/", createProducts)
productRouter.delete("/:productID", deleteProducts);
productRouter.put("/:productID", updateProducts)
productRouter.get("/:productID", getProductId)

export default productRouter;