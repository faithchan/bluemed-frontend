import React, {useState, useContext, useEffect} from 'react'
import AppointmentCard from './AppointmentCard'
import AppList from './AppList'
import PastAppCard from './PastAppCard'
import { LoginContext, adminContext, userIDContext } from '../global/Context';

const MyAppPage = () => {
    const {loggedIn, setLoggedIn} =  useContext(LoginContext)
    const {admin, setAdmin} =  useContext(adminContext)
    const {userID, setUserID} =  useContext(userIDContext)
    
    const[schedButton, setSchedButton] =useState(true)
    const[pastButton, setPastButton] =useState(false)
    const[pastApp, setPastApp]=useState([])
    const[schedApp, setSchedApp]=useState([])
    const[showReceipt, setShowReceipt]= useState(false)

    //useEffect fetch api from sched and past app then pass data down to the individual appointment cards

      //fetching data for pastApp URL
      const pastAppURL = `https://bluemed-backend.herokuapp.com/pastApp/patients/${userID}`

      const appID = async() => {
          try {
              const response = await fetch (pastAppURL);
            //   console.log(response)
              const data = await response.json(); 
            //   console.log(data)
              setPastApp(data)
           }
           catch(err) {
               console.log('error:', err)
           }
          }

      useEffect(() => {
  
          appID();
  
        }, []);

        //fetching data for schAppURL
        const schAppURL = `https://bluemed-backend.herokuapp.com/schApp/patients/${userID}`

        const schAppID = async() => {
            try {
                const response = await fetch(schAppURL); 
                // console.log(response)
                const data = await response.json(); 
                // console.log(data);
                setSchedApp(data);
            }
            catch(err) {
                console.log('error:', err)
            }
        }

        useEffect(() => {

            schAppID()

        }, []);

    return (
        <div>
         <hr className="mx-28"/>
            <p className="mx-28 mt-4 font-MT text-grey tracking-wider">My Appointments</p>
            <AppList pastButton={pastButton} setPastButton={setPastButton} setSchedButton={setSchedButton} schedButton={schedButton}/>

            {schedButton?<div className="mt-6 mb-10 px-28 grid justify-between grid-cols-2 gap-10">
            {schedApp.map((detail) => 
            <AppointmentCard 
            key = {detail.id}
            patient = {detail.patient.name}
            doctor = {detail.doctor.name}
            attendee = {detail.attendee}
            type = {detail.type}
            patientNotes = {detail.patientNotes} 
            appTime = {detail.appTime} 
            zoomLink = {detail.zoomLink}
            schID = {detail._id}
            arr = {schedApp}
            />
            )}
         
            </div>:""}

            {pastButton?<div className="mt-6 mb-10 px-28 grid justify-between grid-cols-2 gap-10">
            {pastApp.map((details) => 
            <PastAppCard 
                key = {details.id}
                patient = {details.patient.name} 
                doctor = {details.doctor.name} 
                attendee = {details.attendee}
                type = {details.type} 
                patientNotes = {details.patientNotes} 
                doctorNotes = {details.doctorNotes}
                appTime = {details.appTime} 
                cost = {details.cost} 
                paid = {details.paid} 
                medicationDelivery = {details.medicationDelivery}
                showReceipt={showReceipt}
                setShowReceipt={setShowReceipt} />
                )}
          
            </div>:""}

        </div>
    )
}

export default MyAppPage
