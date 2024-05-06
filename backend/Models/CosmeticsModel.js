import mongoose from "mongoose";

const CosmeticsSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const CosmeticsModel = mongoose.model.cosmetics || mongoose.model("cosmetics",CosmeticsSchema)

export default CosmeticsModel;