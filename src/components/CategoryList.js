import React from 'react'

const CategoryList = ({allServices, setAllServices, GPServices, setGPServices, wellbeingServices, setWellbeingServices, paediatricsServices, setPaediatricsServices}) => {

    return (
        <div className="flex justify-center">
        <div className="mx-28 mt-3 ">
            
            {allServices ? <button className=" mr-14 mb-3 bg-blue-400 text-white tracking-widest font-MT font-semibold py-3 px-8 rounded-full text-xs mx-auto " >All</button>:
            <button className=" mr-14 mb-3 bg-grey hover:bg-blue-400 text-white tracking-widest font-MT font-semibold py-3 px-8 rounded-full text-xs mx-auto " 
            onClick={()=>{
                setAllServices(true)
                setGPServices(false)
                setWellbeingServices(false)
                setPaediatricsServices(false)
            }}>All</button>}

            {GPServices?<button className=" mr-14 mb-3 bg-blue-400 text-white tracking-widest font-MT font-semibold py-3 px-8 rounded-full text-xs mx-auto " >General Practioner</button>:
            <button className=" mr-14 mb-3 bg-grey hover:bg-blue-400 text-white tracking-widest font-MT font-semibold py-3 px-8 rounded-full text-xs mx-auto " onClick={()=>{
                setAllServices(false)
                setGPServices(true)
                setWellbeingServices(false)
                setPaediatricsServices(false)
            }}>General Practioner</button>}

            {wellbeingServices?<button className=" mr-14 mb-3 bg-blue-400 text-white tracking-widest font-MT font-semibold py-3 px-8 rounded-full text-xs mx-auto " >Mental Well-being</button>:
            <button className=" mr-14 mb-3 bg-grey hover:bg-blue-400 text-white tracking-widest font-MT font-semibold py-3 px-8 rounded-full text-xs mx-auto" onClick={()=>{
                setAllServices(false)
                setGPServices(false)
                setWellbeingServices(true)
                setPaediatricsServices(false)
            }} >Mental Well-being</button>}

            {paediatricsServices?<button className=" mb-3 bg-blue-400 text-white tracking-widest font-MT font-semibold py-3 px-8 rounded-full text-xs mx-auto " >Paediatrics</button>:
            <button className="  mb-3 bg-grey hover:bg-blue-400 text-white tracking-widest font-MT font-semibold py-3 px-8 rounded-full text-xs mx-auto " onClick={()=>{
                setAllServices(false)
                setGPServices(false)
                setWellbeingServices(false)
                setPaediatricsServices(true)
            }}>Paediatrics</button>}
           
        </div>
        </div>
    )
}

export default CategoryList
