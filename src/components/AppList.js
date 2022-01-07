import React from 'react'

const AppList = ({setPastApp, setSchedApp, pastApp, schedApp, setSchedButton,schedButton, setPastButton, pastButton}) => {




    return (
        <div>
             <div className="flex justify-center">
        <div className="mx-28 mt-3 ">

        {schedButton?
        <button className=" mr-10 mb-3 tracking-widest font-MT font-semibold mx-auto text-xs text-blue-400 text-transform: uppercase" 
            >Scheduled Appointments</button>
                :<button className=" mr-10 mb-3 text-grey tracking-widest font-MT font-semibold mx-auto text-xs hover:text-blue-400 text-transform: uppercase" 
            onClick={()=>{ setSchedButton(true);setPastButton(false)
                }}>Scheduled Appointments</button>}

            <span className="text-grey tracking-widest font-MT font-semibold text-xs">|</span>

             {pastButton?<button className="ml-10 mb-3 tracking-widest font-MT font-semibold mx-auto text-xs text-blue-400 text-transform: uppercase" 
            >Past Appointments</button>:<button className="ml-10 mb-3 text-grey tracking-widest font-MT font-semibold mx-auto text-xs hover:text-blue-400 text-transform: uppercase" 
            onClick={()=>{ setSchedButton(false); setPastButton(true)
            }}>Past Appointments</button>}

        </div>
        </div>
            
        </div>
    )
}

export default AppList
