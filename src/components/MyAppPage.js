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
    const[allSchedApp, setAllSchedApp]=useState([])
    const[allPastApp, setAllPastApp]=useState([])
    //useEffect fetch api from sched and past app then pass data down to the individual appointment cards

    const schedAppURL = `https://bluemed-backend.herokuapp.com/schApp/patients/${userID}`
    const getSchedApp = async()=>{
        try{
            const response = await fetch (schedAppURL);
            const data = await response.json();
            setSchedApp(data);
            console.log(schedApp)
        }
        catch(error){
            console.log("error>>>",error)
        }
    }  
    
    const pastAppURL = `https://bluemed-backend.herokuapp.com/pastApp/patients/${userID}`
    const getPastApp = async()=>{
        try{
            const response = await fetch (pastAppURL);
            const data = await response.json();
            setPastApp(data);
            
        }
        catch(error){
            console.log("error>>>",error)
        }
    }  


    const allSchedAppURL = 'https://bluemed-backend.herokuapp.com/schApp/all'
    const getAllSchedApp = async()=>{
        try{
            const response = await fetch (allSchedAppURL);
            const data = await response.json();

            setAllSchedApp(data);   
        }
        catch(error){
            console.log("error>>>",error)
        }
    }  


    const allPastAppURL = 'https://bluemed-backend.herokuapp.com/pastApp/all'
    const getAllPastApp = async()=>{
        try{
            const response = await fetch (allPastAppURL);
            const data = await response.json();

            setAllPastApp(data);   
        }
        catch(error){
            console.log("error>>>",error)
        }
    }  

    useEffect(()=>{getSchedApp();getPastApp();getAllSchedApp();getAllPastApp();},[])

//   console.log(pastApp)
//   console.log(schedApp)
//   console.log(allSchedApp)
  console.log(allPastApp)


    return (
        <div>
         <hr className="mx-28"/>
            <p className="mx-28 mt-4 font-MT text-grey tracking-wider">My Appointments</p>
            <AppList pastButton={pastButton} setPastButton={setPastButton} setSchedButton={setSchedButton} schedButton={schedButton} />

            {schedButton && !admin?<div className="mt-6 mb-10 px-28 grid justify-between grid-cols-2 gap-10">
            {schedApp.map((app)=><AppointmentCard name={app.attendee} appInfo={app.appTime} doctor={app.doctor.name} type={app.type} notes={app.patientNotes} id={app._id} getSchedApp={getSchedApp} schedApp={schedApp} setSchedApp={setSchedApp}/>)}
            </div>:""}

            {schedButton && admin?<div className="mt-6 mb-10 px-28 grid justify-between grid-cols-2 gap-10">
            {allSchedApp.map((app)=><AppointmentCard name={app.attendee} appInfo={app.appTime} doctor={app.doctor.name} type={app.type} notes={app.patientNotes} id={app._id} getSchedApp={getSchedApp} schedApp={schedApp} setSchedApp={setSchedApp}/>)}
            </div>:""}

            {pastButton && !admin?
            <div className="mt-6 mb-10 px-28 grid justify-between grid-cols-2 gap-10">
                {pastApp.map((app)=><PastAppCard name={app.attendee} appInfo={app.appTime} doctor={app.doctor.name} type={app.type} notes={app.patientNotes} status={app.medicationDelivery}/>)}
            </div>:""}

            {pastButton && admin?
            <div className="mt-6 mb-10 px-28 grid justify-between grid-cols-2 gap-10">
                {allPastApp.map((app)=><PastAppCard name={app.attendee} appInfo={app.appTime} doctor={app.doctor.name} type={app.type} notes={app.patientNotes} status={app.medicationDelivery}/>)}
            </div>:""}

        </div>
    )
}

export default MyAppPage