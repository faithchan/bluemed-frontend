import React from 'react'

const AppointmentCard = () => {
    return (
        <div>
            
            <div class="mx-28 my-4 rounded-md bg-white p-4 drop-shadow-lg  transition transform duration-500 cursor-pointer">
  <div class="flex flex-col justify-start">
    <div class="flex justify-between items-center w-96">
      <div class="text-lg font-semibold text-bookmark-blue flex space-x-1 items-center mb-2">
       
        <span>Frontend Engineer</span>
      </div>
      <span class="bg-green-500 rounded-full uppercase text-white text-sm px-4 py-1 font-bold shadow-xl"> Remote </span>
    </div>
    <div class="text-sm text-gray-500 flex space-x-1 items-center">
      
      <span>Banglore, India</span>
    </div>
    <div>
      <div class="mt-5">
        <button class="mr-2 my-1 uppercase tracking-wider px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white border text-sm font-semibold rounded py-1 transition transform duration-500 cursor-pointer">Apply</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default AppointmentCard
