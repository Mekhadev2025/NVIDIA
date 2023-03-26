import logo from "../../public/imgs/logo.png"
 
import React from 'react'
import "../styles/Navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="container--nav" >
      <div className="nav-1"> 
      <Link to="/">
        <img className="logo"src={logo}></img>
         </Link>
        <ul>
        
          <Link className="link" to="/products"> <li>Products</li></Link>
          <Link className="link" to="/solutions"><li>Solutions</li></Link> 
          <Link className="link" to ="/industries"><li>Industries</li></Link>
          <Link className="link" to ="/foryou"><li>For You</li></Link>
         
        </ul>
        </div >
        <div className="nav-2">
        <ul>
           <Link  className="link" to="/shop"><li>Shop</li></Link>
          <Link className="link" to="/drivers"><li>Drivers</li></Link>
          <Link className="link" to="/support"><li>Support</li></Link>
         
           
        </ul>
        </div>
        </div>
  )
}

export default Navbar