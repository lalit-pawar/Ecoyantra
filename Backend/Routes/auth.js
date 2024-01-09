import express from "express";
import { register,login } from "../controller/auth.js";

const router = express.Router();

router.get("/users", async (req,res)=>{

      res.send("hello from users");
});



router.post("/register", register);  // route to register user.
router.post("/login" , login); //route for user login.

export default router;