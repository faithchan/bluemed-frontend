import React, {useContext, useReducer, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import bluelogo from "../bluelogo.svg"
import { LoginContext, adminContext, userIDContext, patientData } from '../global/Context';

const BookingModal = ({doctorID, setBookingModal, name, profession, pricing}) => {
    const navigate = useNavigate();
    const {loggedIn, setLoggedIn} =  useContext(LoginContext)
    const {admin, setAdmin} =  useContext(adminContext)
    const {userID, setUserID} =  useContext(userIDContext)
    const {patientDetails, setPatientDetails} =  useContext(patientData)
    const [options, setOptions] = useState(false)
    const itemReducer = (state, action) => {
        switch (action.type) {
            case "NAMEINDEX":
                return {
                    ...state,
                    nameIndex: action.value,

                }
            case "PATIENTNOTES":
                return {
                    ...state,
                    patientNotes: action.value,

                }
            case "DATE":
                return {
                    ...state,
                    appDateOnly: action.value,

                }
            case "TIME":
                return {
                    ...state,
                    appTimeOnly: action.value,

                }
            default:
                return state
        }
    }

    const [entry, dispatchItem] = useReducer(itemReducer, {
        nameIndex: "0",
        patientNotes: "",
        appDateOnly: `${new Date().getUTCFullYear()}-${new Date().toLocaleString('en-GB', {month: '2-digit'})}-${new Date().getUTCDate()}`,
        appTimeOnly: `${(new Date().getHours() < 10? "0": "" )+ new Date().getHours()}:${(new Date().toLocaleTimeString('en-GB', {minute: '2-digit'}) < 10? "0": "") + (new Date().toLocaleTimeString('en-GB', {minute: '2-digit'}))}`,
    })

    const handleNameIndex = (event) => {
        
        dispatchItem({ type: "NAMEINDEX", value: event.target.value}) 
    }
    const handlePatientNotes = (event) => {
        
        dispatchItem({ type: "PATIENTNOTES", value: event.target.value}) 
    }
    const handleAppDateOnly = (event) => {
        
        dispatchItem({ type: "DATE", value: event.target.value})
        console.log(event.target.value) 
    }
    const handleAppTimeOnly = (event) => {
        
        dispatchItem({ type: "TIME", value: event.target.value}) 
        console.log(event.target.value)
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        console.log(entry)
        const payload = {
            "patient": userID,
            "doctor": doctorID,
            "type": profession,
            "attendee": patientDetails.name,
            "patientNotes": entry.patientNotes,
            "zoomLink": "www.zoom.com",
            "appTime": new Date(`${entry.appDateOnly} ${entry.appTimeOnly}`)
    }
        if (profession === "Paediatrics") {
            payload.dependentNRIC = options[entry.nameIndex].NRIC
            payload.attendee = options[entry.nameIndex].Patientname
        }
        if (entry.nameIndex !== "0") {
            payload.dependentNRIC = options[entry.nameIndex].NRIC
            payload.attendee = options[entry.nameIndex].Patientname
        }
        console.log(payload)
        setBookingModal(false)
        try{
            
            const schAppResponse = await fetch (`https://bluemed-backend.herokuapp.com/schapp/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(payload)
            }
            );
            const dataSchApp = await schAppResponse.json();
            navigate("/myapp")
            console.log(dataSchApp)
        }
        catch(error){
            console.log("error>>>",error)
        }
    }

    const getData = async () => {
        try{
            
            // const responseUser = await fetch (`https://bluemed-backend.herokuapp.com/patient/${userID}`,
            // {
            //     method: 'GET',
            //     headers: {
            //         'Content-Type': 'application/json'
            //       },
            // }
            // );
            // const dataUser = await responseUser.json();
            const arrayPatientOrDependents = []
            if (profession !== "Paediatrics") {
                console.log("not paediatrics")
                arrayPatientOrDependents.push(
                    {
                        NRIC: patientDetails.NRIC,
                        Patientname: patientDetails.name
                    }
                )
            }
            console.log(patientDetails)
            patientDetails.dependents.map((element)=>{
                console.log(element)
                arrayPatientOrDependents.push({
                    NRIC: element.NRIC,
                    Patientname: element.name
                })
            //console.log(arrayPatientOrDependents)
            })
            setOptions(arrayPatientOrDependents)
        }
        catch(error){
            console.log("error>>>",error)
        }
    }

    //console.log(patientDetails, userID)

    useEffect(()=> {
        console.log("use effect", options)
        console.log(doctorID, name)
        getData()
        //console.log(`${new Date().getUTCFullYear() + 1}-${new Date().toLocaleString('en-GB', {month: '2-digit'})}-${new Date().getUTCDate()}`)
    },[])

    return (
        <div className="">
            	<div className="w-full h-full fixed block top-0 left-0 bg-black opacity-75 z-10"></div>
                <div className="w-full max-w-lg p-5 absolute inset-x-0 z-10  mx-auto my-auto rounded-xl shadow-lg  bg-gray-100 ">
                <div className="">
       
                <form onSubmit={handleSubmit}className="m-4 font-MT" >

                    <span className="flex justify-between mb-2 z-20">
                        <span className="font-MT text-blue-400 font-semibold">
                            <img src={bluelogo} alt="Logo" className="h-10  mb-4"/>
                            
                            <p>Booking Details</p>
                        </span>

                        <span className="font-MT text-blue-400 font-semibold text-xs mt-2">
                            <p>{name}</p>
                            <p>{profession}</p>
                            <p>${pricing} per session</p>
                        </span>
                    </span>

                    <span className="">
                        <span className="mr-4">
                        <label className="block font-MT text-sm text-gray-700 mb-2">Patient's Name</label>
                        <select name="patient" id="patient" onChange={handleNameIndex} className="w-full px-3 py-2 rounded-lg" required>
                        {/* <option value="name">Sarah Coleman</option>
                        <option value="name1">Dany Bailey</option> */}
                        {(options  ? options.map((element, index)=> {
                            return <option value={index}>{element.Patientname}</option>
                        }): "")}
                        {(profession === "Paediatrics" && options.length=== 0? <option disabled={true} >No dependants found</option>: "")}
                        </select>
                        </span>
                    </span>


                    <span className="flex  mt-4 justify-between">   
                        <span className="">
                        <label className="block font-MT text-sm text-gray-700" htmlFor="birthdate">Appointment Date</label>
                        <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" value={entry.appDateOnly} onChange={handleAppDateOnly} type="date" id="appdate" name="appdate" 
                        min={`${new Date().getUTCFullYear()}-${new Date().toLocaleString('en-GB', {month: '2-digit'})}-${new Date().getUTCDate()}`} 
                        max={`${new Date().getUTCFullYear() + 1}-${new Date().toLocaleString('en-GB', {month: '2-digit'})}-${new Date().getUTCDate()}`} required/>
                        </span>

                        <span className="">
                        <label className="block font-MT text-sm text-gray-700" htmlFor="appt">Appointment Time</label>
                        <input className="mt-2 py-2 px-14 rounded-lg text-gray-700 text-sm" value={entry.appTimeOnly} onChange={handleAppTimeOnly} type="time" id="apptime" name="apptime"
                        min="09:00" max="18:00" required />
                        </span>
                    </span>

                    <span className="mr-4">
                        <label className="mt-4 block font-MT text-sm text-gray-700">Notes to Doctor</label>
                        <input type="text" name="" id="" placeholder="optional" onChange={handlePatientNotes} className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete />
                    </span>


                    <span className="flex justify-between">
                    <button  className="w-full block mr-2 bg-white hover:bg-gray-200 focus:bg-gray-300 text-gray-400 font-semibold rounded-full font-MT
                        px-4 py-3 mt-6" onClick={()=>{setBookingModal(false)}}>Cancel</button>

                        <button type="submit" 
                        // onClick={()=>{
                        //     console.log(entry)
                        // }} 
                        className="w-full ml-4 block bg-blue-400 hover:bg-blue-450 focus:bg-blue-500 text-white font-semibold rounded-full font-MT
                        px-4 py-3 mt-6">Confirm</button>
                    </span>
               

                </form>

                </div>
                </div>

                
        </div>
    )
}

export default BookingModal
