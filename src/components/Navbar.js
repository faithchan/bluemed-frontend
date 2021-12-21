import React from 'react'
import {Link } from "react-router-dom";
import bluelogo from "../bluelogo.svg"
import { useState } from 'react';
import usericon from "../usericon.svg"


const Navbar = () => {
    const [login, setLogin] = useState(true);
    return (
       
       <div className="text-blue-400 font-MT font-semibold">
           <nav className="flex mt-8 mx-20 place-content-between">
           <span className=""><Link to="/"><img src={bluelogo} alt="Logo" className="h-10 ml-8 mb-6"/></Link></span>
     <ul className="flex items-right mr-10 mt-2 h-full tracking-wider">
         <li className="mx-10"><Link to="/about">About</Link></li>
         <li className="mx-10"><Link to="/services">Services</Link></li>
         { !login ? <li className="mx-10"><Link to="/login">Login</Link></li>: <li className="mx-10"><Link to="/myapp">MyApp</Link></li>}
         { !login ? "": <li className="mx-10"><Link to="/account"><img src={usericon} alt="Account" className="h-6"/></Link></li>}
         { login ? <button className="bg-blue-400 font-semibold hover:bg-blue-450 text-white tracking-widest font-MT ml-10 py-2 px-4 rounded-full text-xs" onClick={()=>{setLogin(false)}}>Log Out</button> : ""}
         
     </ul>
     </nav>
       </div>


    )
}

export default Navbar