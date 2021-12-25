import React from 'react'
import UserImage from "../userimage.svg"
import UserDetails from './UserDetails'
import DependencyDetails from './DependencyDetails'
import addButton from '../addButton.svg'

const AccountsPage = () => {
    return (
        <div >
           {/* //check role of user const [role, setRole] = useState('')  */}
           <hr className="mx-28"/>
            <p className="mx-28 mt-4 font-MT text-grey tracking-wider">Account Details</p>
           <img src={UserImage} alt="userimage" className="w-2/12 mx-auto" />

           <UserDetails />

           <hr className="mx-28"/>
           <div className="flex ">
           <p className="ml-28 my-4 font-MT text-grey tracking-wider">Add Dependancy</p>
           <img src={addButton} alt="userimage" className="w-5 ml-4" />

           
           </div>
         

           <DependencyDetails />
      
           
           

        </div>
    )
}

export default AccountsPage
