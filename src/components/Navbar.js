import React from 'react'
import {Link } from "react-router-dom";
import bluelogo from "../bluelogo.svg"
import { useState } from 'react';


const Navbar = () => {
    const [login, SetLogin] = useState(false);
    return (
       
       <div className="text-blue-400">
           <nav>
           <span><Link to="/about"><img src={bluelogo} alt="Logo" className="h-10 ml-8 mb-6"/></Link></span>
     <ul>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/services">Services</Link></li>
         { login == false ? <li><Link to="/login">Sign Up /Login</Link></li>: <li><Link to="/myapp">MyApp</Link></li>}
         { login == false ? "": <li><Link to="/account">Account</Link></li>}
         
     </ul>
     </nav>
       </div>


    )
}

export default Navbar