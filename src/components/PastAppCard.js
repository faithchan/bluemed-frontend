import React, {useState,useContext} from 'react'
import ReceiptModal from './ReceiptModal'
import { adminContext } from '../global/Context'

const PastAppCard = ({name, appInfo, doctor, type, notes, status}) => {
  const {admin, setAdmin} =  useContext(adminContext)
const[showReceipt, setShowReceipt]=useState(false)


const date = new Date(Date.parse(appInfo)).toLocaleDateString("en-GB")
    const time = new Date(Date.parse(appInfo)).toLocaleTimeString("en-SG", {hour12: false, hour: '2-digit', minute:'2-digit'})
 
    return (
        <div>
          {showReceipt?<ReceiptModal setShowReceipt={setShowReceipt} showReceipt={showReceipt}/>:""}
            <div className=" rounded-lg bg-white drop-shadow-lg ">

              <div className="flex justify-between p-6">
              <span className="font-MT font-semibold text-xs leading-loose mr-10">
                <p>Patient: {name}</p>
                <p>Date: {date} at {time}</p>
                <p>Doctor: {doctor}</p>
                <p>Type: {type}</p>
                <p>Notes: {notes}</p>
              </span>

              <span className="font-MT font-semibold text-right leading-loose">
              
              <button className="bg-blue-400 hover:bg-blue-450 text-white font-semibold tracking-widest font-MT py-2 px-4 rounded-full text-xs mx-auto " onClick={()=>setShowReceipt(true)} >View Receipt</button>
                <ul className="text-xs flex mt-4">
                <li><button className="bg-green rounded-full w-4 h-4 mr-2 " /></li>
                <p className="text-left">{status}</p>
                </ul>
                {admin?<ul className="text-xs flex mt-2">
                <li><button className="bg-yellow rounded-full w-4 h-4 mr-2 " /></li>
                <p className="text-left cursor-pointer hover:underline">Change Status</p>
                </ul>:""}
              </span>
              </div>
 
            </div>
        </div>
    )
}

export default PastAppCard