import React, {useState, useContext} from 'react'
import bluelogo from "../bluelogo.svg"
import axios from 'axios'
import { userIDContext } from '../global/Context';


const EditUserModal = ({setEditUser, patientDetails, setPatientDetails}) => {
const {userID, setUserID} =  useContext(userIDContext)
const{NRIC, gender, dependents, contactNumber, name, DOB, address, insuranceID, allergies} = patientDetails
const editPatientUrl = `https://bluemed-backend.herokuapp.com/patient/${userID}`
console.log(patientDetails)

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
console.log(newData[e.target.id]= e.target.value)
newData[e.target.id]= e.target.value
setUserData(newData)
console.log(newData)
}

function submit(e){
    e.preventDefault();
    setEditUser(false);
axios.put(editPatientUrl, userData).then((userData)=>console.log(userData))
.catch((err)=>console.log(err))
setPatientDetails(userData)
}

    return (
        <div className="">
        <div className="w-full h-full fixed block top-0 left-0 bg-black opacity-75 z-10"></div>
        <div className="w-full max-w-lg p-5 absolute inset-x-0 z-10  m-auto rounded-xl shadow-lg  bg-gray-100 ">
        <div className="">


        <form className="m-4 font-MT" onSubmit={(e)=>submit(e)}>
        <span className="flex justify-between mb-2 z-20">
            <span className="font-MT text-blue-400 font-semibold">
                <img src={bluelogo} alt="Logo" className="h-10  mb-4"/>
                <p>Edit user details</p>
            </span>
         </span>

         <span className="flex  mt-4 justify-between">   
        <span className="">
        <label className="block font-MT text-sm text-gray-700">Name</label>
        <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} type="text" id="name" value={userData.name} />
        </span>

        <span className="ml-8">
        <label className="block font-MT text-sm text-gray-700" >DOB</label>
        <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} type="date" id="DOB" value={userData.DOB} />
        </span>
        </span>

        <span className="flex  mt-4 justify-between">   
        <span className="">
        <label className="block font-MT text-sm text-gray-700" >Address</label>
        <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} type="text" id="address" value={userData.address}/>
        </span>

        <span className="ml-8">
        <label className="block font-MT text-sm text-gray-700">Insurance ID</label>
        <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} type="text" id="insuranceID" value={userData.insuranceID}
        />
        </span>
        </span>

        <span className="flex mt-4 justify-between">   
        <span className="">
        <label className="block font-MT text-sm text-gray-700" >Drug allergies</label>
        <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} type="text" id="allergies" value={userData.allergies}/>
        </span>
        </span>

        <span className="flex justify-between">
        <button className="w-full block mr-2 bg-white hover:bg-gray-200 focus:bg-gray-300 text-gray-400 font-semibold rounded-full font-MT
            px-4 py-3 mt-6" onClick={()=>setEditUser(false)}>Cancel</button>

             <button type="submit" className="w-full ml-4 block bg-blue-400 hover:bg-blue-450 focus:bg-blue-500 text-white font-semibold rounded-full font-MT
            px-4 py-3 mt-6">Save</button>

        </span>
    
        </form>


        </div>
        </div>

        
</div>
    )
}

export default EditUserModal
