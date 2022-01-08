import React from 'react'
import UserImage from "../userimage.svg"
import EditDepModal from './EditDepModal'

const DependencyDetails = ({dependents, editDependency, setEditDependency}) => {


    return (
        <div>
            <div className="mx-28 mb-8 ">
           <div className="bg-white rounded-lg p-6 drop-shadow-lg">
          
                <img className="h-28 w-28 object-cover object-center rounded-full mx-auto" 
                src={UserImage} alt="photo" />
                <div className="text-center">
                    <p className="text-xl text-blue-400 mt-4 font-MT font-semibold mb-1">Dany Bailey</p>
                    <p className="text-base text-gray-600 font-MT leading-loose tracking-wide">Male | 15 Dec 2000</p>
                
            </div>
          
            <ul className="text-center mt-4 font-MT  text-gray-600">
            
               <li className="mt-4 text-xs"> Address: </li>
               <li className="text-xs"> Insurance: </li>
               <li className="text-xs"> Drug Allergies: </li>
           </ul>
       <div className="flex justify-center mt-6">
       <button className="bg-blue-400 hover:bg-blue-450 text-white font-semibold tracking-widest font-MT py-2 px-4 rounded-full text-xs mx-auto " onClick={()=>setEditDependency(true)} >Edit Details</button>

       </div>
           

            </div>
            
            </div>
          
            
        </div>
    )
}

export default DependencyDetails
