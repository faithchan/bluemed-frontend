import React from 'react'
import GP from "../service-10.png"
import Wellbeing from "../service-11.png"
import Paediatrics from "../service-12.png"

const ServicesSection = () => {
    return (
        <div className="grid grid-cols-1 mx-28 my-8 sm:grid-cols-2 md:grid-cols-3">
            <span className="w-full px-5 mb-10">
        <img src={GP} alt="GP" className=""/> 
        </span>

        <span className="w-full px-5 mb-10 ">
        <img src={Wellbeing} alt="Wellbeing" className="block h-auto w-full"/> 
        </span>

        <span className="w-full px-5 mb-10 ">
        <img src={Paediatrics} alt="Paediatrics" className="block h-auto w-full"/> 
        </span>

            </div>
    )
}

export default ServicesSection
