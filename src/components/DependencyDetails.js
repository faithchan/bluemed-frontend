import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import UserImage from "../userimage.svg"
import EditDepModal from './EditDepModal'
import deleteButton from '../deleteButton.svg'
import {userIDContext } from '../global/Context'

const DependencyDetails = ({editDependency, setEditDependency, depDOB, depNRIC,depRelation, depAddress, depAllergies, depGender,depInsuranceID, depName, patientDetails, setPatientDetails, setEditDepData, editDepData}) => {
    const{NRIC, gender, dependents, contactNumber, name, DOB, address, insuranceID, allergies} = patientDetails
    const {userID, setUserID} =  useContext(userIDContext)

   

   
    const[userData, setUserData] = useState({name:name,
        DOB:DOB,
        address:address,
        insuranceID:insuranceID,
        allergies:allergies,
        NRIC: NRIC,
        gender: gender,
        dependents:dependents,
        contactNumber: contactNumber})
    const editPatientUrl = `https://bluemed-backend.herokuapp.com/patient/${userID}`


const deleteDepHandler = (e)=>{
    e.preventDefault();
    const selectedDep =  dependents.findIndex((dep)=>dep.name === depName)
   let newDependents=dependents.splice(selectedDep,1)
    console.log(newDependents)
    console.log(dependents)
    console.log(dependents.length)
    // console.log(selectedDep)
    setPatientDetails(userData)
    console.log(patientDetails)
        
       
   
        console.log(userData)
        axios.put(editPatientUrl, userData).then((userData)=>console.log(userData))
.catch((err)=>console.log(err))

}

    return (
        <div>
    
            <div className="mx-28 mb-8 ">
           <div className="bg-white rounded-lg p-6 drop-shadow-lg">
               <div className="flex justify-end " >
               <img src={deleteButton} alt="delete" className="w-5 opacity-60 cursor-pointer" onClick={deleteDepHandler} />
               </div>
           
          
                <img className="h-28 w-28 object-cover object-center rounded-full mx-auto" 
                src={UserImage} alt="photo" />
                <div className="text-center">
                    <p className="text-xl text-blue-400 mt-4 font-MT font-semibold mb-1">{depName}</p>
                    <p className="text-base text-gray-600 font-MT leading-loose tracking-wide">{depGender} | {depDOB}</p>
                
            </div>
          
            <ul className="text-center mt-4 font-MT  text-gray-600">
            
               <li className="mt-4 text-xs"> Address: {depAddress}</li>
               <li className="text-xs"> Insurance: {depInsuranceID}</li>
               <li className="text-xs"> Drug Allergies: {depAllergies}</li>
           </ul>
       <div className="flex justify-center mt-6">
       <button className="bg-blue-400 hover:bg-blue-450 text-white font-semibold tracking-widest font-MT py-2 px-4 rounded-full text-xs mx-auto " onClick={()=>{setEditDependency(true)
    setEditDepData({
        name:depName,
        NRIC:depNRIC,
        DOB:depDOB,
        gender:depGender,
        relation:depRelation,
        address:depAddress,
        insuranceID:depInsuranceID,
        allergies:depAllergies
    })}} >Edit Details</button>

       </div>
           

            </div>
            
            </div>
          
            
        </div>
    )
}

export default DependencyDetails
