import CosmeticsModel from "../Models/CosmeticsModel.js";
//file system which is prebuilt in nodejs
import fs from 'fs';

//add cosmeticsitem

const addCosmetic = async(req,res)=>{
    let image_filename = `${req.file.image}`;
    const cosmetic = new CosmeticsModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await cosmetic.save();
        res.json({success:true,message:"Cosmetic added"})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}
//all food list
const listCosmetics = async(req,res)=>{
    try{
        const cosmetics = await CosmeticsModel.find({});
        res.json({success:true,data:cosmetics})
    }catch(error)
    {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}
//remove cosmetics
const removeCosmetic = async(req,res)=>{
    try{
        const cosmetic  = await CosmeticsModel.findById(req.body.id);
        fs.unlink(`uploads/${cosmetic.image}`,()=>{})
        await CosmeticsModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Cosmetic Removed"})

    }catch(error)
    {
        console.log(error);
        res.json({success:false,message:"eRROR"})
    }
}
export {addCosmetic,listCosmetics,removeCosmetic}