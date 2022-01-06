import React from 'react'

const CreateAccCard = () => {
    return (
        <div>
            <form className="mt-6 font-MT" onSubmit={} method="POST">

            <span className="flex justify-between">
                <span className="mr-4">
                <label className="block font-MT text-sm text-gray-700">Full name as per NRIC</label>
                <input type="text" name="" id="" placeholder="" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                </span>
            
                <span className="">
                <label className="block font-MT text-sm text-gray-700">NRIC</label>
                <input type="text" name="" id="" placeholder="" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                </span>

            </span>
               
                <span>
                <label className="block mt-2 font-MT text-sm text-gray-700">Email</label>
                    <input type="email" name="" id="" placeholder="" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                </span>

                <span className=''>
                <label className="block text-sm text-gray-700 mt-4">Password:</label>
                <span className="flex font-MT">
                <input type="password" name="" id="" placeholder="" minlength="6" className="mr-2 w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none" required />
                        <input type="password" name="" id="" placeholder="Retype password" minlength="6" className=" ml-2 w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none" required />
                        </span>
                </span>


                <span className="flex justify-between mt-4">
                
                    <span className="">
                    <label className="block font-MT text-sm text-gray-700" for="birthdate">Date of birth</label>
                    <input className="mt-2 p-2 rounded-lg text-gray-700 text-sm" type="date" id="birthday" name="birthday"/>
                    </span>


                    <span>
                    <label className="block font-MT text-sm text-gray-700">Gender</label>

                    <span className="flex mt-3">   
                    <label class="flex radio p-2 cursor-pointer">
                        <input class="my-auto transform scale-125" type="radio" name="gender" value="male" id="male" />
                            <div class="title px-2">M</div>
                        </label>

                        <label class="flex radio p-2 cursor-pointer">
                        <input class="my-auto transform scale-125" type="radio" name="gender" value="female" id="female"  />
                        <div class="title px-2">F</div>
                        </label>

                        <label class="flex radio p-2 cursor-pointer">
                        <input class="my-auto transform scale-125" type="radio" name="gender" value="others" id="others"  />
                        <div class="title px-2">Others</div>
                        </label>
                        </span> 
                        </span>

                </span>

                <span className="">
                <label className="block font-MT text-sm text-gray-700 mt-2">Address <p className="text-xs font-MT text-gray-500">Please include postal code</p></label>
                <input type="text" name="address" id="address" placeholder="Street 23, Burlington Road, #01-174, S410897" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                </span>


                <span className="flex justify-between mt-4">
                    <span className="mr-4">
                    <label className="block font-MT text-sm text-gray-700">Drug Allergies</label>
                    <input type="text" name="" id="" placeholder="" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                    </span>
                
                    <span className="">
                    <label className="block font-MT text-sm text-gray-700">Insurance ID</label>
                    <input type="text" name="" id="" placeholder="" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete  />
                    </span>

                </span>


                <button type="submit" className="w-full block bg-blue-400 hover:bg-blue-450 focus:bg-blue-400 text-white font-semibold rounded-full font-MT
                    px-4 py-3 mt-6">Create account</button>
</form> 
        </div>
    )
}

export default CreateAccCard
