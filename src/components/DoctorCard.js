import React, {useState} from 'react'
import BookingModal from './BookingModal'

const DoctorCard = ({ img, name, languages,bio, gender,pricing, profession, key}) => {
    const [showBookingModal, setBookingModal] =useState(false)

    return (
        <div>
            {showBookingModal? <BookingModal key={key} pricing={pricing} name={name} profession={profession} setBookingModal={setBookingModal}/>:""}
        <div className="px-8 mb-8">
            <div className=" rounded-md container w-full  bg-white  shadow-lg">
                <div className=" h-32 overflow-hidden rounded-md" >
                    <img className="w-full rounded-md " src="https://images.unsplash.com/photo-1625134673337-519d4d10b313?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2738&q=80" alt="bg" />
                </div>
                <div className="flex justify-center px-5  -mt-12">
                    <img className="h-32 w-32 bg-white bg-cover p-2 rounded-full object-cover " src={img} alt="profile" />

                </div>
                <div className="rounded-b-lg">
                    <div className="text-center px-14 font-MT">
                        <h2 className="text-gray-800 text-xl font-semibold">{name}</h2>
                        <p className="text-gray-400 mt-2">{profession} | {gender}</p>
                        <p className="mt-2 text-gray-600">{bio}.</p>
                        <p className="mt-2 text-gray-600 text-xs">Proficient in {languages}</p>
                    </div>
                    <hr className="mt-6" />
                    <div className="flex rounded-b-lg bg-gray-50 ">
                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer " onClick={()=>{setBookingModal(true)}}>
                            <p><span className="font-semibold">${pricing}</span> / Session</p>
                        </div>
                        <div className="border"></div>
                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer " onClick={()=>{setBookingModal(true)}}>
                            <span className="font-semibold" >Book Now </span> 
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DoctorCard
