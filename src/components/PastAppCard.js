import React from 'react'
import { useEffect, useContext } from 'react'
import { LoginContext, adminContext, userIDContext } from '../global/Context';

const PastAppCard = () => {

  const {userID, setUserID} =  useContext(userIDContext)

      //fetching data for pastApp URL

      const pastAppURL = `https://bluemed-backend.herokuapp.com/pastApp/${userID}`

      const appID = async() => {
          try {
              const response = await fetch (pastAppURL);
              const data = await response.json(); 
              console.log(data)
           }
           catch(err) {
               console.log('error:', err)
           }
          }

      useEffect(() => {
  
          appID();
  
        }, []);

        console.log(userID)
  
    return (
        <div>
            <div className=" rounded-lg bg-white drop-shadow-lg ">

              <div className="flex justify-between p-6">
              <span className="font-MT font-semibold text-xs leading-loose mr-10">
                <p>Patient: {userID.patient} </p>
                <p>Appointment Info: {userID.appTime}</p>
                <p>Doctor: {userID.doctor}</p>
                <p>Type: {userID.type}</p>
                <p>Notes: {userID.notes}</p>
              </span>

              <span className="font-MT font-semibold text-right leading-loose">
              <p className="tracking-wider mb-2">#0001</p>
              <button className="bg-blue-400 hover:bg-blue-450 text-white font-semibold tracking-widest font-MT py-2 px-4 rounded-full text-xs mx-auto " >View Receipt</button>
                <ul className="text-xs f‹lex mt-4">
                <li><button className="bg-green rounded-full w-4 h-4 mr-2 " /></li>
                <p className="text-left">{userID.medicationDelivery}</p>
                </ul>
              </span>
              </div>
 
            </div>
        </div>
    )
}

export default PastAppCard
