import React from 'react'
import './Home.css' 
import Header from '../Header/Header';
import OffersCard from '../OffersCard/OffersCard';
import ExploreCosmeticsList from '../ExploreCosmeticsList/ExploreCosmeticsList';
const Home = () => {
  return (
    <div className='Home'>
      <Header/>
      <OffersCard/>
      {/* <ExploreCosmeticsList/> */}


    </div>
  )
}

export default Home