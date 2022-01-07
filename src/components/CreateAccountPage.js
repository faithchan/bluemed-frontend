import React, {useContext} from 'react'
import CreateAccCard from './CreateAccCard';
import { useNavigate } from 'react-router-dom';
import { LoginContext, adminContext, userIDContext } from '../global/Context';

const CreateAccountPage = () => {
  const {loggedIn, setLoggedIn} =  useContext(LoginContext)
    const {admin, setAdmin} =  useContext(adminContext)
    const {userID, setUserID} =  useContext(userIDContext)

    let navigate = useNavigate();
    return (
        <div>
         	<div className="flex flex-col md:flex-row h-screen items-center">

<div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
    <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="" className="w-full h-full object-cover" />
  </div>

  <div className="bg-gray-100 w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div className="w-full h-100">


     <CreateAccCard />

      <hr className="mt-6  border-gray-300 w-full" />

      <span className="mt-4 flex font-MT text-sm">Have an account? <p className="text-blue-400 ml-2 cursor-pointer hover:text-blue-450 font-semibold" onClick={()=>{navigate('/login')}}>Login here</p></span>


    </div>
    
  </div>


    </div>
        </div>
    )
}

export default CreateAccountPage
