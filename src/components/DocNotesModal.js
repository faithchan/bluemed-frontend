import React,{useState} from 'react'
import bluelogo from "../bluelogo.svg"
import axios from 'axios'
const DocNotesModal = ({setSchedAppStatus,id, getAllSchedApp,getAllPastApp}) => {

const [body,setBody]=useState({
    doctorNotes:""
})

    const changeStatusURL=`https://bluemed-backend.herokuapp.com/schapp/promote/${id}`

    const handleChange=(e)=>{
const notes = {...body}
console.log(notes[e.target.id] = e.target.value)
notes[e.target.id] = e.target.value
setBody(notes)
    }

    const submitHandler = async(e)=>{
        e.preventDefault();
        setSchedAppStatus(false)
        await axios.post(changeStatusURL,body).then((res)=>console.log(res))
      .catch((err)=>console.log(err));
      getAllPastApp();
      getAllSchedApp();
    }
    
    
        return (
            <div className="">
                    <div className="w-full h-full fixed block top-0 left-0 bg-black opacity-75 z-10"></div>
                    <div className="w-full max-w-lg p-5 absolute inset-x-0 z-10  mx-auto my-auto rounded-xl shadow-lg  bg-gray-100 ">
                    <div className="">
           
                    <form className="m-4 font-MT" onSubmit={submitHandler}>
    
                        <span className="flex justify-between mb-2 z-20">
                            <span className="font-MT text-blue-400 font-semibold">
                                <img src={bluelogo} alt="Logo" className="h-10  mb-4"/>
                                
                                <p>Doctor's notes</p>
                            </span>
    
                        </span>
    
                        <span className="">
                            <span className="mr-4">
                            
                            <input id="doctorNotes"  className="w-full px-3 py-2 rounded-lg" onChange={(e)=>handleChange(e)}>
                           
                            </input>
                            </span>
                        </span>
    
                        <span className="flex justify-between">
                        <button  className="w-full block mr-2 bg-white hover:bg-gray-200 focus:bg-gray-300 text-gray-400 font-semibold rounded-full font-MT
                            px-4 py-3 mt-6" onClick={()=>setSchedAppStatus(false)}>Cancel</button>
    
                            <button type="submit" 
                
                            className="w-full ml-4 block bg-blue-400 hover:bg-blue-450 focus:bg-blue-500 text-white font-semibold rounded-full font-MT
                            px-4 py-3 mt-6">Completed</button>
                        </span>
                   
    
                    </form>
    
                    </div>
                    </div>
    
                    
            </div>)
}

export default DocNotesModal
