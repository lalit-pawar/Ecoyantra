import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (value) => /\S+@\S+\.\S+/.test(value),
        message: 'Invalid email address',
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    mobile_number: {
      type: Number,
      required: true,
      unique: true,
    },
    dateJoined: {
      type: Date,
      default: Date.now,
    },
    isAdmin:{
         
        type: Boolean,
        default: false,

    },
  },
  { 
    timestamps:true,
  }
  );

  
const User = mongoose.model('User', userSchema);

export default User;










