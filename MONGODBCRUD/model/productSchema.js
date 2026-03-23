import mongoose from "mongoose";
const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        maxLength:[25]
    },

    category:{
        type:String,
        require:true,
        enum: [
      "Accessories",
      "Laptops",
      "Phones",
      "Tablets",
      "Audio",
      "Wearables",
      "Gaming"
    ]
    },
    price:{
        type:Number,
        require:true,
        min: [0, "Price can't be negative"]
    },
    stock:{
        type:Number,
        require:true,
        min: [0, "Price can't be negative"]
    },
    specs:{
        type:Object
    },
    tags:[{
        type:String,
    }],
    
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true,
    }
},{timestamps:true})

const product=mongoose.model("Product",ProductSchema);
export default product; 