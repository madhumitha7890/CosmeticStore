import React from 'react'
import './ExploreCosmeticsList.css';
import { cosmetics_domains_list } from '../../images/assests';
import { useState } from 'react';
const ExploreCosmeticsList = ({category,setCategory}) => {
  return (
    <div className='explore-domains' id='explore-domains'>
      <h1>Elevate your beauty routine to new heights!!</h1>
      <p className='explore-domains-text'>Explore our extensive range of cosmetic treasures, meticulously chosen to cater to your every beauty need. From radiant foundations to dazzling eyeshadows, find your perfect match and embrace your unique style with confidence.</p>

      <div className='explore-domains-list'>
        {cosmetics_domains_list.map((item,index)=>{
          return(
            <div onClick={()=>setCategory(prev=>prev===item.domain_name?"All":item.domain_name)} key={index} className='explore-domains-list-item'>
              <img  className={category===item.domain_name?"active":""} src={item.domain_image} alt=""/>
              <p>{item.domain_name}</p>
            </div>

          )
        })}
      </div>
    </div>
  )
}

export default ExploreCosmeticsList;