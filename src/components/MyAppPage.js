import React from 'react'
import AppointmentCard from './AppointmentCard'

const MyAppPage = () => {
    return (
        <div>
         <hr className="mx-28"/>
            <p className="mx-28 mt-4 font-MT text-grey tracking-wider">My Appointments</p>
            <div className="flex justify-center">
        <div className="mx-28 mt-3 ">
        <button className=" mr-14 mb-3 text-grey tracking-widest font-MT font-semibold mx-auto text-xs " 
            onClick={()=>{
                
            }}>Scheduled Appointments</button>
             <button className="mr-14 mb-3 text-grey tracking-widest font-MT font-semibold mx-auto text-xs" 
            onClick={()=>{
                
            }}>Past Appointments</button>
        </div>
        </div>
            <div className="mt-6 mb-10 px-28 grid justify-between grid-cols-2 gap-10">
            <AppointmentCard />
            <AppointmentCard />
            <AppointmentCard />
            <AppointmentCard />
          
            </div>

        </div>
    )
}

export default MyAppPage
