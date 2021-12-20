import React from 'react'
import DoctorCard from './DoctorCard'
import CategoryList from './CategoryList'

const ServicesPage = () => {
    return (
        <div>
            <hr className="mx-28"/>
            <p className="mx-28 mt-4 font-MT text-grey tracking-wider">Categories</p>
            
            <CategoryList />
            <div className="mx-20 mt-4 mb-8 grid grid-cols-3">
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            

            </div>
          

          

   

        
        </div>
    )
}

export default ServicesPage
