import React from 'react'
import './Products.css'
import { useState } from 'react'
import ExploreCosmeticsList from '../ExploreCosmeticsList/ExploreCosmeticsList'
import CosmeticDisplay from '../CosmeticsDisplay/CosmeticDisplay'
const Products = () => {
    const [category,setCategory]=useState("All");
  return (
    <div className='Products-main'>
        <div>
            <ExploreCosmeticsList category={category} setCategory={setCategory}/>
            <CosmeticDisplay category={category}/>
        </div>
        <div className='new-arrivals'>
            <div className='new-arrivals-card'>
                {/* <img  className="card-img" src={}/> */}

            </div>

        </div>
    </div>
  )
}

export default Products