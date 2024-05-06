// const express = require("express");
// const app = express();
// require('dotenv').config()//process.env.PORT
// const path = require("path");
// const mongoClient = require("mongodb").MongoClient;


// //deploy react build in this server
// app.use(express.static(path.join(__dirname,'../client/build')))
// //to parse the body of req
// app.use(express.json())


// //connect to db
// mongoClient.connect(process.env.DB_URL)
// .then(client=>{
//     //get db obj
//     const cosmeticstoredb=client.db('cosmeticstoredb')
//     //get collection obj
//     const usersCollection=cosmeticstoredb.collection('usersCollection')
//     const productsCollection=cosmeticstoredb.collection('productsCollection')
//     //share collection obj with express app
//     app.set('usersCollection',usersCollection)
//     app.set('productsCollection',productsCollection)
//     //confirm db connection status
//     console.log("DB connection success")
// })
// .catch(err=>console.log("Err in DB connection",err))

// //import API routes
// const userApp=require('./APIs/user-api')
// const adminApp=require('./APIs/admin-api')

// //if path starts with user-api, send req to userApp
// app.use('/user',userApp)
// //if path starts with admin-api, send req adminApp
// app.use('/admin',adminApp)


// //deals with page refresh
// app.use((req,res,next)=>{
//     res.sendFile(path.join(__dirname,'../client/build/index.html'))
// })

// //express error handler
// app.use((err,req,res,next)=>{
//     res.send({message:"error",payload:err.message})
// })
// //assign port number
// const port=process.env.PORT || 5000;
// app.listen(port,()=>console.log(`Web server running on port ${port}`))


import express from 'express';
import cors from "cors";
import {connectDB } from './config/db.js';
import CosmeticApp from './APIs/Cosmetic-api.js';
import userApp from './APIs/user-api.js';
import 'dotenv/config.js'
import CartApp from './APIs/cart-api.js';
import orderApp from './APIs/order-api.js';

//app config
const app=express()
const port=process.env.PORT||4999;

//app middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//API ENDPOINTS
app.use("/api/cosmetic",CosmeticApp)
//mounting uploads folder to this route
//if we type http://localhost:4999/images/imagename
//then we can see the image uploaded
app.use("/images",express.static('uploads'))
app.use("/api/user",userApp)
app.use("/api/cart",CartApp)
app.use("/api/order",orderApp)

app.get("/",(req,res)=>{
    res.send("api working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost: ${port}`)
})

//mongodb+srv://hattimadhumitha:mongodbatlasmadhu@cluster0.fbmurn3.mongodb.net/?