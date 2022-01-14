import React, {useContext, useState, useEffect} from 'react'
import UserImage from "../userimage.svg"
import UserDetails from './UserDetails'
import DependencyDetails from './DependencyDetails'
import addButton from '../addButton.svg'
import { LoginContext, adminContext, userIDContext, patientData} from '../global/Context';
import EditDepModal from './EditDepModal'
import EditUserModal from './EditUserModal'
import AddDepModal from './AddDepModal'

const AccountsPage = () => {
    const [editDependency, setEditDependency] = useState(false)
    const [editUser, setEditUser] = useState(false)
    const [addDepBtn, setAddDepBtn] = useState(false)
    const {loggedIn, setLoggedIn} =  useContext(LoginContext)
    const {admin, setAdmin} =  useContext(adminContext)
    const {userID, setUserID} =  useContext(userIDContext)
    const {patientDetails, setPatientDetails} = useContext(patientData)
    const [refreshFlag, setRefreshFlag] = useState(false)

    const patientDetailsURL =  `https://bluemed-backend.herokuapp.com/patient/${userID}`
  

    const getPatientDetails = async()=>{
        try{
            const response = await fetch (patientDetailsURL);
            const data = await response.json();
            setPatientDetails(data)
        }
        catch(error){
            console.log("error>>>",error)
        }
    }   

    // useEffect(() => {
    //     if(userID) {
    //         getPatientDetails()
    //     }
    // }
    // , [userID])

   const {name, gender, allergies, address, DOB, dependents, insuranceID} = patientDetails
   const[editDepData, setEditDepData]=useState({})


    
    return (
        <div >
            {addDepBtn?<AddDepModal setAddDepBtn={setAddDepBtn}patientDetails={patientDetails} setPatientDetails={setPatientDetails}/>: ""}
            {editUser?<EditUserModal setEditUser={setEditUser} patientDetails={patientDetails} setPatientDetails={setPatientDetails} />:""}
            {editDependency?<EditDepModal setEditDependency={setEditDependency} editDependency={editDependency} patientDetails={patientDetails} setPatientDetails={setPatientDetails} editDepData={editDepData} setEditDepData={setEditDepData} />:""}
           {/* //check role of user const [role, setRole] = useState('')  */}
           <hr className="mx-28"/>
            <p className="mx-28 mt-4 font-MT text-grey tracking-wider">Account Details</p>
           <img src={UserImage} alt="userimage" className="w-2/12 mx-auto" />

           <UserDetails name={name} gender={gender} DOB={DOB} address={address} insuranceID={insuranceID} allergies={allergies} editUser={editUser} setEditUser={setEditUser} />

           <hr className="mx-28"/>
           <div className="flex cursor-pointer" onClick={()=>{setAddDepBtn(true)}} >
           {!admin?<p className="ml-28 my-4 font-MT text-grey tracking-wider">Add Dependant</p>:""}
           {!admin?<img src={addButton} alt="add dependency" className="w-5 ml-4" />:""}
           </div>
         
            
           {dependents?(admin?"":dependents.map(dep=><DependencyDetails editDependency={editDependency} setPatientDetails={setPatientDetails} refreshFlag={refreshFlag} setRefreshFlag={setRefreshFlag} setEditDependency={setEditDependency} dependents={dependents} depDOB={dep.DOB} depNRIC={dep.NRIC} depAddress={dep.address} depAllergies={dep.allergies} depGender={dep.gender} depInsuranceID={dep.insuranceID} depName={dep.name} depRelation={dep.relation} patientDetails={patientDetails} setPatientDetails={setPatientDetails} editDepData={editDepData} setEditDepData={setEditDepData}/>)):""}
      
           
           

        </div>
    )
}

export default AccountsPage
