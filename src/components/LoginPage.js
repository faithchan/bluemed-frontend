import React, {useContext} from 'react'
import LoginForm from './LoginForm'
import { LoginContext, adminContext, userIDContext } from '../global/Context';



const LoginPage = () => {
    const {loggedIn, setLoggedIn} =  useContext(LoginContext)
    const {admin, setAdmin} =  useContext(adminContext)
    const {userID, setUserID} =  useContext(userIDContext)
    return (
       
<LoginForm />   )
}

export default LoginPage
