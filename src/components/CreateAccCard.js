import { useReducer, useState } from "react";

const CreateAccCard = () => {

       const itemReducer = (state, action) => {
        switch (action.type) {
            case "FULLNAME":
                return {
                    ...state,
                    name: action.value,

                }
            case "NRIC":
                return {
                    ...state,
                    NRIC: action.value,

                }
            case "EMAIL":
                return {
                    ...state,
                    email: action.value,

                }
            case "PASSWORD":
                return {
                    ...state,
                    password: action.value,

                }
            case "PASSWORD2":
                return {
                    ...state,
                    password2: action.value,

                }
            case "DOB":
                return {
                    ...state,
                    DOB: action.value,

                }
            case "GENDER":
                return {
                    ...state,
                    gender: action.value,

                }
            case "ADDRESS":
                return {
                    ...state,
                    address: action.value,

                }
            case "ALLERGIES":
                return {
                    ...state,
                    allergies: action.value,

                }
                 case "CONTACTNUMBER":
                return {
                    ...state,
                    contactNumber: action.value,

                }
            case "INSURANCEID":
                return {
                    ...state,
                    insuranceID: action.value,

                }
            default:
                return state
        }
    }

    const [entry, dispatchItem] = useReducer(itemReducer, {
        name: "",
        NRIC: "",
        email: "",
        password: "",
        password2: "",
        DOB: "",
        gender: "",
        address: "",
        contactNumber: "",
        allergies: "",
        insuranceID: ""
    })

    const handleNameFull = (event) => {

        dispatchItem({ type: "FULLNAME", value: event.target.value}) 
    }
    const handleNRIC = (event) => {
        
        dispatchItem({ type: "NRIC", value: event.target.value}) 
    }
    const handleEmail = (event) => {
        
        dispatchItem({ type: "EMAIL", value: event.target.value}) 
    }
    const handlePassword = (event) => {
        
        dispatchItem({ type: "PASSWORD", value: event.target.value}) 
    }
    const handlePassword2 = (event) => {
        
        dispatchItem({ type: "PASSWORD2", value: event.target.value}) 
    }
    const handleDOB = (event) => {
        
        dispatchItem({ type: "DOB", value: event.target.value}) 
    }
    const handleGender = (event) => {
        
        dispatchItem({ type: "GENDER", value: event.target.value}) 
    }
    const handleAddress = (event) => {
        
        dispatchItem({ type: "ADDRESS", value: event.target.value}) 
    }
    const handleContactNumber = (event) => {
        
        dispatchItem({ type: "CONTACTNUMBER", value: event.target.value}) 
    }
    const handleAllergies = (event) => {
        
        dispatchItem({ type: "ALLERGIES", value: event.target.value}) 
    }
    const handleInsuranceID = (event) => {
        
        dispatchItem({ type: "INSURANCEID", value: event.target.value}) 
    }
    const handleSubmit = (event) => {
        console.log(entry)
        if(entry.name !== "" && entry.NRIC !== "" && entry.email !== "" && entry.password !== "" && entry.password2 === entry.password 
        && entry.DOB !== "" && entry.gender !== "" && entry.address !== "") {
            console.log("submitted")
        }
        if(entry.password2 !== entry.password)
        {
            dispatchItem({ type: "PASSWORD2", value: ""}) 
        }
    }

    return (
        <div>
            <form className="mt-6 font-MT" onSubmit={(e)=> { e.preventDefault() }}>

            <span className="flex justify-between">
                <span className="mr-4">
                <label className="block font-MT text-sm text-gray-700">Full name as per NRIC</label>
                <input type="text" onChange={handleNameFull} value={entry.name} name="" id="" placeholder="" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete required />
                </span>
            
                <span className="">
                <label className="block font-MT text-sm text-gray-700">NRIC</label>
                <input type="text" onChange={handleNRIC} value={entry.NRIC} name="" id="" placeholder="" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete required />
                </span>

            </span>
               
                <span>
                <label className="block mt-2 font-MT text-sm text-gray-700">Email</label>
                    <input type="email" onChange={handleEmail} value={entry.email} name="" id="" placeholder="" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete required />
                </span>

                <span className=''>
                <label className="block text-sm text-gray-700 mt-4">Password:</label>
                <span className="flex font-MT">
                <input type="password" onChange={handlePassword} value={entry.password} name="" id="" placeholder="" minLength="6" className="mr-2 w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none" required />
                        <input type="password" onChange={handlePassword2} value={entry.password2} name="" id="" placeholder="Retype password" minLength="6" className=" ml-2 w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none" required />
                        </span>
                </span>


                <span className="flex justify-between mt-4">
                
                    <span className="">
                    <label className="block font-MT text-sm text-gray-700" htmlFor="birthdate">Date of birth</label>
                    <input className="mt-2 p-2 rounded-lg text-gray-700 text-sm" type="date" onChange={handleDOB} id="birthday" name="birthday"/>
                    </span>


                    <span>
                    <label className="block font-MT text-sm text-gray-700">Gender</label>

                    <span className="flex mt-3">   
                    <label className="flex radio p-2 cursor-pointer">
                        <input className="my-auto transform scale-125" type="radio" onChange={handleGender} name="gender" value="male" id="male" />
                            <div className="title px-2">M</div>
                        </label>

                        <label className="flex radio p-2 cursor-pointer">
                        <input className="my-auto transform scale-125" type="radio" onChange={handleGender} name="gender" value="female" id="female"  />
                        <div className="title px-2">F</div>
                        </label>

                        <label className="flex radio p-2 cursor-pointer">
                        <input className="my-auto transform scale-125" type="radio" onChange={handleGender} name="gender" value="others" id="others"  />
                        <div className="title px-2">Others</div>
                        </label>
                        </span> 
                        </span>

                </span>

                <span className="">
                <label className="block font-MT text-sm text-gray-700 mt-2">Address <p className="text-xs font-MT text-gray-500">Please include postal code</p></label>
                <input type="text" onChange={handleAddress} value={entry.address} name="address" id="address" placeholder="Street 23, Burlington Road, #01-174, S410897" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete required />
                </span>

                <span>
                <label className="block mt-2 font-MT text-sm text-gray-700">Contact Number</label>
                    <input type="text" onChange={handleContactNumber} value={entry.contactNumber} name="" id="" placeholder="" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete required />
                </span>

                <span className="flex justify-between mt-4">
                    <span className="mr-4">
                    <label className="block font-MT text-sm text-gray-700">Drug Allergies</label>
                    <input type="text" onChange={handleAllergies} value={entry.allergies} name="" id="" placeholder="Optional" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete required />
                    </span>
                
                    <span className="">
                    <label className="block font-MT text-sm text-gray-700">Insurance ID</label>
                    <input type="text" onChange={handleInsuranceID} value={entry.insuranceID} name="" id="" placeholder="Optional" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete  />
                    </span>

                </span>


                <button type="submit" onClick={handleSubmit} className="w-full block bg-blue-400 hover:bg-blue-450 focus:bg-blue-400 text-white font-semibold rounded-full font-MT
                    px-4 py-3 mt-6" >Create account</button>
</form> 
        </div>
    )
}


export default CreateAccCard
