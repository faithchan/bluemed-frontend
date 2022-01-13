import React, {useState, useContext} from 'react'
import axios from 'axios'
import DocNotesModal from './DocNotesModal'
import { adminContext } from '../global/Context'


const AppointmentCard = ({name, appInfo, doctor, type, notes,id, getSchedApp,getAllSchedApp, getAllPastApp}) => {
  const {admin, setAdmin} =  useContext(adminContext)
  const[schedAppStatus, setSchedAppStatus]= useState(false)
  
  const date = new Date(Date.parse(appInfo)).toLocaleDateString("en-GB")
  const time = new Date(Date.parse(appInfo)).toLocaleTimeString("en-SG", {hour12: false, hour: '2-digit', minute:'2-digit'})
  const deleteAppURL = `https://bluemed-backend.herokuapp.com/schApp/${id}`
    
  const deleteAppHandler = async(e)=>{
    e.preventDefault();
    await axios.delete(deleteAppURL).then((res)=>console.log(res))
      .catch((err)=>console.log(err));
      getSchedApp();
      getAllSchedApp();
}

    return (
        <div>
          {schedAppStatus?<DocNotesModal setSchedAppStatus={setSchedAppStatus} getAllSchedApp={getAllSchedApp} getAllPastApp={getAllPastApp} id={id}/>:""}
            <div className=" rounded-lg bg-white drop-shadow-lg ">

              <div className="flex justify-between p-6">
              <span className="font-MT font-semibold text-xs leading-loose mr-10">
                <p>Patient: {name}</p>
                <p>Date: {date} at {time}</p>
                <p>Doctor: {doctor}</p>
                <p>Type: {type}</p>
                <p>Notes: {notes}</p>
              </span>

              <span className="font-MT font-semibold text-right leading-loose">
              
              <button className="bg-blue-400 hover:bg-blue-450 text-white font-semibold tracking-widest font-MT py-2 px-4 rounded-full text-xs mx-auto " onClick={()=>window.open("https://us05web.zoom.us/j/5314369063?pwd=SEZzVVR5VE5hYW9XVW4xa1o4SElRdz09")}>Join Zoom</button>
                <ul className="text-xs flex mt-4" onClick={deleteAppHandler}>
                <li><button className="bg-red rounded-full w-4 h-4 mr-2 " /></li>
                <p className="text-left cursor-pointer hover:underline">Cancel Appointment</p>
                </ul>
                {admin?<ul className="text-xs flex mt-2">
                <li><button className="bg-yellow rounded-full w-4 h-4 mr-2 " /></li>
                <p className="text-left cursor-pointer hover:underline" onClick={()=>setSchedAppStatus(true)}>Change Status</p>
                </ul>:""}
              </span>
              </div>
 
            </div>
        </div>
    )
}

export default AppointmentCard
