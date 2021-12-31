import React from 'react'
import AppointmentCard from './AppointmentCard'

const MyAppPage = () => {
    return (
        <div>
         <hr className="mx-28"/>
            <p className="mx-28 mt-4 font-MT text-grey tracking-wider">My Appointments</p>
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
