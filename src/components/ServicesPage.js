import React from 'react'
import DoctorCard from './DoctorCard'
import CategoryList from './CategoryList'
import BookingModal from './BookingModal'
import { useState, useEffect,useContext } from 'react'
import { LoginContext, adminContext, userIDContext } from '../global/Context';
import Ellipsis from '@bit/joshk.react-spinners-css.ellipsis';


const ServicesPage = () => {
    const {loggedIn, setLoggedIn} =  useContext(LoginContext)
    const {admin, setAdmin} =  useContext(adminContext)
    const {userID, setUserID} =  useContext(userIDContext)
    
    const [showBookingModal, setBookingModal] = useState(false);
    const [allServices, setAllServices] = useState(true)
    const [GPServices, setGPServices] = useState(false)
    const [wellbeingServices, setWellbeingServices] = useState(false)
    const [paediatricsServices, setPaediatricsServices] = useState(false)
    const [data, setData] = useState([])
    const [loadingFlag, setLoadingFlag] = useState(false)
    const doctorsURL = "https://bluemed-backend.herokuapp.com/doctor/all"

    const getAllDoctors = async()=>{
        try{
            const response = await fetch (doctorsURL);
            const data = await response.json();
            setData(data);
            setLoadingFlag(true)
        }
        catch(error){
            console.log("error>>>",error)
        }
    }   
    
    const filterGPDoctor = data.filter((GP)=> GP.profession === "General Practitioner")
    const filterPaeDoctor = data.filter((Pae)=> Pae.profession === "Paediatrics")
    const filterPsyDoctor = data.filter((Psy)=> Psy.profession === "Psychologist")
    console.log(filterGPDoctor)
    useEffect(()=>{
 
        getAllDoctors();
        
    
    }, [])

    return (
           
        <div className="">

            <hr className="mx-28"/>
            <p className="mx-28 mt-4 font-MT text-grey tracking-wider">Categories</p>
            
            <CategoryList 
            allServices={allServices} setAllServices={setAllServices}
            GPServices={GPServices} setGPServices={setGPServices}
            wellbeingServices={wellbeingServices} setWellbeingServices={setWellbeingServices} 
            paediatricsServices={paediatricsServices} setPaediatricsServices={setPaediatricsServices}
            />
            {!loadingFlag?<div className="grid justify-items-center my-48"><Ellipsis color="grey"  /></div>: ""}

            <div className="mx-20 mt-4  grid grid-cols-3">
            {/* Need to fetch api to render the doctor cards */}
            {allServices ? data.map((service)=><DoctorCard key={service._id} doctorID={service._id} img={service.img} bio={service.bio} gender={service.gender} languages={service.languages} pricing={service.pricing} name={service.name} profession={service.profession} />) : ""}
            {GPServices ? filterGPDoctor.map((service)=><DoctorCard key={service._id} doctorID={service._id} img={service.img} bio={service.bio} gender={service.gender} languages={service.languages} pricing={service.pricing} name={service.name} profession={service.profession}/>) : ""}
            {wellbeingServices ? filterPsyDoctor.map((service)=><DoctorCard key={service._id} doctorID={service._id} img={service.img} bio={service.bio} gender={service.gender} languages={service.languages} pricing={service.pricing} name={service.name} profession={service.profession} />) : ""}
            {paediatricsServices ? filterPaeDoctor.map((service)=><DoctorCard key={service._id} doctorID={service._id} img={service.img} bio={service.bio} gender={service.gender} languages={service.languages} pricing={service.pricing} name={service.name} profession={service.profession} />) : ""}

            </div>
            

        </div>
    )
}

export default ServicesPage
