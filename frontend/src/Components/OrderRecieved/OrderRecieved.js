import React from 'react';
import './OrderRecieved.css'
import  gifImage from'../../images/order_receieved_gif.gif'
import { Link } from 'react-router-dom';

 const OrderRecieved = () => {
  return (
    <div className='order-recieving'>
        <h2 className='order-recieved-text'>OrderRecieved</h2>
        <img src={gifImage} alt="gif"/>
        <h2>Thank you for Shopping in AuraGlam!</h2>
        <Link  to='/myorders'>
            <button>Veiw Order</button>
        </Link>
        
    </div>
  )
}
export default OrderRecieved;
