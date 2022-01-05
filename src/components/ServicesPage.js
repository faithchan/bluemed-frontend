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
    const [data, setData] = useState([])

    const doctorsURL = "https://bluemed-backend.herokuapp.com/doctor/all"

    const getAllDoctors = async()=>{
        try{
            const response = await fetch (doctorsURL);
            const data = await response.json();
            setData(data);
        }
        catch(error){
            console.log("error>>>",error)
        }
    }   
    
    const filterGPDoctor = data.filter((GP)=> GP.profession === "General Practitioner")
    const filterPaeDoctor = data.filter((Pae)=> Pae.profession === "Paediatrics")
    const filterPsyDoctor = data.filter((Psy)=> Psy.profession === "Psychologist")

    useEffect(()=>{
        setAllServices(true)
        getAllDoctors();
    
    }, [])
    

    return (
           
        <div className="">
            {showBookingModal? data.map((service)=><BookingModal pricing={service.pricing} name={service.name} profession={service.profession} setBookingModal={setBookingModal}/>):""}

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
            {allServices ? data.map((service)=><DoctorCard img={service.img} bio={service.bio} gender={service.gender} languages={service.languages} pricing={service.pricing} name={service.name} profession={service.profession} setBookingModal={setBookingModal}/>) : ""}
            {GPServices ? filterGPDoctor.map((service)=><DoctorCard img={service.img} bio={service.bio} gender={service.gender} languages={service.languages} pricing={service.pricing} name={service.name} profession={service.profession} setBookingModal={setBookingModal}/>) : ""}
            {wellbeingServices ? filterPsyDoctor.map((service)=><DoctorCard img={service.img} bio={service.bio} gender={service.gender} languages={service.languages} pricing={service.pricing} name={service.name} profession={service.profession} setBookingModal={setBookingModal}/>) : ""}
            {paediatricsServices ? filterPaeDoctor.map((service)=><DoctorCard img={service.img} bio={service.bio} gender={service.gender} languages={service.languages} pricing={service.pricing} name={service.name} profession={service.profession} setBookingModal={setBookingModal}/>) : ""}



        

            </div>
          

          

   

        
        </div>
    )
}

export default ServicesPage
