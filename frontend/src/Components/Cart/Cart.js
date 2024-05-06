import React from 'react'
import './Cart.css'
import { cosmetics_list } from './../../images/assests';
import { StoreContext } from '../Context/StoreContext';
//import Products from './../Products/Products';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const {cartItems,url,cosmetics_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext);
  const navigate = useNavigate();
  return (
  <div className='cart-content'>
    <div className='cart-items'>
      <div className='cart-items-title'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr className='every-product-line' />
      <br/>

      {cosmetics_list.map((item,index)=>{
        console.log(item.name)
          if(cartItems[item._id]>0)
          {
            return (
              <div key={item._id}>
              <div className='cart-items-title cart-items-item'>
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>Rs.{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>Rs.{item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
              </div>
              <hr className='every-product-line'/>
              </div>

            )
          }
      })}
    </div>
      <div className='card-bottom'>
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
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>

        </div>
      </div>


  )
}

export default Cart;