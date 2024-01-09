import express from "express";

const router = express.Router();

router.get("/", async (req,res)=>{

      res.send("hello from blog home");
});

router.get("/Blogs", (req,res)=>{

      res.send("This is from blogs");
})

export default router;