import React from 'react'

const UserDetails = () => {
    return (
        <div>
            <h1 className="font-MT font-semibold text-blue-400 text-3xl text-center mt-8">Sarah Coleman</h1>
           <ul className="text-center mt-4 font-MT mb-6 text-gray-600">
               <li className="text-xl tracking-wider"> Female | 31 Dec 1972</li>
               <li className="mt-4 text-sm"> Address: </li>
               <li className="text-sm"> Insurance: </li>
               <li className="text-sm"> Drug Allergies: </li>
           </ul>
           <div className="flex justify-center mb-8">
       <button className="bg-blue-400 hover:bg-blue-450 text-white font-semibold tracking-widest font-MT py-2 px-4 rounded-full text-xs mx-auto "  >Edit Details</button>

       </div>
        </div>
    )
}

export default UserDetails
