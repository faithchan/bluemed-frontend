import React from 'react'
import bluelogo from "../bluelogo.svg"

const ReceiptModal = ({showReceipt, setShowReceipt}) => {
    return (
        <div className="">
        <div className="w-full h-full fixed block top-0 left-0 bg-black opacity-75 z-10"></div>
            
  <div class="w-full max-w-lg p-5 absolute inset-x-0 z-20  m-auto  rounded-xl shadow-lg  bg-gray-100 ">

    <div class="flex justify-center">
    <div class="flex flex-col w-full p-5 mx-auto card">
            <div class="flex flex-row justify-between ">
                <div class="flex flex-col w-full mx-auto">
                    <div class="flex justify-between">
                        <img class="w-40 " src={bluelogo}/>
                        <h1 class="text-s font-MT font-semibold mt-2">Receipt #0001</h1>
                    </div>
                    <div class="flex flex-row justify-between mt-4">
                        <div>
                            <img class="w-44 mt-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU4AAAAeAQMAAAB5ZGVpAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAD9JREFUOI3tyrEJACAMBEDh24eskgECri44QFYJfGuhc0jKgxsiZFRNr0wgyIrjtZWPHmetBM2gGF27du36Z72G5FJDYMX7jwAAAABJRU5ErkJggg==" alt="barcode"/>
                            <br/>
                            Issued on Date 2022
                        </div> 
                    </div>
                </div>
                <div class="brand">
                    <span class="flex items-center justify-center space-x-3 transition-all duration-1000 ease-out transform text-thumeza-500">
                        
                    </span>
                </div>
            </div>

            <div class="mt-4 border-t-2 border-gray-200 "></div>

            <div class="flex justify-between mt-3">
                <div class="flex flex-col ">
                    
                    <span class="">
                        <strong className="font-semibold font-MT text-blue-400 text-lg ">BlueMed SG Pte Ltd</strong>
                        <p className="mt-2">Name:</p>
                        <p>Date of Appointment:</p>
                        <p>Doctor Prescription:</p>
                        
                    </span>
                </div>
               
               
            </div>
           


            <div class="flex justify-between mt-8">
                
                    
                    <p>Total Amount:</p>
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
