import React from 'react'
import { useEffect,  } from 'react'

const AppList = ({setPastApp, setSchedApp, pastApp, schedApp, setSchedButton,schedButton, setPastButton, pastButton}) => {


      //fetching data for schedApp

      const schedAppURL = "https://bluemed-backend.herokuapp.com/schApp/all"

      const allSchedApp = async() => {
          try {
              const response = await fetch (schedAppURL); 
              const data = await response.jason(); 
              setSchedApp (data);
          } 
          catch (err) {
              console.log("error:", err)
          }
      }

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
