import mongoose from "mongoose";

const productSchema = new mongoose.Schema({


    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  

    brand: String,
    model: String,
    processor: String,
    ram: String,
    storage: String,
    displaySize: String,
    resolution: String,
    operatingSystem: String,
    batteryCapacity: String,
    wifi: Boolean,
    bluetooth: Boolean,
    ports: [String],
    camera: String,
    audio: String,
    video: String,
    color: String,
    weight: String,
    dimensions: String,
    touchscreen: Boolean,
    fingerprintSensor: Boolean,
    faceRecognition: Boolean,
    specialFeatures: [String],
    price: {
      type: Number,
      required: true,
    },
    availability: {
      type: Boolean,
      default: true,
    },
  sellerInformation: {
    sellername: String,
    seller_mob_number : Number,
    // You may want to expand this with more details about the seller
  },
},
  {
     timestamps: true,
  },
);

const Product = mongoose.model('Product', productSchema);

export default Product;