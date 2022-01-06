import React from 'react'

const AppList = () => {
    return (
        <div>
             <div className="flex justify-center">
        <div className="mx-28 mt-3 ">
        <button className=" mr-10 mb-3 text-grey tracking-widest font-MT font-semibold mx-auto text-xs " 
            onClick={()=>{
                
            }}>Scheduled Appointments</button>
            <span className="text-grey tracking-widest font-MT font-semibold text-xs">|</span>
             <button className="ml-10 mb-3 text-grey tracking-widest font-MT font-semibold mx-auto text-xs" 
            onClick={()=>{
                
            }}>Past Appointments</button>
        </div>
        </div>
            
        </div>
    )
}

export default AppList
