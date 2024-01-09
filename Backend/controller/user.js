import User from "../Models/userModel.js";



// TO update User.

export const updateUser = async (req,res,next)=>{
 try{
    const updateUser = await User.findByIdAndUpdate(
        
        req.params.id,
         
            {$set: req.body},
             {new: true},
    );

    res.status(200).json(updateUser);
 }
 catch(err){
     next(err);
 }
}


//To delete User.

export const deleteUser = async (req,res,next)=>{

  try{
       await User.findByIdAndDelete(req.params.id);
       res.status(200).json("user has been deleted");
 }
 catch(err){
     next(err);
 }
}

// TO get User.

export const getUser = async (req,res,next)=>{

    try{
         const user = await User.findById(req.params.id);
         res.status(200).json(user);
   }
   catch(err){
       next(err);
   }
  };


// To get all users.

export const getUsers = async (req,res,next)=>{

    try{
         const users = await User.find();
         res.status(200).json(users);
   }
   catch(err){
       next(err);
   }
  }