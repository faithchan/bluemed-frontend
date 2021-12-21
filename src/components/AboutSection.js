import React from 'react'
import image from "../background.jpg"
import {useNavigate} from 'react-router-dom'



const AboutSection = () => {
    let navigate = useNavigate();
        
    return (
        
            <div className="relative">
            <img src={image} alt="Background image" className="object-cover w-full h-full"/>
            <div className="font-MT tracking-widest pl-40 mt-8 absolute w-full  inset-y-1/4">
                <h2 className="text-blue-400 text-xl mb-4 font-semibold">
                    Welcome to BlueMed
                </h2>
                <h1 className="text-3xl leading-normal font-semibold mb-4">
                    Get Instant Access <br/> to <span className="text-blue-400">Health Care</span>
                </h1>
                <p className="tracking-normal text-sm mb-6">Skip the long queues, quick access to doctors <br/>and medication delivered to your doorstep.</p>
                <button className="bg-blue-400 hover:bg-blue-450 text-white font-semibold tracking-widest font-MT py-2 px-4 rounded-full text-xs mx-auto " onClick={()=>{navigate('/services')}} >View Services</button>
            </div>
           
        </div>
       
    )
}

export default AboutSection
