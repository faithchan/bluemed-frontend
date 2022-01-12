import React, {useState} from 'react'
import ReceiptModal from './ReceiptModal'

const PastAppCard = () => {
const[showReceipt, setShowReceipt]=useState(false)
  
    return (
        <div>
          {showReceipt?<ReceiptModal setShowReceipt={setShowReceipt} showReceipt={showReceipt}/>:""}
            <div className=" rounded-lg bg-white drop-shadow-lg ">

              <div className="flex justify-between p-6">
              <span className="font-MT font-semibold text-xs leading-loose mr-10">
                <p>Patient: Sarah Lee</p>
                <p>Appointment Info: 31/12/2021 at 1200H</p>
                <p>Doctor: Mohit Dhiman</p>
                <p>Type: Psychotherapy</p>
                <p>Notes: Weekly Catch Up 1H Session</p>
              </span>

              <span className="font-MT font-semibold text-right leading-loose">
              <p className="tracking-wider mb-2">#0001</p>
              <button className="bg-blue-400 hover:bg-blue-450 text-white font-semibold tracking-widest font-MT py-2 px-4 rounded-full text-xs mx-auto " onClick={()=>setShowReceipt(true)} >View Receipt</button>
                <ul className="text-xs flex mt-4">
                <li><button className="bg-green rounded-full w-4 h-4 mr-2 " /></li>
                <p className="text-left">Completed and delivered</p>
                </ul>
              </span>
              </div>
 
            </div>
        </div>
    )
}

export default PastAppCard