import React from 'react'

const UserDetails = ({name,gender,DOB, address,insuranceID, allergies}) => {
    return (
        <div>
            <h1 className="font-MT font-semibold text-blue-400 text-3xl text-center mt-8">{name}</h1>
           <ul className="text-center mt-4 font-MT mb-6 text-gray-600">
               <li className="text-xl tracking-wider"> {gender} | {DOB}</li>
               <li className="mt-4 text-sm"> Address: {address}</li>
               <li className="text-sm"> Insurance ID: {insuranceID}</li>
               <li className="text-sm"> Drug Allergies: {allergies.join(", ")}</li>
           </ul>
           <div className="flex justify-center mb-8">
       <button className="bg-blue-400 hover:bg-blue-450 text-white font-semibold tracking-widest font-MT py-2 px-4 rounded-full text-xs mx-auto "  >Edit Details</button>

       </div>
        </div>
    )
}

export default UserDetails
