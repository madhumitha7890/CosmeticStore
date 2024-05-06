// import React, { useContext } from "react";
// import { NavLink,Link , useNavigate } from "react-router-dom";
// import "./navbar.css";
// import Logo from "../../images/green_hat_logo.png";
// import Cart from "../../images/cart_img.jpg"
// import { StoreContext } from "../Context/StoreContext";
// import Profile_icon from '../../images/profile_icon.png';
// import bag_icon from '../../images/bag_icon.jpeg';
// import logout_icon from '../../images/logout_icon.jpeg';

// const Navbar = () => {
//   const navigate=useNavigate();
//   const handleLogout=()=>
//   {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/")
//   }
//   const {getTotalCartAmount,token,setToken}=useContext(StoreContext)
//   return (
//     <nav className="navmain">
//       <div className="container-fluid">
//         <Link to="" className="" href="#">
//           <img
//             src={Logo}
//             alt="Logo"
//             className="logo1"
//           />
//         </Link>
//         <ul className="navlist">
//         <li>
//             <NavLink className="nav-link" to="">
//               HOME
//             </NavLink> 
//             </li>
          
         
//             <li>
//             <NavLink className="nav-link" to="/aboutus">
//               ABOUT US
//             </NavLink> 
//             </li>

//              <li>
//             {!token?(
//               <li>
//                 <div>
//             <NavLink className="nav-link" to="/login">
//               REGISTER
//             </NavLink>
            
//             <Link className="nav-link" to="/cart">
//               <img
//               src={Cart}
//               alt="Cart"
//               className="cart"/>
//             </Link> 
//              </div> 
//             {/* <div className={getTotalCartAmount()===0?"":"dot"}></div> */} */}

//            </div>
//           </li>): 

//              (<div className="navbar-profile">
//               <ul className="nav-profile-dropdown">
//                  <li><img  className='icons'src={Profile_icon} alt=""/><p></p></li> 
//                  <li>
//                   <img  className='icons' src={bag_icon} alt=""/>
//                   <p className="profile-texts">Orders</p>
//                 </li>
//                 <hr/>
//                 <li><img  onClick={handleLogout} className='icons'src={logout_icon} alt=""/><p className="profile-texts">Logout</p></li>
//               </ul>
//             </div>)
//             </li>
//         </ul> 
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import Logo from "../../images/green_hat_logo.png";
import Cart from "../../images/cartt.jpeg";
import { StoreContext } from "../Context/StoreContext";
import Profile_icon from '../../images/profile_icon.png';
import bag_icon from '../../images/bag_icon.jpeg';
import logout_icon from '../../images/logout_icon.jpeg';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  const {  token, setToken } = useContext(StoreContext);
  return (
    <nav className="navmain">
      <div className="container-fluid">
        <Link to="" className="" href="#">
          <img
            src={Logo}
            alt="Logo"
            className="logo1"
          />
        </Link>
        <ul className="navlist">
          <li>
            <NavLink className="nav-link" to="">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/aboutus">
              ABOUT US
            </NavLink>
          </li>
          <li>
            {!token ? (
              <div>
                <li>
                  <NavLink className="nav-link" to="/login">
                    REGISTER
                  </NavLink>
                </li>
                <li>
                  <Link className="nav-link" to="/cart">
                    <img
                      src={Cart}
                      alt="Cart"
                      className="cart"
                      onClick={()=>navigate('/cart')}
                    />
                  </Link>
                </li>
              </div>
            ) : (
              <div className="navbar-profile">
                <ul className="nav-profile-dropdown">
                  <li>
                    <Link to='/products'>
                    <img className='icons' src={Profile_icon} alt=""/>
                    </Link>
                    <p className="profile-texts">Buy Products!</p>
                  </li>
                  <li>
                    <Link to='/cart'>
                    <img className='icons' src={Cart} alt=""/>
                    </Link>
                    <p className="profile-texts">ViewCart</p>
                  </li>
                  <li>
                    <img className='icons' src={bag_icon} alt="" onClick={()=>navigate('/myorders')} />
                    <p className="profile-texts">Orders</p>
                  </li>
                  <hr/>
                  <li>
                    <img onClick={handleLogout} className='icons' src={logout_icon} alt=""/>
                    <p className="profile-texts">Logout</p>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
