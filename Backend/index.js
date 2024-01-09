import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/users.js";
import productRoute from "./Routes/products.js";
import blogsRoute from  "./Routes/Blogs.js";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config(); 

const connect = async ()=>{
try {
    await mongoose.connect(process.env.URI);
  
    console.log("connected to mongodb");

  } catch (error) 
  {
    throw error;
  }
  };

// Mongodb Database connection check.
mongoose.connection.on("disconnected",()=>{

      console.log("Mongodb disconnected");
})

mongoose.connection.on("connected",()=>{

    console.log("Mongodb connected");
});



//Middlewares

app.use(express.json()); // Middleware to parse JSON requests

app.use(cookieParser());

app.use("/auth", authRoute); // Route to create new user.
app.use("/user", userRoute);  // route to get the users 
app.use("/product", productRoute); // route to get the products.
app.use("/blog", blogsRoute);






app.get("/", (req,res)=>{

     res.send("Hello from me ");
});


app.listen(5000,() =>{
   connect()
    console.log("connected to backend");
})

