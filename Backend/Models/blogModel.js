import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
  images: {
    type: [String], // Array of image URLs
    default: [],
  },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;









