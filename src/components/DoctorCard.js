import React from 'react'

const DoctorCard = ({setBookingModal}) => {
    return (
        <div className="px-8 mb-8">
            <div className=" rounded-md container w-full  bg-white  shadow-lg">
                <div className=" h-32 overflow-hidden rounded-md" >
                    <img class="w-full rounded-md" src="https://images.unsplash.com/photo-1625134673337-519d4d10b313?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2738&q=80" alt="" />
                </div>
                <div className="flex justify-center px-5  -mt-12">
                    <img className="h-32 w-32 bg-white bg-cover p-2 rounded-full  " src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="" />

                </div>
                <div className="rounded-b-lg">
                    <div className="text-center px-14 font-MT">
                        <h2 className="text-gray-800 text-3xl font-semibold">Doctor Name</h2>
                        <p className="text-gray-400 mt-2">Psychiatrist (M)</p>
                        <p className="mt-2 text-gray-600">Dr xx is a certified board psychiatrist specialising in addiction psychiatry. He is fluent in English & Chinese. </p>
                    </div>
                    <hr className="mt-6" />
                    <div className="flex rounded-b-lg bg-gray-50 ">
                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer " onClick={()=>{setBookingModal(true)}}>
                            <p><span className="font-semibold">$100</span> Per Session</p>
                        </div>
                        <div className="border"></div>
                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer " onClick={()=>{setBookingModal(true)}}>
                            <span className="font-semibold" >Book Now </span> 
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorCard
