import React from 'react'
import {Link } from "react-router-dom";
import bluelogo from "../bluelogo.svg"
import { useState } from 'react';


const Navbar = () => {
    const [login, SetLogin] = useState(false);
    return (
       
       <div className="text-blue-400 font-MT font-semibold">
           <nav className="flex mt-8 mx-20 place-content-between">
           <span className=""><Link to="/"><img src={bluelogo} alt="Logo" className="h-10 ml-8 mb-6"/></Link></span>
     <ul className="flex items-right mr-10 mt-2 h-full tracking-wider">
         <li className="mx-10"><Link to="/about">About</Link></li>
         <li className="mx-10"><Link to="/services">Services</Link></li>
         { login == false ? <li className="ml-10"><Link to="/login">Login</Link></li>: <li className="mx-10"><Link to="/myapp">MyApp</Link></li>}
         { login == false ? "": <li className="ml-10"><Link to="/account">Account</Link></li>}
         
     </ul>
     </nav>
       </div>


    )
}

export default Navbar