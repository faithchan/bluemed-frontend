import React from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AppointmentCard = ({patient, doctor, type, patientNotes, zoomLink, key, appTime, schID, attendee}) => {


  let navigate = useNavigate();
  //arr contains a set of appointements

  const schAppURL = `https://bluemed-backend.herokuapp.com/schApp/${schID}`

  const handleCancelApp = async () =>
  {
    await axios.delete(schAppURL)
    .then(res=>
      {
        if(res.status === 200)
        {
          console.log("success")
          navigate(0)
          
        }
      })
  }

    return (
        <div>
            <div className=" rounded-lg bg-white drop-shadow-lg ">

              <div className="flex justify-between p-6">
              <span className="font-MT font-semibold text-xs leading-loose mr-10">
                <p>Patient: {patient}</p>
                <p>Attendees: {attendee}</p>
                <p>Appointment Info: {appTime} at 1200H</p>
                <p>Doctor: {doctor}</p>
                <p>Type: {type}</p>
                <p>Notes: {patientNotes}</p>
              </span>

              <span className="font-MT font-semibold text-right leading-loose">
              <p className="tracking-wider mb-2">#0001</p>
              <button className="bg-blue-400 hover:bg-blue-450 text-white font-semibold tracking-widest font-MT py-2 px-4 rounded-full text-xs mx-auto " onClick={()=>window.open({zoomLink})}>Join Zoom</button>
                <ul className="text-xs flex mt-4">
                <li><button className="bg-red rounded-full w-4 h-4 mr-2 " /></li>
              <p className="text-left cursor-pointer hover:underline" onClick={handleCancelApp}>Cancel Appointment</p>
                </ul>
              </span>
            </div>
 
            </div>
        </div>
    )
}

export default AppointmentCard
