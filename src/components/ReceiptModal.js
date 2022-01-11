import React from 'react'
import bluelogo from "../bluelogo.svg"

const ReceiptModal = () => {
    return (
        <div>
            <div class="p-10">
  <div class="max-w-full  bg-white flex flex-col rounded overflow-hidden shadow-lg">

    <div class="flex justify-center">
    <div class="flex flex-col w-full p-5 mx-auto card">
            <div class="flex flex-row justify-between ">
                <div class="flex flex-col w-full mx-auto">
                    <div class="flex flex-row">
                        <h1 class="text-2xl">PROOF OF DELIVERY (POD) # <small>45F128</small></h1>
                    </div>
                    <div class="flex flex-row justify-between mt-3">
                        <div>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU4AAAAeAQMAAAB5ZGVpAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAD9JREFUOI3tyrEJACAMBEDh24eskgECri44QFYJfGuhc0jKgxsiZFRNr0wgyIrjtZWPHmetBM2gGF27du36Z72G5FJDYMX7jwAAAABJRU5ErkJggg==" alt="barcode"/>
                            <br/>
                            Issued on July 6, 2021
                        </div> 
                    </div>
                </div>
                <div class="brand">
                    <span class="flex items-center justify-center space-x-3 transition-all duration-1000 ease-out transform text-thumeza-500">
                        <img class="w-28 h-28" src={bluelogo}/>
                    </span>
                </div>
            </div>

            <div class="mt-4 border-t-2 border-gray-200 "></div>

            <div class="flex justify-between mt-3">
                <div class="flex flex-col ">
                    From
                    <p class="">
                        <strong>6710 Fife Avenue,Harare , ZW</strong><br/>
                        Zimbabwe<br/>
                        Harare<br/>
                        Harare City<br/>
                    </p>
                </div>
                <div class="flex flex-col">
                    To
                    <p class="">
                        <strong>17e Rue Limete/Kin, Kinshasa</strong><br/>
                        Congo, Republic Democraric<br/>
                        Kinshasa<br/>
                        Kinshasa City<br/>
                    </p>

                </div>
                <div class="flex flex-col pr-4">
                        Load ID #TZ236
                        <p>Load Status: Delivered</p>
                        <p>Shipper : 
                            Manasse Ngudia
                            Manasseng
                        </p>
                        <p>Transporter : 
                            Lyord 
                            Frederickso
                        </p>
                        <p>
                            Payment Type:Visa-card
                            <br/>
                        </p>
                        <p>
                            Terms Of Payment: 50% uploading
                        </p>
                </div>
            </div>
            <div class="mt-3 ">
                <table class="table w-full mt-3 table_striped">
                    <thead>
                        <tr>
                            <th class="ltr:text-left rtl:text-right"></th>
                            <th class="ltr:text-left rtl:text-right"></th>
                            <th class="ltr:text-left rtl:text-right"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Goods Type : No Perishable
                            <br/>
                                Weight in Kg : 400 kg 
                            <br/>
                                Volume in Cubic Meter : 3.3
                            <br/>
                                Estimated Value : 1560
                            <br/>
                                Description: contains tools 
                            <br/>
                            </td>
                            <td>
                                Vehicule Type : Van 1Ton
                                <br/>
                                Vehicule : -
                                
                                
                                <br/>
                                Driver : -
                                <br/>
                            </td>
                            <td>
                            6700
                            </td>
                        </tr>
                        <tr>
                            <td>
                            
                            </td>
                            <td>TOTAL</td>
                            <td>
                                6700
                            USD
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex flex-row justify-end mt-8">
                <div class="">
                    <div class="">
                        <button  class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm printInvoice hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"><span class="mt-1 la la-download"></span>Print</button>
                    </div>
                </div>
            </div>
    </div>
    </div>
    </div>
 </div>
        </div>
    )
}

export default ReceiptModal
