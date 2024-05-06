import orderModel from "../Models/orderModel.js";
import userModel from "../Models/UserModel.js";


//placing user order for frontend
const placeOrder = async(req,res)=>{
    const frontend_url="http://localhost:3000"
    try{
        const newOrder=new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address

        })
        console.log("neworder:",newOrder);
        await newOrder.save()
        .then(savedOrder=>{
            console.log('order saved :',savedOrder)
        })
        .catch(error=>{
            console.log(error)
        })
        {

        };
        
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})

        // const line_items=req.body.items.map((item)=>({
        //     price_data:{
        //         currency:"inr",
        //         prodcuct_data:{
        //             name:item.name
        //         },
        //         unit_amount:item.price*100*80
        //     },
        //     quantity:item.quantity
        // }))
        // line_items.push({
        //     price_data:{
        //         currency:"inr",
        //         prodcuct_data:{
        //             name:"Delivery Charges"
        //         },
        //         unit_amount:20*100*80
        //     },
        //     quantity:1
        // })
        // const session=await stripe.chechkout.sessions.create({
        //     line_items:line_items,
        //     mode:'payment',
        //     success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
        //     cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,

        // })
        // res.json({success:true,session_url:session.url})

    }catch(error)
    {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}
    //users orders for frontend
const userOrders=async(req,res)=>{
    try{
        const orders=await orderModel.find({userId:req.body.userId});
        res.json({success:true,data:orders})
    }catch(error)
    {
        console.log(error);
        res.json({success:false,message:"error"})
    }

    }

export {placeOrder,userOrders};