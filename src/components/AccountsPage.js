import React, {useContext, useState, useEffect} from 'react'
import UserImage from "../userimage.svg"
import UserDetails from './UserDetails'
import DependencyDetails from './DependencyDetails'
import addButton from '../addButton.svg'
import { LoginContext, adminContext, userIDContext } from '../global/Context';

const AccountsPage = () => {
    const {loggedIn, setLoggedIn} =  useContext(LoginContext)
    const {admin, setAdmin} =  useContext(adminContext)
    const {userID, setUserID} =  useContext(userIDContext)
    const [patientDetails, setPatientDetails] = useState('')


    const patientDetailsURL =  `https://bluemed-backend.herokuapp.com/patient/${userID}`
    console.log(patientDetailsURL)

    const getPatientDetails = async()=>{
        try{
            const response = await fetch (patientDetailsURL);
            const data = await response.json();
            setPatientDetails(data)
            
        }
        catch(error){
            console.log("error>>>",error)
        }
    }   

    useEffect(() => 
        getPatientDetails()
    , [])

   const {name, gender, allergies, address, DOB, dependents, insuranceID} = patientDetails
   console.log(dependents)
    
    return (
        <div >
           {/* //check role of user const [role, setRole] = useState('')  */}
           <hr className="mx-28"/>
            <p className="mx-28 mt-4 font-MT text-grey tracking-wider">Account Details</p>
           <img src={UserImage} alt="userimage" className="w-2/12 mx-auto" />

           <UserDetails name={name} gender={gender} DOB={DOB} address={address} insuranceID={insuranceID} allergies={allergies} />

           <hr className="mx-28"/>
           <div className="flex ">
           <p className="ml-28 my-4 font-MT text-grey tracking-wider">Add Dependancy</p>
           <img src={addButton} alt="userimage" className="w-5 ml-4" />

           
           </div>
         

           <DependencyDetails dependents={dependents}/>
      
           
           

        </div>
    )
}

export default AccountsPage
