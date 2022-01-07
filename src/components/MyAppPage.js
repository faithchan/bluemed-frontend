import React, {useState, useContext} from 'react'
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
    const[pastApp, setPastApp]=useState('')
    const[schedApp, setSchedApp]=useState('')
//useEffect fetch api from sched and past app then pass data down to the individual appointment cards



    return (
        <div>
         <hr className="mx-28"/>
            <p className="mx-28 mt-4 font-MT text-grey tracking-wider">My Appointments</p>
            <AppList pastButton={pastButton} setPastButton={setPastButton} setSchedButton={setSchedButton} schedButton={schedButton}/>

            {schedButton?<div className="mt-6 mb-10 px-28 grid justify-between grid-cols-2 gap-10">
            <AppointmentCard />
            <AppointmentCard />
            </div>:""}

            {pastButton?<div className="mt-6 mb-10 px-28 grid justify-between grid-cols-2 gap-10">
            <PastAppCard />
            <PastAppCard />
            </div>:""}

        </div>
    )
}

export default MyAppPage
