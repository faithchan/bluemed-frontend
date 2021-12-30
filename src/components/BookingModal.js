import React from 'react'
import bluelogo from "../bluelogo.svg"

const BookingModal = ({setBookingModal}) => {
    return (
        <div className="">
            	<div class="absolute bg-black opacity-80 inset-0 z-0 "></div>
                <div class="w-full  max-w-lg p-5 absolute inset-x-0 z-10  mx-auto my-auto rounded-xl shadow-lg  bg-gray-100 ">
                <div class="">
       
                <form className="m-4 font-MT" action="#" method="POST">

                <span className="flex justify-between mb-2">
                    <span className="font-MT text-blue-400 font-semibold">
                        <img src={bluelogo} alt="Logo" className="h-10  mb-4"/>
                        <p>ID #0001</p>
                        <p>Booking Details</p>
                    </span>

                    <span className="font-MT text-blue-400 font-semibold text-xs mt-2">
                        <p>Doctor Name</p>
                        <p>Type of Service</p>
                        <p>Rates ($) /h</p>
                    </span>
                 </span>

                <span className="">
                    <span className="mr-4">
                    <label className="block font-MT text-sm text-gray-700">Patient's Name</label>
                    <select name="patient" id="patient" className="w-full p-2 rounded-lg" required>
                    <option value="name">Sarah Coleman</option>
                    <option value="name1">Dany Bailey</option>
                    
                    </select>
                    </span>
                </span>


                <span className="flex  mt-4 justify-between">   
                    <span className="">
                    <label className="block font-MT text-sm text-gray-700" for="birthdate">Appointment Date</label>
                    <input className="mt-2 p-2 rounded-lg text-gray-700 text-sm" type="date" id="appdate" name="appdate" required/>
                    </span>

                    <span className="ml-8">
                    <label className="block font-MT text-sm text-gray-700" for="appt">Appointment Time</label>
                    <input className="mt-2 py-2 px-10 rounded-lg text-gray-700 text-sm" type="time" id="apptime" name="apptime"
                    min="09:00" max="18:00" required />
                    </span>
                </span>

                <span className="mr-4">
                    <label className="mt-4 block font-MT text-sm text-gray-700">Notes to Doctor</label>
                    <input type="text" name="" id="" placeholder="optional" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete />
                </span>


                <span className="flex justify-between">
                <button  className="w-full block mr-2 bg-white hover:bg-gray-200 focus:bg-gray-300 text-gray-400 font-semibold rounded-full font-MT
                    px-4 py-3 mt-6" onClick={()=>{setBookingModal(false)}}>Cancel</button>

                     <button type="submit" className="w-full ml-4 block bg-blue-400 hover:bg-blue-450 focus:bg-blue-500 text-white font-semibold rounded-full font-MT
                    px-4 py-3 mt-6">Confirm</button>

                </span>
               

                </form>

                </div>
                </div>

                
        </div>
    )
}

export default BookingModal
