import mongoose, { connect } from "mongoose";
export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://hattimadhumitha:mongodbatlasmadhu@cluster0.fbmurn3.mongodb.net/Cosmeticstore').then(()=>console.log("dB connected"));
}