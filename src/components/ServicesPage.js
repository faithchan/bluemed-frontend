import React from 'react'
import DoctorCard from './DoctorCard'
import CategoryList from './CategoryList'
import BookingModal from './BookingModal'
import { useState, useEffect } from 'react'


const ServicesPage = () => {
    const [showBookingModal, setBookingModal] = useState(false);
    const [allServices, setAllServices] = useState(true)
    const [GPServices, setGPServices] = useState(false)
    const [wellbeingServices, setWellbeingServices] = useState(false)
    const [paediatricsServices, setPaediatricsServices] = useState(false)



    return (
           
        <div className="">
            {showBookingModal?<BookingModal setBookingModal={setBookingModal}/>:""}

            <hr className="mx-28"/>
            <p className="mx-28 mt-4 font-MT text-grey tracking-wider">Categories</p>
            
            <CategoryList 
            allServices={allServices} setAllServices={setAllServices}
            GPServices={GPServices} setGPServices={setGPServices}
            wellbeingServices={wellbeingServices} setWellbeingServices={setWellbeingServices} 
            paediatricsServices={paediatricsServices} setPaediatricsServices={setPaediatricsServices}
            />

            <div className="mx-20 mt-4  grid grid-cols-3">
            {/* Need to fetch api to render the doctor cards */}
            <DoctorCard setBookingModal={setBookingModal}/>
            <DoctorCard setBookingModal={setBookingModal}/>
            <DoctorCard setBookingModal={setBookingModal}/>
        
            

           

            </div>
          

          

   

        
        </div>
    )
}

export default ServicesPage
