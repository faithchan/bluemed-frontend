import React from 'react'

const CategoryList = () => {

    return (
        <div className="flex justify-center">
        <div className="mx-28 mt-4 ">
            
            <button className=" mr-14 mb-3 bg-grey hover:bg-blue-400 text-white tracking-widest font-MT font-semibold py-3 px-8 rounded-full text-xs mx-auto " >All</button>
            <button className=" mr-14 mb-3 bg-grey hover:bg-blue-400 text-white tracking-widest font-MT font-semibold py-3 px-8 rounded-full text-xs mx-auto " >General Practioner</button>
            <button className=" mr-14 mb-3 bg-grey hover:bg-blue-400 text-white tracking-widest font-MT font-semibold py-3 px-8 rounded-full text-xs mx-auto " >Mental Well-being</button>
            <button className="  mb-3 bg-grey hover:bg-blue-400 text-white tracking-widest font-MT font-semibold py-3 px-8 rounded-full text-xs mx-auto " >Paediatrics</button>
           
        </div>
        </div>
    )
}

export default CategoryList
