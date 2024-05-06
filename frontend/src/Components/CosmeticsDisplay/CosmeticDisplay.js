import React, { useContext } from 'react'
import './CosmeticDisplay.css'
import { StoreContext } from '../Context/StoreContext'
import CosmeticsItem from '../CosmeticsItem/CosmeticsItem'
const CosmeticDisplay = ({category}) => {
    const {cosmetics_list} = useContext(StoreContext)
  return (
    <div className='cosmetics-display' id ='cosmetics-display'>
        <h2>Best Sellers</h2>
        <div className='cosmetics-display-list'>
          {cosmetics_list.map((item,index)=>{
            {console.log(category,item.category);}
            if(category==="All" || category===item.category)
            {
              return <CosmeticsItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
          })}
        </div>
    </div>
  )
}

export default CosmeticDisplay