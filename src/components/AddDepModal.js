import React from 'react'
import bluelogo from "../bluelogo.svg"

const AddDepModal = ({setAddDep}) => {
    return (
        <div className="">
        <div class="w-full h-full fixed block top-0 left-0 bg-black opacity-75 z-10"></div>
        <div class="w-full max-w-lg p-5 absolute inset-x-0 z-10  mx-auto my-auto rounded-xl shadow-lg  bg-gray-100 ">
        <div class="">

        <form className="m-4 font-MT" action="#" method="POST">

        <span className="flex justify-between mb-2 z-20">
            <span className="font-MT text-blue-400 font-semibold">
                <img src={bluelogo} alt="Logo" className="h-10  mb-4"/>
                
                <p>Add dependency</p>
            </span>

           
         </span>

         <span className="flex  mt-4 justify-between">   
        <span className="">
        <label className="block font-MT text-sm text-gray-700" for="birthdate">Name</label>
        <input className="mt-2 p-2 rounded-lg text-gray-700 text-sm" type="text" id="editname" name="name" required/>
        </span>

        <span className="ml-8">
        <label className="block font-MT text-sm text-gray-700" for="appt">Date of birth</label>
        <input className="mt-2 py-2 px-10 rounded-lg text-gray-700 text-sm" type="date" id="DOB" name="DOB"
        min="09:00" max="18:00" required />
        </span>
        </span>

        <span className="flex  mt-4 justify-between">   
        <span className="">
        <label className="block font-MT text-sm text-gray-700" for="birthdate">Address</label>
        <input className="mt-2 p-2 rounded-lg text-gray-700 text-sm" type="text" id="appdate" name="name" required/>
        </span>

        <span className="ml-8">
        <label className="block font-MT text-sm text-gray-700" for="appt">NRIC</label>
        <input className="mt-2 py-2 px-10 rounded-lg text-gray-700 text-sm" type="text" id="apptime" name="DOB"
        min="09:00" max="18:00" required />
        </span>
        </span>

        <span className="flex  mt-4 justify-between">   
        <span className="">
        <label className="block font-MT text-sm text-gray-700" for="birthdate">Relation</label>
        <input className="mt-2 p-2 rounded-lg text-gray-700 text-sm" type="text" id="editname" name="name" required/>
        </span>

        <span className="ml-8">
        <label className="block font-MT text-sm text-gray-700" for="appt">Date of birth</label>
        <input className="mt-2 py-2 px-10 rounded-lg text-gray-700 text-sm" type="date" id="DOB" name="DOB"
        min="09:00" max="18:00" required />
        </span>
        </span>

        <span className="flex mt-4 justify-between">   
        <span className="">
        <label className="block font-MT text-sm text-gray-700" for="birthdate">Drug allergies</label>
        <input className="mt-2 p-2 rounded-lg text-gray-700 text-sm" type="text" id="appdate" name="name" required/>
        </span>

        <span>
                    <label className="block font-MT text-sm text-gray-700">Gender</label>

                    <span className="flex mt-3">   
                    <label className="flex radio p-2 cursor-pointer">
                        <input className="my-auto transform scale-125" type="radio"  name="gender" value="male" id="male" />
                            <div className="title px-2">M</div>
                        </label>

                        <label className="flex radio p-2 cursor-pointer">
                        <input className="my-auto transform scale-125" type="radio" name="gender" value="female" id="female"  />
                        <div className="title px-2">F</div>
                        </label>

                        <label className="flex radio p-2 cursor-pointer">
                        <input className="my-auto transform scale-125" type="radio"  name="gender" value="others" id="others"  />
                        <div className="title px-2">Others</div>
                        </label>
                        </span> 
                        </span>
        </span>


        


        <span className="flex justify-between">
        <button className="w-full block mr-2 bg-white hover:bg-gray-200 focus:bg-gray-300 text-gray-400 font-semibold rounded-full font-MT
            px-4 py-3 mt-6" onClick={()=>setAddDep(false)}>Cancel</button>

             <button type="submit" className="w-full ml-4 block bg-blue-400 hover:bg-blue-450 focus:bg-blue-500 text-white font-semibold rounded-full font-MT
            px-4 py-3 mt-6">Save</button>

        </span>
       

        </form>

        </div>
        </div>

        
</div>
    )
}

export default AddDepModal
