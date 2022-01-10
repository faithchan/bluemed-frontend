import React, {useContext, useState} from 'react'
import bluelogo from "../bluelogo.svg"
import axios from 'axios'
import { userIDContext } from '../global/Context';

const EditDepModal = ({setEditDependency,editDependency,patientDetails, setPatientDetails}) => {
    const {userID, setUserID} =  useContext(userIDContext)
const{NRIC, gender, dependents, contactNumber, name, DOB, address, insuranceID, allergies} = patientDetails
const editPatientUrl = `https://bluemed-backend.herokuapp.com/patient/${userID}`


    const [userData, setUserData] = useState({
        name:name,
        DOB:DOB,
        address:address,
        insuranceID:insuranceID,
        allergies:allergies,
        NRIC: NRIC,
        gender: gender,
        dependents: dependents,
        contactNumber: contactNumber
    })
    console.log(userData)
    
    
    function handleChange(e){
    const newData={...userData}
    newData[e.target.id]= e.target.value
    setUserData(newData)
    console.log(newData)
    }
    
    function submit(e){
        e.preventDefault();
        setEditDependency(false);
    axios.put(editPatientUrl, userData).then((userData)=>console.log(userData))
    .catch((err)=>console.log(err))
    setPatientDetails(userData)
    }
    return (
        
            <div className="">
                    <div class="w-full h-full fixed block top-0 left-0 bg-black opacity-75 z-10"></div>
                    <div class="w-full max-w-lg p-5 absolute inset-x-0 z-10  mx-auto my-auto rounded-xl shadow-lg  bg-gray-100 ">
                    <div class="">
           
                    <form className="m-4 font-MT" action="#" method="POST">
    
                    <span className="flex justify-between mb-2 z-20">
                        <span className="font-MT text-blue-400 font-semibold">
                            <img src={bluelogo} alt="Logo" className="h-10  mb-4"/>
                            
                            <p>Edit user details</p>
                        </span>
    
                       
                     </span>
    
                     <span className="flex  mt-4 justify-between">   
                    <span className="">
                    <label className="block font-MT text-sm text-gray-700" for="birthdate">Name</label>
                    <input className="mt-2 p-2 rounded-lg text-gray-700 text-sm" type="text" id="editname"  required/>
                    </span>

                    <span className="ml-8">
                    <label className="block font-MT text-sm text-gray-700" for="appt">DOB</label>
                    <input className="mt-2 py-2 px-10 rounded-lg text-gray-700 text-sm" type="date" id="DOB" 
                    min="09:00" max="18:00" required />
                    </span>
                    </span>

                    <span className="flex  mt-4 justify-between">   
                    <span className="">
                    <label className="block font-MT text-sm text-gray-700" for="birthdate">Address</label>
                    <input className="mt-2 p-2 rounded-lg text-gray-700 text-sm" type="text" id="appdate"required/>
                    </span>

                    <span className="ml-8">
                    <label className="block font-MT text-sm text-gray-700" for="appt">Insurance ID</label>
                    <input className="mt-2 py-2 px-10 rounded-lg text-gray-700 text-sm" type="text" id="apptime" 
                    required />
                    </span>
                    </span>

                    <span className="flex mt-4 justify-between">   
                    <span className="">
                    <label className="block font-MT text-sm text-gray-700" for="birthdate">Drug allergies</label>
                    <input className="mt-2 p-2 rounded-lg text-gray-700 text-sm" type="text" id="appdate" required/>
                    </span>
                    </span>

    
                    
    
    
                    <span className="flex justify-between">
                    <button className="w-full block mr-2 bg-white hover:bg-gray-200 focus:bg-gray-300 text-gray-400 font-semibold rounded-full font-MT
                        px-4 py-3 mt-6" onClick={()=>setEditDependency(false)}>Cancel</button>
    
                         <button type="submit" className="w-full ml-4 block bg-blue-400 hover:bg-blue-450 focus:bg-blue-500 text-white font-semibold rounded-full font-MT
                        px-4 py-3 mt-6">Save</button>
    
                    </span>
                   
    
                    </form>
    
                    </div>
                    </div>
    
                    
            </div>
        )
    
}

export default EditDepModal
