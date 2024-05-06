import React from 'react'
import facebook_icon from '../../images/facebook_icon.jpeg'
import whatsapp_icon from '../../images/whatsapp_icon.jpeg'
import instagram_icon from '../../images/instagram_icon.jpeg'
import logo from '../../images/green_hat_logo.png'

import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={logo} alt=""/>
                <p></p>
                <div className='footer-social-icons'>
                    <img src ={facebook_icon} alt=""/>
                    <img src ={whatsapp_icon} alt=""/>
                    <img src ={instagram_icon} alt=""/>
                </div>

            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-892-898-542</li>
                    <li>contact@auraglam.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>CopyRight 2024 @ AuraGlam - All Rights Reserved</p>
    </div>
  )
}

export default Footer