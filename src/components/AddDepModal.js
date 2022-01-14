import axios from 'axios'
import React, {useState, useContext} from 'react'
import bluelogo from "../bluelogo.svg"
import { userIDContext } from '../global/Context';

const AddDepModal = ({setAddDepBtn,setPatientDetails, patientDetails}) => {
    const {userID, setUserID} =  useContext(userIDContext)
const{NRIC, gender, contactNumber, name, DOB, address, insuranceID, allergies} = patientDetails
const {dependents} =patientDetails
const [depDetails, setDepDetails] =useState({})
const editPatientUrl = `https://bluemed-backend.herokuapp.com/patient/${userID}`

const [addDep, setAddDep]=useState({
    name:name,
    DOB:DOB,
    address:address,
    insuranceID:insuranceID,
    allergies:allergies,
    NRIC: NRIC,
    gender: gender,
    dependents: [...dependents, depDetails],
    contactNumber: contactNumber
})



function handleChange(e){
   const newDepData = {...depDetails}
   newDepData[e.target.id]=e.target.value
   setDepDetails(newDepData)
   setAddDep({
    name:name,
    DOB:DOB,
    address:address,
    insuranceID:insuranceID,
    allergies:allergies,
    NRIC: NRIC,
    gender: gender,
    dependents: [...dependents, newDepData],
    contactNumber: contactNumber
})

}

console.log(addDep)


    function submit(e){
        e.preventDefault();
        setAddDepBtn(false)
    axios.put(editPatientUrl, addDep).then((res)=>console.log(res))
.catch((err)=>console.log(err))
setPatientDetails(addDep)
}

    return (
        <div className="">
        <div class="w-full h-full fixed block top-0 left-0 bg-black opacity-75 z-10"></div>
        <div class="w-full max-w-lg p-5 absolute inset-x-0 z-10  mx-auto my-auto rounded-xl shadow-lg  bg-gray-100 ">
        <div class="">

        <form className="m-4 font-MT" onSubmit={(e)=>submit(e)}>

        <span className="flex justify-between mb-2 z-20">
            <span className="font-MT text-blue-400 font-semibold">
                <img src={bluelogo} alt="Logo" className="h-10  mb-4"/>
                
                <p>Add dependency</p>
            </span> 
         </span>

         <span className="flex  mt-4 justify-between">   
        <span className="">
        <label className="block font-MT text-sm text-gray-700" for="birthdate">Name</label>
        <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} type="text" id="name" required/>
        </span>

        <span className="ml-8">
        <label className="block font-MT text-sm text-gray-700" for="appt">Date of birth</label>
        <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} type="date" id="DOB" 
         required max={`${new Date().getUTCFullYear()}-${new Date().toLocaleString('en-GB', {month: '2-digit'})}-${new Date().getUTCDate()}`}/>
        </span>
        </span>

        <span className="flex  mt-4 justify-between">   
        <span className="">
        <label className="block font-MT text-sm text-gray-700" for="birthdate">Address</label>
        <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} type="text" id="address" required/>
        </span>

        <span className="ml-8">
        <label className="block font-MT text-sm text-gray-700" for="appt">NRIC</label>
        <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} type="text" id="NRIC" 
        min="09:00" max="18:00" required />
        </span>
        </span>

        <span className="flex  mt-4 justify-between">   
        <span className="">
        <label className="block font-MT text-sm text-gray-700" for="birthdate">Relation</label>
        <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} type="text" id="relation"  required/>
        </span>

        <span className="ml-8">
        <label className="block font-MT text-sm text-gray-700" for="appt">Insurance ID</label>
        <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} type="text" placeholder="Optional" id="insuranceID"
         />
        </span>
        </span>

        <span className="flex mt-4 justify-between">   
        <span className="">
        <label className="block font-MT text-sm text-gray-700" for="birthdate">Drug allergies</label>
        <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} type="text" id="allergies" placeholder="Enter NA if none" required/>
        </span>

        <span>
                    <label className="block font-MT text-sm text-gray-700 px-3">Gender</label>

                    <span className="flex  mt-3">   
                    <label className="flex radio p-2 cursor-pointer">
                        <input className="my-auto transform scale-125" onChange={(e)=>handleChange(e)} type="radio" value="Male" id="gender" name="genderRad"/>
                            <div className="title px-2">M</div>
                        </label>

                        <label className="flex radio p-2 cursor-pointer">
                        <input className="my-auto transform scale-125" onChange={(e)=>handleChange(e)} type="radio" value="Female" id="gender" name="genderRad"/>
                        <div className="title px-2">F</div>
                        </label>

                        <label className="flex radio p-2 cursor-pointer">
                        <input className="my-auto transform scale-125" onChange={(e)=>handleChange(e)} type="radio" value="Others" id="gender" name="genderRad"/>
                        <div className="title px-2">Others</div>
                        </label>
                        </span> 
                        </span>
        </span>


        


        <span className="flex justify-between">
        <button className="w-full block mr-2 bg-white hover:bg-gray-200 focus:bg-gray-300 text-gray-400 font-semibold rounded-full font-MT
            px-4 py-3 mt-6" onClick={()=>setAddDepBtn(false)}>Cancel</button>

             <button type="submit" className="w-full ml-4 block bg-blue-400 hover:bg-blue-450 focus:bg-blue-500 text-white font-semibold rounded-full font-MT
            px-4 py-3 mt-6">Add</button>

        </span>
       

        </form>

        </div>
        </div>

        
</div>
    )
}

export default AddDepModal
