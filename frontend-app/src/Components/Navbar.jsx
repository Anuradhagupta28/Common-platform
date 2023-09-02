import React from 'react';
import { Link } from 'react-router-dom'; 
import "./Navbar.css"
import colorful from "../logo/colorful-removebg-preview.png"
import natural from "../logo/natural-removebg-preview.png"

import user from "../logo/user-regular.svg";
import product from "../logo/box-solid.svg";
import cart from "../logo/cart-shopping-solid.svg";


function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={natural} alt="Logo" />
      </Link>
      <div>
      <ul className="navbar-links">
        
          <Link to="/">
            
            <li><img src={product} className='image'></img></li>
            <li>Products</li>
            </Link>
       
      
          <Link to="/cart">
            <li> <img src={cart} className='image'></img></li>
            <li>Cart</li>
            </Link>
   
        
          <Link > 
          <li><img src={user} className='image'></img></li>
            <li>User</li></Link>
       
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
