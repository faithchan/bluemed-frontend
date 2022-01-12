import {useReducer, useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { LoginContext, adminContext, userIDContext } from '../global/Context';


const LoginForm = () => {
  let navigate = useNavigate();
  const {loggedIn, setLoggedIn} =  useContext(LoginContext)
  const {admin, setAdmin} =  useContext(adminContext)
  const {userID, setUserID} =  useContext(userIDContext)
  const [failedLogin, setFailedLogin] = useState(false)

  const itemReducer = (state, action) => {
    switch (action.type) {
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
        default:
            return state
    }
}

  const [entry, dispatchItem] = useReducer(itemReducer, {
      email: "",
      password: "",
  })

  const handleEmail = (event) => {
        
    dispatchItem({ type: "EMAIL", value: event.target.value.toLowerCase()}) 
}
  const handlePassword = (event) => {
      
      dispatchItem({ type: "PASSWORD", value: event.target.value}) 
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(entry)
    try{
      const responseLogin = await fetch (`https://bluemed-backend.herokuapp.com/session/`,
      {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(entry)
      });
      const loginDetails = await responseLogin.json();
      console.log(loginDetails)
      setLoggedIn(true)
      setFailedLogin(false)
      if(loginDetails.role === "admin") {
        setUserID(loginDetails.patientID)
        setAdmin(true)
      }
      else {
        setUserID(loginDetails.patientID)
        setAdmin(false)
      }
      localStorage.setItem('userID', loginDetails.patientID)
      navigate('/account')
  }
  catch(error){
      console.log("error>>>",error)
      setFailedLogin(true)
      dispatchItem({ type: "EMAIL", value: ""})
      dispatchItem({ type: "PASSWORD", value: ""})
  }
  }

    return (
     
		<div className="flex flex-col md:flex-row h-screen items-center">

<div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
    <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="" className="w-full h-full object-cover" />
  </div>

  <div className="bg-gray-100 w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div className="w-full h-100">

      <h1 className="text-center text-2xl md:text-3xl font-semibold font-MT ">Welcome Back!</h1>

      <form className="mt-6" onSubmit={handleSubmit}>
        <span >
          <label className="block font-MT text-sm text-gray-700">Email:</label>
          <input type="email" name="user" id="user" placeholder="" value={entry.email} onChange={handleEmail} onClick={()=>setFailedLogin(false)} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete required />
        </span>

        <span >
          <label className="block font-MT text-sm text-gray-700 mt-4">Password:</label>
          <input type="password" name="password" id="password" placeholder="" value={entry.password} onChange={handlePassword} onClick={()=>setFailedLogin(false)} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
        </span>

        <span className="">
          <p className="mt-2 cursor-pointer text-xs font-semibold font-MT text-gray-400 hover:text-blue-400 focus:text-blue-700">Forgot Password?</p>
        </span>

        <button type="submit" className="w-full block bg-blue-400 hover:bg-blue-450 focus:bg-blue-400 text-white font-semibold rounded-full font-MT
              px-4 py-3 mt-6">Login</button>

      </form>

      {failedLogin?
      <div role="alert">
          <div className="bg-red text-white font-bold rounded-t px-4 py-2 mt-4">
            Login Failed
          </div>
          <div className="border border-t-0 border-red rounded-b bg-rose-100 px-4 py-3 text-red mb-0">
            <p>Please enter a valid email and password</p>
          </div>
        </div>:
        <div className="mt-28">
            </div>}

      <hr className="mt-6  border-gray-300 w-full" />

      <span className="mt-4 flex font-MT text-sm">Need an account? <p className="text-blue-400 ml-2 cursor-pointer hover:text-blue-450 font-semibold" onClick={()=>{navigate('/createaccount')}}>Create an
              account</p></span>


    </div>
    
  </div>


    </div>


 
        
    )
}

export default LoginForm
