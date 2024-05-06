import express from 'express';
// import cors from "cors";
// import {connectDB } from './config/db.js';
// import userApp from './APIs/user-api.js';

//app config
const app=express()
const port=process.env.PORT||4999;

//app middleware
//app.use(express.json())
//app.use(cors())

//connectDB();

app.get("/",(req,res)=>{
    res.send("api working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost: ${port}`)
})