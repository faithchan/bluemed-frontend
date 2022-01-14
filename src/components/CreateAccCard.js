import { useReducer, useState } from "react";
import { useNavigate } from 'react-router-dom';

const CreateAccCard = () => {
    const navigate = useNavigate();
    const [errorSource, setErrorSource] = useState(false)
    const regexEmailCheck = (emailTest) => {
        const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,4})+$/i
        return regexEmail.test(emailTest)
    }

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
        DOB: "2000-01-01",
        gender: "",
        address: "",
        contactNumber: "",
        allergies: "",
        insuranceID: ""
    })

    const focusOutNRIC = (event) => {
        console.log("no focus NRIC")
    }

    const focusOutEmail = (event) => {
        console.log("no focus Email")
    }

    const focusOutPassword2 = (event) => {
        console.log("no focus password 2")
        if (entry.password !== entry.password2) {
            console.log("error password no match")
            setErrorSource("retyped password does not match")
            dispatchItem({ type: "PASSWORD2", value: ""})
        }
        else {
            setErrorSource(false)
        }
    }

    const handleNameFull = (event) => {

        dispatchItem({ type: "FULLNAME", value: event.target.value}) 
    }
    const handleNRIC = (event) => {
        
        dispatchItem({ type: "NRIC", value: event.target.value.toUpperCase()}) 
    }
    const handleEmail = (event) => {
        
        dispatchItem({ type: "EMAIL", value: event.target.value.toLowerCase()}) 
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
        if(/^\d+$/.test(event.target.value) || event.target.value === "") {
        dispatchItem({ type: "CONTACTNUMBER", value: event.target.value}) 
        }
    }
    const handleAllergies = (event) => {
        
        dispatchItem({ type: "ALLERGIES", value: event.target.value}) 
    }
    const handleInsuranceID = (event) => {
        
        dispatchItem({ type: "INSURANCEID", value: event.target.value}) 
    }
    const handleSubmit = async(event) => {
        console.log(entry)
        //console.log(regexEmailCheck(entry.email))

        if(entry.name !== "" && entry.NRIC !== "" && regexEmailCheck(entry.email) && entry.password !== "" && entry.password2 === entry.password 
        && entry.DOB !== "" && entry.gender !== "" && entry.address !== "" && entry.contactNumber!== "") {
            console.log("submitting")

            const bodySend = JSON.stringify(
                {
                "DOB": new Date(Date.parse(entry.DOB)).toLocaleDateString("en-GB"),
                "name": entry.name,
                "NRIC": entry.NRIC,
                "email": entry.email,
                "password": entry.password,
                "gender": entry.gender,
                "address": entry.address,
                "contactNumber": entry.contactNumber,
                "allergies": entry.allergies,
                "insuranceID": entry.insuranceID,
                "img": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }
            )
            //check if email and nric are currently used
            try{
                const responseEmail = await fetch (`https://bluemed-backend.herokuapp.com/user/email/${entry.email}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                }
                );
                const responseNRIC = await fetch (`https://bluemed-backend.herokuapp.com/patient/NRIC/${entry.NRIC}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                }
                );
                if (responseEmail.ok && responseNRIC.ok) {
                    console.log("email and NRIC is already in use")
                    setErrorSource("NRIC and email already in use")
                }else if (responseEmail.ok) {
                    console.log("email is already in use")
                    setErrorSource("Email already in use")
                }else if (responseNRIC.ok) {
                    console.log("nric is already in use")
                    setErrorSource("NRIC already in use")
                }

                if (!responseEmail.ok && !responseNRIC.ok) {
                    console.log("Good to go, no used NRIC or email found")
                    try {
                        const responseAccount = await fetch (`https://bluemed-backend.herokuapp.com/account/`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: bodySend
                        }
                        );
                        const dataAccount = await responseAccount.json();
                        console.log(dataAccount)
                    }
                    catch(error){
                        console.log("error>>>",error)
                    }
                    navigate("/login")
                }
            }
            catch(error){
                console.log("error>>>",error)
            }
        }
        if(entry.password2 !== entry.password)
        {
            dispatchItem({ type: "PASSWORD2", value: ""}) 
        }
    }

    return (
        <div>
            <form className=" font-MT p-4" 
            //</div>onFocus={()=> {setErrorSource(false)}} 
            onSubmit={(e)=> { e.preventDefault()
            
            }}>

            <span className="flex justify-between">
                <span className="mr-4">
                <label className="block font-MT text-sm text-gray-700">Full name as per NRIC</label>
                <input type="text" onChange={handleNameFull} value={entry.name} name="" id="" placeholder="" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete required />
                </span>
            
                <span className="">
                <label className="block font-MT text-sm text-gray-700">NRIC</label>
                <input type="text" onChange={handleNRIC} onBlur={focusOutNRIC} value={entry.NRIC} name="" id="" placeholder="" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete required />
                </span>

            </span>
               
                <span className="flex justify-between mt-2">
                <span className="mr-4">
                <label className="block mt-2 font-MT text-sm text-gray-700">Email</label>
                    <input type="email" onChange={handleEmail} value={entry.email} onBlur={focusOutEmail} pattern="^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,4})+$" name="" id="" placeholder="" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete required />
                </span>
                <span>
                <label className="block mt-2 font-MT text-sm text-gray-700">Contact Number</label>
                    <input type="text" onChange={handleContactNumber} value={entry.contactNumber} name="" id="" placeholder="" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete required />
                </span>
                </span>

                <span className=''>
                <label className="block text-sm text-gray-700 mt-4">Password:</label>
                <span className="flex font-MT">
                <input type="password" onChange={handlePassword} value={entry.password} name="" id="" placeholder="" minLength="6" className="mr-4 w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none" required />
                        <input type="password" onChange={handlePassword2} onBlur={focusOutPassword2} value={entry.password2} name="" id="" placeholder="Retype password" minLength="6" className=" ml-2 w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none" required />
                        </span>
                </span>


                <span className="flex justify-between mt-4">
                
                    <span className="">
                    <label className="block font-MT text-sm text-gray-700" htmlFor="birthdate">Date of birth</label>
                    <input className="mt-2 py-2 px-6 rounded-lg text-gray-700 text-sm" type="date" onChange={handleDOB} value={entry.DOB} id="birthday" name="birthday" 
                    max= {`${new Date().getUTCFullYear()}-${new Date().toLocaleString('en-GB', {month: '2-digit'})}-${new Date().getUTCDate()}`}
                    required/>
                    </span>


                    <span>
                    <label className="block font-MT text-sm text-gray-700">Gender</label>

                    <span className="flex mt-3 mr-2">   
                    <label className="flex radio p-2 cursor-pointer">
                        <input className="my-auto transform scale-125" type="radio" onChange={handleGender} name="gender" value="male" id="male" required/>
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

               

                <span className="flex justify-between mt-4">
                    <span className="mr-4">
                    <label className="block font-MT text-sm text-gray-700">Drug Allergies</label>
                    <input type="text" onChange={handleAllergies} value={entry.allergies} name="" id="" placeholder="Enter NA if none" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete required />
                    </span>
                
                    <span className="">
                    <label className="block font-MT text-sm text-gray-700">Insurance ID</label>
                    <input type="text" onChange={handleInsuranceID} value={entry.insuranceID} name="" id="" placeholder="Optional" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete  />
                    </span>

                </span>


                <button type="submit" onClick={handleSubmit} className="w-full block bg-blue-400 hover:bg-blue-450 focus:bg-blue-400 text-white font-semibold rounded-full font-MT
                    px-4 py-3 mt-6" >Create account</button>
</form> 

{errorSource?
      <div role="alert">
          {/* <div className="bg-red text-white font-bold rounded-t px-4 py-2 mt-2">
            Error
          </div> */}
          {/* <div className="border border-t-0 border-red rounded-b bg-rose-100 px-4 py-3 text-red mb-0"> */}
            <p className="text-red font-MT text-xs  -mb-4">{`*${errorSource}`}</p>
          {/* </div> */}
        </div>:
        ""}
            
        </div>
    )
}


export default CreateAccCard
