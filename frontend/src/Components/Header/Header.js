import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div className='header'>
        <div className='header-content'>
            <h2>Pick your fav</h2>
            <h2>Products Here</h2>
            <p>
            Indulge in our curated selection of cosmetics, where every product is a promise of beauty and sophistication. Elevate your look with our luxurious formulas and unleash your inner glamour effortlessly with AuroGlam
            </p>
            <Link to="/products">
            <button>Veiw Products</button>
            </Link>
        </div>

    </div>
  )
}

export default Header