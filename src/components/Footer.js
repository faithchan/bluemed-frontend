import React from "react";


const Footer = () => {
    return (
    
    <div className=" bg-blue-400">
    <div className="max-w-2xl mx-auto text-white py-10 font-MT font-medium">
        <div className="text-center">
            <h3 className="text-3xl mb-3"> Download the app now </h3>
            <p>Tele consultation made easier and faster.</p>
            <div className="flex justify-center my-10">
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7"/>
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Download on </p>
                        <p className="text-sm "> Google Play Store </p>
                    </div>
                </div>
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 "/>
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Download on </p>
                        <p className="text-sm "> Apple Store </p>
                    </div>
                </div>
            </div>
        </div>
        
            <p className="text-center">© BlueMed SG</p>
           
        
    </div>
</div>

   
    )
}

export default Footer
