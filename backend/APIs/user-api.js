// //create mini express app
// const exp=require('express')
// //import { loginUser,registerUser } from '../Controllers/UserController';
// const userApp=exp.Router()
// const {createUserOrAuthor,LoginUserOrAuthor}=require('./Utils')
// const expressAsyncHandler=require('express-async-handler')
// let usersCollection;
// let productsCollection;
// userApp.use((req,res,next)=>{
//     usersCollection=req.app.get('usersCollection')
//     productsCollection=req.app.get('productsCollection')
//     next()
// })
// //define routes
// //user or author creation
// userApp.post('/register',createUserOrAuthor)
// //user or author login
// userApp.post('/login',LoginUserOrAuthor)

// export default userApp;
// userApp.get('/products',expressAsyncHandler(async(req,res)=>{
//     const productsList=await productsCollection.find({status:true}).toArray()
//     res.send({message:"all products",payload:productsList})
// }))



// //export
// module.exports=userApp;




import express  from 'express';
import { loginUser,registerUser } from '../Controllers/UserController.js';

const userApp = express.Router();
userApp.post("/register",registerUser);
userApp.post("/login",loginUser);

export default userApp; 