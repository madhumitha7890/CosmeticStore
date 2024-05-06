import React from 'react';
import './OffersCard.css'
import facial_img from '../../images/facial_img.jpeg';
import lipstick_offer from '../../images/lipstick_offer.jpg'
function OffersCard() {
  return (
    <div className='cards'>
    <div className='card'>
        <div className='card-img-container'>
            <img  className="card-img"src={facial_img}/>
        </div>      
        <div class="card-content">
            <h3 className='card-title'>Glow up!!</h3>
            <p className='card-text'>Experience the ultimate pampering session with our range of facial masks, designed to address a myriad of skin concerns, from hydration to anti-aging.Transform your skincare routine and unlock the secret to glowing, healthy skin with our innovative facial products. Embrace the beauty of self-care and discover the confidence that comes with a radiant complexion. Choose our facial products and embark on a journey to skincare bliss today.</p>
        </div>
    </div>
    <div className='card'>
       
    <div class="card-content">
        <h3 className='card-title'>Glow up!!</h3>
        <p className='card-text'>Elevate your beauty game with our stunning collection of lipsticks, where every shade tells a story of boldness and brilliance. Experience the luxury of silky-smooth textures and long-lasting formulas that glide effortlessly onto your lips, leaving behind a rich, vibrant color payoff that lasts all day. Whether you're going for a subtle hint of color or a statement-making pout, our lipsticks offer versatile options to suit every mood and occasion.</p>
    </div>
    <div className='card-img-container'>
        <img  className="card-img2"src={lipstick_offer}/>
    </div>   
</div>
</div>
  )
}

export default OffersCard