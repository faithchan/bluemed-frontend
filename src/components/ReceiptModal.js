import React from 'react'
import bluelogo from "../bluelogo.svg"

const ReceiptModal = ({showReceipt, setShowReceipt, attendee, issueDate, date, price, doctorNotes, doctor}) => {
    return (
        <div className="">
        <div className="w-full h-full fixed block top-0 left-0 bg-black opacity-75 z-10"></div>
            
  <div className="w-full max-w-lg p-5 absolute inset-x-0 z-20  m-auto  rounded-xl shadow-lg  bg-gray-100 ">

    <div className="flex justify-center">
    <div className="flex flex-col w-full p-5 mx-auto card">
            <div className="flex flex-row justify-between ">
                <div className="flex flex-col w-full mx-auto">
                    <div className="flex justify-between">
                        <img className="w-40 " src={bluelogo}/>
                        
                    </div>
                    <div className="flex flex-row justify-between mt-4">
                        <div>
                            <img className="w-44 mt-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU4AAAAeAQMAAAB5ZGVpAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAD9JREFUOI3tyrEJACAMBEDh24eskgECri44QFYJfGuhc0jKgxsiZFRNr0wgyIrjtZWPHmetBM2gGF27du36Z72G5FJDYMX7jwAAAABJRU5ErkJggg==" alt="barcode"/>
                            <br/>
                            Issued on {issueDate}
                        </div> 
                    </div>
                </div>
                <div className="brand">
                    <span className="flex items-center justify-center space-x-3 transition-all duration-1000 ease-out transform text-thumeza-500">
                        
                    </span>
                </div>
            </div>

            <div className="mt-4 border-t-2 border-gray-200 "></div>

            <div className="flex justify-between mt-3">
                <div className="flex flex-col ">
                    
                    <span className="">
                        <strong className="font-semibold font-MT text-blue-400 text-lg ">BlueMed SG Pte Ltd</strong>
                        <p className="mt-2">Patient Name: {attendee}</p>
                        <p>Date of Appointment: {date}</p>
                        <p>Attending Doctor: {doctor}</p>
                        <p>Remarks: {doctorNotes}</p>
                        
                    </span>
                </div>
               
               
            </div>
           


            <div class="flex justify-between mt-8">
                
                    
                    <p>Total Cost: ${price.toFixed(2)}</p>
                    <button className="w-40 block  bg-white hover:bg-gray-200 focus:bg-gray-300 text-gray-400 font-semibold rounded-full font-MT
            px-4 py-3 mt-6" onClick={()=>setShowReceipt(false)}>Close</button>
                   
                
            </div>
    </div>
    </div>
    
 </div>
        
        </div>
    )
}

export default ReceiptModal
