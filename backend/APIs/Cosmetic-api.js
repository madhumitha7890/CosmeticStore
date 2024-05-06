import express from 'express';
import { addCosmetic, listCosmetics, removeCosmetic } from '../Controllers/CosmeticsController.js';
//for image storing system
import multer from 'multer';


const CosmeticApp = express.Router();
//image storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
        //cb means call back
    }
})
const upload = multer({storage:storage})

CosmeticApp.post("/add",upload.single("image"),addCosmetic);
CosmeticApp.get("/list",listCosmetics);
CosmeticApp.post("/remove",removeCosmetic)

export default CosmeticApp;