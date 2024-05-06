import React, { useContext } from 'react'
import './CosmeticsItem.css'
import remove_icon_red from '../../images/remove_icon_red.png';
import add_icon_white from '../../images/add_icon_white.jpeg';
import add_icon_green from 'C:/CosmeticStore/frontend/cosmeticstoreapp/src/images/add_icon_greenn.png'
import { StoreContext } from '../Context/StoreContext';

const CosmeticsItem = ({id,name,price,description,image}) => {
  const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);

  return (
    <div className='cosmetics-item'>
        <div className='cosmetics-item-img-container'>
            <img className='cosmetics-item-image' src={url+"/images/"+image} alt=""/>
              
            {!cartItems[id]
            ?<div>
              <h6 className='add-text'>Add</h6>
              <img className='add' onClick={()=>addToCart(id)} src={add_icon_white} alt=""/>
            {/* <p className='additem-text'>Add</p> */}
            </div>
            :<div className='cosmetic-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={remove_icon_red} alt='' className='icons'/>
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={add_icon_green} alt="" className='icons'/>
              </div> 
            }
        </div>
        <div className='cosmetics-item-info'>
            {/* <div className='cosmetics-item-name-rating'>
                <p>{name}</p>
                <img src={assests.rating_starts} alt=""/>
            </div> */}
            <p className='cosmetic-item-name'>{name}</p>
            <p className='cosmetic-item-desc'>{description}</p>
            <p className='cosmetic-item-price'>Rs.{price}</p>
        </div>
    </div>
  )
}

export default CosmeticsItem