import React from 'react'
import { useContext} from 'react'
import { LoginContext, adminContext, userIDContext } from '../global/Context'

const PastAppCard = ({patient, doctor, type, doctorNotes, attendee, patientNotes, appTime, cost, paid, medicationDelivery, key}) => {

  const {userID, setUserID} =  useContext(userIDContext)


    return (
        <div>
            <div className=" rounded-lg bg-white drop-shadow-lg ">

              <div className="flex justify-between p-6">
              <span className="font-MT font-semibold text-xs leading-loose mr-10">
                <p>Patient: {patient} </p>
                <p>Attendee: {attendee}</p>
                <p>Appointment Info: 12.12.21 at 1200H</p>
                <p>Doctor: {doctor}</p>
                <p>Type: {type}</p>
                <p>Doctor Notes: {doctorNotes}</p>
              </span>

              <span className="font-MT font-semibold text-right leading-loose">
              <p className="tracking-wider mb-2">#0001</p>
              <button className="bg-blue-400 hover:bg-blue-450 text-white font-semibold tracking-widest font-MT py-2 px-4 rounded-full text-xs mx-auto " >View Receipt</button>
                <ul className="text-xs flex mt-4">
                <li><button className="bg-green rounded-full w-4 h-4 mr-2 " /></li>
                <p className="text-left">{medicationDelivery}</p>
                </ul>
              </span>
              </div>
 
            </div>
        </div>
    )
}

export default PastAppCard
