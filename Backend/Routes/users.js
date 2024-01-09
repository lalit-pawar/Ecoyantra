import express from "express";
import {updateUser,deleteUser, getUser,getUsers } from "../controller/user.js" ;
import { verifyToken, verifyUser,verifyAdmin } from "../utils/verifytoken.js";

const router = express.Router();

// User Logged in authentication using cookie and Token 
router.get("/checkauthentication", verifyToken,(req,res,next)=>{
      res.send("hello user, you are logged in ");
} );


router.get("/checkuser/:id", verifyUser,(req,res,next)=>{
    res.send("hello user, you are logged in and you can delete your account ");
});


router.get("/checkadmin/:id", verifyAdmin,(req,res,next)=>{
    res.send("hello Admin, and you can delete your account ");
});







//get user route.
router.get("/:id" , getUser);

//get All users route.
router.get("/" , getUsers);


//Update user route.
router.put("/:id" ,updateUser);



//Delete user route.
router.delete("/:id" , deleteUser);


export default router;

