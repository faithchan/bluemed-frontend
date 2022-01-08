import React, {useContext, useState, useEffect} from 'react'
import UserImage from "../userimage.svg"
import UserDetails from './UserDetails'
import DependencyDetails from './DependencyDetails'
import addButton from '../addButton.svg'
import { LoginContext, adminContext, userIDContext } from '../global/Context';
import EditDepModal from './EditDepModal'
import EditUserModal from './EditUserModal'
import AddDepModal from './AddDepModal'

const AccountsPage = () => {
    const [editDependency, setEditDependency] = useState(false)
    const [editUser, setEditUser] = useState(false)
    const [addDep, setAddDep] = useState(false)
    const {loggedIn, setLoggedIn} =  useContext(LoginContext)
    const {admin, setAdmin} =  useContext(adminContext)
    const {userID, setUserID} =  useContext(userIDContext)
    const [patientDetails, setPatientDetails] = useState('')


    const patientDetailsURL =  `https://bluemed-backend.herokuapp.com/patient/${userID}`
console.log(patientDetailsURL)

    const getPatientDetails = async()=>{
        try{
            const response = await fetch (patientDetailsURL);
            console.log(response)
            const data = await response.json();
            setPatientDetails(data)
            console.log(data)
            
        }
        catch(error){
            console.log("error>>>",error)
        }
    }   

    useEffect(() => 
        getPatientDetails()
    , [])

   const {name, gender, allergies, address, DOB, dependents, insuranceID} = patientDetails
    console.log(dependents)
    console.log(patientDetails)
  
    
    return (
        <div >
            {addDep?<AddDepModal setAddDep={setAddDep}/>: ""}
            {editUser?<EditUserModal setEditUser={setEditUser}/>:""}
            {editDependency?<EditDepModal setEditDependency={setEditDependency} editDependency={editDependency}/>:""}
           {/* //check role of user const [role, setRole] = useState('')  */}
           <hr className="mx-28"/>
            <p className="mx-28 mt-4 font-MT text-grey tracking-wider">Account Details</p>
           <img src={UserImage} alt="userimage" className="w-2/12 mx-auto" />

           <UserDetails name={name} gender={gender} DOB={DOB} address={address} insuranceID={insuranceID} allergies={allergies} editUser={editUser} setEditUser={setEditUser} />

           <hr className="mx-28"/>
           <div className="flex cursor-pointer" onClick={()=>{setAddDep(true)}} >
           {!admin?<p className="ml-28 my-4 font-MT text-grey tracking-wider">Add Dependency</p>:""}
           {!admin?<img src={addButton} alt="userimage" className="w-5 ml-4" />:""}
           </div>
         
            
           {admin?"":dependents.map(dep=><DependencyDetails editDependency={editDependency} setEditDependency={setEditDependency} DOB={dep.DOB} NRIC={dep.NRIC} address={dep.address} allergies={dep.allergies} gender={dep.gender} insuranceID={dep.insuranceID} name={dep.name} relation={dep.relation}/>)}
      
           
           

        </div>
    )
}

export default AccountsPage
