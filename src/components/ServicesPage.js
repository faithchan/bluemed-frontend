import React from 'react'
import DoctorCard from './DoctorCard'
import CategoryList from './CategoryList'
import BookingModal from './BookingModal'


const ServicesPage = () => {
    return (

           
        <div className="">
            <BookingModal />

            <hr className="mx-28"/>
            <p className="mx-28 mt-4 font-MT text-grey tracking-wider">Categories</p>
            
            <CategoryList />
            <div className="mx-20 mt-4  grid grid-cols-3">
            {/* Need to fetch api to render the doctor cards */}
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            

           

            </div>
          

          

   

        
        </div>
    )
}

export default ServicesPage
