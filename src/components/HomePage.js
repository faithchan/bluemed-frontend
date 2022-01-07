import React,{useContext} from 'react'

import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import { LoginContext, adminContext, userIDContext } from '../global/Context';



const HomePage = () => {
    const {loggedIn, setLoggedIn} =  useContext(LoginContext)
    const {admin, setAdmin} =  useContext(adminContext)
    const {userID, setUserID} =  useContext(userIDContext)
    return (
        <div >
           <AboutSection />
            <ServicesSection />

           
        </div>
    )
}

export default HomePage
