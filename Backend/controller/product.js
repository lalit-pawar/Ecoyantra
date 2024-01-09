import Product from "../Models/productModel.js"
import { createError } from "../utils/error.js";

export const submitProduct = async (req, res, next) => {
  try {
    // const user = req.user.id; // Assuming you have user authentication
    const {
      name,
      description,
      category,
      brand,
      model,
      processor,
      ram,
      storage,
      displaySize,
      resolution,
      operatingSystem,
      batteryCapacity,
      wifi,
      bluetooth,
      ports,
      camera,
      audio,
      video,
      color,
      weight,
      dimensions,
      touchscreen,
      fingerprintSensor,
      faceRecognition,
      specialFeatures,
      price,
      availability,
      sellername,
      seller_mob_number,
    } = req.body;

    const newProduct = new Product({
    //   user: userId,   
      
        name,
        description,
        category,
        brand,
        model,
        processor,
        ram,
        storage,
        displaySize,
        resolution,
        operatingSystem,
        batteryCapacity,
        wifi,
        bluetooth,
        ports,
        camera,
        audio,
        video,
        color,
        weight,
        dimensions,
        touchscreen,
        fingerprintSensor,
        faceRecognition,
        specialFeatures,
        price,
        availability,
        sellername,
        seller_mob_number 

    });

    await newProduct.save();

    res.status(201).json({ message: 'Product submitted successfully', product: newProduct });
  } catch (error) {
    console.error(error);
    next(createError,(500, 'Internal server error'));
  }
};



 // Find all products associated with the user

export const getProducts = async (req, res, next) => {
  try {
   

  
    const userProducts = await Product.find({ user: userId });

    res.status(200).json({ products: userProducts });
  } catch (error) {
    console.error(error);
    next(createError(500, 'Internal server error'));
  }
};



  // Find all products associated with the user.
export const getProductsForAdmin = async (req, res, next) => {
    try {
     
      if (!req.user.isAdmin) {
        return res.status(403).json({ message: 'Permission denied. You are not an admin.' });
      }
  
      const userId = req.params.id; // Assuming you get the user id from the request params
  
      const userProducts = await Product.find({ user: userId });
  
      res.status(200).json({ products: userProducts });
    } catch (error) {
      console.error(error);
      next(createError(500, 'Internal server error'));
    }
  };



//Get product by product Id 


export const getProductById = async (req, res, next) => {
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
  }
  catch(err){
      next(err);
  }

};

