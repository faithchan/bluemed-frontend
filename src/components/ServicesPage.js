import React from 'react'
import DoctorCard from './DoctorCard'

const ServicesPage = () => {
    return (
        <div>
            <hr className="mx-28"/>
            <p className="mx-28 mt-4 font-MT text-grey tracking-wider">Categories</p>
            
    
            <div className="mx-20 my-10 grid grid-cols-3">
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            

            </div>
          

          

   

        
        </div>
    )
}

export default ServicesPage
