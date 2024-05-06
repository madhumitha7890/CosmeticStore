import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import axios from 'axios'
import { StoreContext } from '../Context/StoreContext'
import { Link } from 'react-router-dom'
const PlaceOrder = () => {
  const {getTotalCartAmount,token,cosmetics_list,url,cartItems}=useContext(StoreContext);
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""

  })
  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  

  const placeOrder = async (event)=>
  {
      event.preventDefault();
      let orderItems=[];
      // cosmetics_list.forEach((item) => {
      //   console.log("Item ID:", item._id);
      //   console.log("Cart Quantity:", cartItems[item._id]);
    
      //   if (cartItems[item._id] > 0) {
      //     let itemInfo = { ...item }; // Create a copy of the item
      //     itemInfo.quantity = cartItems[item._id];
      //     orderItems.push(itemInfo);
      //   }
      // });
    
      // console.log("Order Items:", orderItems);



      console.log(cartItems)
      cosmetics_list.map((item)=>{
        if(cartItems[item._id]>0)
        {
          let itemInfo=item;
          console.log(itemInfo);
          console.log(cartItems[item._id])
          itemInfo["quantity"] = cartItems[item._id];
          console.log(itemInfo);
          orderItems.push(itemInfo);
        }
      })
      console.log(orderItems);

      let orderData={
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+20
      }
      console.log(orderData);
      window.location.href='http://localhost:3000/order-recieved'
      let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
      console.log(orderData);
      if(response.data.success)
      {
        const {session_url}=response.data;
        window.location.replace(session_url)
      }else{
        alert("error" )
       }
  }
   
      
    

  return (
    <div>
      <form onSubmit={placeOrder} className='place-order'>
        <div className='place-order-left'>
          <p className='title'>Delivery Info</p>
          <div className='multi-feilds'>
            <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type='text' placeholder='First name'/>
            <input required name='lastName' onChange={onChangeHandler} value={data.lastName}type='text' placeholder='Last name'/>
          </div>
            {/* <input required name='=email' onChange={onChangeHandler} value={data.email} type='text' placeholder='email address'/> */}
            <input required name='street' onChange={onChangeHandler} value={data.street}type='text' placeholder='Street'/>
          <div className='multi-feilds'>
            <input required name='city' onChange={onChangeHandler} value={data.city}type='text' placeholder='City'/>
            <input required name='state' onChange={onChangeHandler} value={data.state}type='text' placeholder='State'/>
          </div>
          <div className='multi-feilds'>
            <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode}type='text' placeholder='Zip Code'/>
            <input required name='country' onChange={onChangeHandler} value={data.country}type='text' placeholder='Country'/>
          </div>
          <input required name='phone' onChange={onChangeHandler} value={data.phone} type='text' placeholder='Phone'/>
        </div>
        <div className='place-order-right'>
        <div className='card-total'>
          <h2>Cart Total</h2>
      
            <div className='cart-total-details'>
                <p>SubTotal :<span className='amount1'>Rs.{getTotalCartAmount()}</span></p>
            </div>
            
            <div className='cart-total-details'>
                <p>Delivery Fee : <span className='amount2'>Rs.{20}</span> </p>
            </div>
            <div className='cart-total-details'>
                <p>Total : <span className='amount3'>Rs. {getTotalCartAmount()+20}</span></p>
            </div>
          
            <button  type='submit'>PLACE ORDER</button>
            
          </div>

        </div>
      </form>
    </div>
  )
}

export default PlaceOrder