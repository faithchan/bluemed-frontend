import React, {useState, useContext, useEffect} from 'react'
import AppointmentCard from './AppointmentCard'
import AppList from './AppList'
import PastAppCard from './PastAppCard'
import { LoginContext, adminContext, userIDContext } from '../global/Context';
import Ellipsis from './Spinner'

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
    const [loadedFlag, setLoadedFlag] = useState(false)
    //useEffect fetch api from sched and past app then pass data down to the individual appointment cards

    const schedAppURL = `https://bluemed-backend.herokuapp.com/schApp/patients/${userID}`
    const getSchedApp = async()=>{
        try{
            const response = await fetch (schedAppURL);
            const data = await response.json();
            setSchedApp(data);
            setLoadedFlag(true);
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
            setLoadedFlag(true);
            
        }
        catch(error){
            console.log("error>>>",error)
        }
    }  


    const allSchedAppURL = 'https://bluemed-backend.herokuapp.com/schApp/populated/all'
    const getAllSchedApp = async()=>{
        try{
            const response = await fetch (allSchedAppURL);
            const data = await response.json();

            setAllSchedApp(data);  
            setLoadedFlag(true); 
        }
        catch(error){
            console.log("error>>>",error)
        }
    }  


    const allPastAppURL = 'https://bluemed-backend.herokuapp.com/pastApp/populated/all'
    const getAllPastApp = async()=>{
        try{
            const response = await fetch (allPastAppURL);
            const data = await response.json();

            setAllPastApp(data);
            setLoadedFlag(true);   
        }
        catch(error){
            console.log("error>>>",error)
        }
    }  

    useEffect(()=>{getSchedApp();getPastApp();getAllSchedApp();getAllPastApp();},[pastButton, schedButton])

//   console.log(pastApp)
  console.log(schedApp)
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
            {allSchedApp.map((app)=><AppointmentCard name={app.attendee} appInfo={app.appTime} doctor={app.doctor.name} type={app.type} notes={app.patientNotes} id={app._id} getSchedApp={getSchedApp} schedApp={schedApp} setSchedApp={setSchedApp} getAllSchedApp={getAllSchedApp} getAllPastApp={getPastApp}/>)}
            </div>:""}

            {pastButton && !admin?
            <div className="mt-6 mb-10 px-28 grid justify-between grid-cols-2 gap-10">
                {pastApp.map((app)=><PastAppCard name={app.attendee} appInfo={app.appTime} doctor={app.doctor.name} type={app.type} notes={app.patientNotes} status={app.medicationDelivery} price={app.cost} appEnd={app.appTimeEnd} doctorNotes={app.doctorNotes}/>)}
            </div>:""}

            {pastButton && admin?
            <div className="mt-6 mb-10 px-28 grid justify-between grid-cols-2 gap-10">
                {allPastApp.map((app)=><PastAppCard name={app.attendee} appInfo={app.appTime} doctor={app.doctor.name} type={app.type} notes={app.patientNotes} status={app.medicationDelivery} price={app.cost}  appEnd={app.appTimeEnd} doctorNotes={app.doctorNotes}/>)}
            </div>:""}

            {!loadedFlag?<div className="grid justify-items-center my-48"><Ellipsis color="grey"  /></div>: ""}
            
            {/* {schedButton && loadedFlag && schedApp.length === 0? <div className="mt-6 mb-10 px-28 grid justify-between grid-cols-2 text-grey gap-10">No Appointments found.</div>: ""}
            {pastButton && loadedFlag && pastApp.length === 0? <div className="mt-6 mb-10 px-28 grid justify-between grid-cols-2 text-grey gap-10">No Appointments found.</div>: ""} */}

        </div>
    )
}

export default MyAppPage