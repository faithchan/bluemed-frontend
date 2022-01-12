import React, {useContext, useState} from 'react'
import bluelogo from "../bluelogo.svg"
import axios from 'axios'
import { userIDContext } from '../global/Context';

const EditDepModal = ({editDepData, patientDetails, setPatientDetails, setEditDependency}) => {
    const {userID, setUserID} =  useContext(userIDContext)
const{NRIC, gender, dependents, contactNumber, name, DOB, address, insuranceID, allergies} = patientDetails
const editPatientUrl = `https://bluemed-backend.herokuapp.com/patient/${userID}`

const[depData, setDepData]=useState({
    name:editDepData.name,
    DOB:editDepData.DOB,
    address:editDepData.address,
    insuranceID:editDepData.insuranceID,
    allergies:editDepData.allergies,
    NRIC: editDepData.NRIC,
    gender: editDepData.gender,
    relation:editDepData.relation,
    
   })

//    console.log(depData)

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
    
    
    function handleChange(e){
    const newData={...depData}
    newData[e.target.id]= e.target.value
    setDepData(newData)
    console.log(newData)
   
    const selectedDep =  dependents.findIndex((dep)=>dep.NRIC === depData.NRIC)
        console.log(selectedDep)
        dependents[selectedDep] = newData
        console.log(dependents)

    }
    
    function submit(e){
        e.preventDefault();
        
        // console.log(dependents)
        setUserData({
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
    //  console.log(userData)
        setEditDependency(false);
        axios.put(editPatientUrl, userData).then((userData)=>console.log(userData))
        .catch((err)=>console.log(err))
        setPatientDetails(userData)
        console.log(patientDetails)
    }
    return (
        
            <div className="">
                    <div className="w-full h-full fixed block top-0 left-0 bg-black opacity-75 z-10"></div>
                    <div className=" w-full max-w-lg p-5 absolute inset-x-0 z-10  m-auto rounded-xl shadow-lg  bg-gray-100 ">
                    <div className="">
           
                    <form className="m-4 font-MT" onSubmit={submit}>
    
                    <span className="flex justify-between mb-2 z-20">
                        <span className="font-MT text-blue-400 font-semibold">
                            <img src={bluelogo} alt="Logo" className="h-10  mb-4"/>
                            
                            <p>Edit user details</p>
                        </span>
    
                       
                     </span>
    
                     <span className="flex  mt-4 justify-between">   
                    <span className="">
                    <label className="block font-MT text-sm text-gray-700" >Name</label>
                    <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} type="text" id="name" value={depData.name} required/>
                    </span>

                    <span className="ml-8">
                    <label className="block font-MT text-sm text-gray-700" >DOB</label>
                    <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} value={depData.DOB} type="date" id="DOB" 
                    required />
                    </span>
                    </span>

                    <span className="flex  mt-4 justify-between">   
                    <span className="">
                    <label className="block font-MT text-sm text-gray-700">Address</label>
                    <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} type="text" value={depData.address} id="address" required/>
                    </span>

                    <span className="ml-8">
                    <label className="block font-MT text-sm text-gray-700" >Insurance ID</label>
                    <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} type="text" id="insuranceID" value={depData.insuranceID}
                    required />
                    </span>
                    </span>

                    <span className="flex mt-4 justify-between">   
                    <span className="">
                    <label className="block font-MT text-sm text-gray-700">Drug allergies</label>
                    <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} type="text" id="allergies" value={depData.allergies} required/>
                    </span>

                    <span className="ml-8">
                    <label className="block font-MT text-sm text-gray-700" >Relationship</label>
                    <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" onChange={(e)=>handleChange(e)} type="text" id="relation" value={depData.relation}
                    /></span>
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
