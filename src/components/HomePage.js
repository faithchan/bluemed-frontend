import React from 'react'

import AboutSection from './AboutSection'
import GP from "../service-10.png"
import Wellbeing from "../service-11.png"
import Paediatrics from "../service-12.png"

const HomePage = () => {
    return (
        <div >
           <AboutSection />

           <div className="mt-10">
           <h1 className="text-center font-MT font-semibold text-3xl text-blue-400">
               About Us
           </h1>
           <p className="text-center font-MT text-sm mt-6 ">BlueMed was created to transform traditional healthcare, with BlueMed, patients can <br/> now have access to doctors in a remote setting at anytime.</p>
           <div className="grid grid-cols-1 mx-40 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <span className=" px-20 mb-10 h-auto w-200px">
        <img src={GP} alt="GP" className=""/> 
        <p className="font-semibold font-MT text-blue-400 mt-4 text-xl text-center">General<br/>Practitioner</p>
        </span>

        <span className="w-full px-20 mb-10 ">
        <img src={Wellbeing} alt="Wellbeing" className="block h-auto w-200px"/> 
        <p className="font-semibold font-MT text-blue-400 mt-4 text-xl text-center">Mental<br/>Well-being</p>
        </span>

        <span className="w-full px-20 mb-10 ">
        <img src={Paediatrics} alt="Paediatrics" className="block h-auto w-200px"/> 
        <p className="font-semibold font-MT text-blue-400 mt-4 text-xl text-center">Paediatrics<br/>(Infant Care)</p>
        </span>

            </div>
    )
           </div>

           
        </div>
    )
}

export default HomePage
