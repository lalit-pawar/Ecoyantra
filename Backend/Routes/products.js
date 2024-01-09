import express from "express";
import { verifyAdmin } from '../utils/verifytoken.js';

import { submitProduct, getProductById,getProductsForAdmin } from "../controller/product.js";

const router = express.Router();

// Route to submitProduct . 
router.post("/submit", submitProduct); 


//Route for getting product by Prduct id.
router.get("/:id" , getProductById ); 


//get All Product route.
router.get("/" ,  verifyAdmin, getProductsForAdmin); 









export default router;