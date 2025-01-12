import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { useEffect } from 'react'
import { useState } from 'react'

const StoreCompo = () => {
    const {newStore,getNewRequest} = useContext(AdminContext)
    const [images,setImages] = useState("");
    console.log(images)
    useEffect(()=>{
        getNewRequest()
    },[])
  return newStore && (
    <div className='w-full flex flex-col gap-6 '>

        {
            newStore.map((item,index)=>(
                <div key={index} className='w-full border shadow shadow-gray-400 border-black rounded-md flex lg:flex-row flex-col justify-between  p-4'>
                    
                    <div className='w-full lg:w-1/2 flex flex-col justify-between   gap-2'>

                        <div className='flex  gap-3'>
                         <p className='font-semibold px-2 '>Business name :</p>
                         <p> {item.name}</p>
                        </div>
                        <div className='flex gap-3'>
                        <p className='font-semibold px-2' >Store Request By :  </p>
                        <p>{item.ownerName}</p>
                        </div>

                        <hr />
                        <div className='flex gap-2'>
                            <p className='font-semibold px-2 '>Phone Number :</p>
                            <p>{item.phoneNumber }</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-semibold px-2 '>Profiles Phone Number :</p>
                            <p>{item.profilePhoneNumber }</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-semibold px-2 '>Email :</p>
                            <p>{item.email }</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-semibold px-2 '>Gender :</p>
                            <p>{item.gender }</p>
                        </div>

                        <div className='flex gap-2'>
                            <p className='font-semibold px-2 '>Business Category :</p>
                            <p>{item.businessCategory}</p>
                        </div>

                        <div className='flex gap-2'>
                            <p className='font-semibold px-2 '>Seller Offered To Customers :</p>
                            <p>{item.sellOptions }</p>
                        </div>

                        <div className='flex gap-2'>
                            <p className='font-semibold px-2 '>Deals In Services :</p>
                            <p>{item.dealsInServices }</p>
                        </div>

                        <div className='flex gap-2'>
                            <p className='font-semibold px-2 '>Deals In Goods :</p>
                            <p>{item.dealsInGoods }</p>
                        </div>

                        <div className='flex gap-2'>
                            <p className='font-semibold px-2 '>Working Range :</p>
                            <p>{item.workingRange }</p>
                        </div>

                        <div className='flex gap-2'>
                            <p className='font-semibold px-2 '>Address : </p>
                            <p>{item.address.street},{item.address.city},{item.address.zipCode} - {item.address.state}</p>
                        </div>

                        <div className='flex gap-2'>
                            <p className='font-semibold px-2 '>Description:</p>
                            <p>{item.description}</p>
                        </div>

                    </div>

                    <div className='flex w-full flex-col  items-center justify-center lg:w-1/2'>
                            <div className='flex flex-wrap items-center justify-center gap-2'>
                              <img className='w-28 h-28' src={item.storeImages[0]} key={index} alt="" />
                              <img className='w-28 h-28' src={item.storeImages[1]} key={index} alt="" />
                              <img className='w-28 h-28' src={item.storeImages[2]} key={index} alt="" />
                              <img className='w-28 h-28' src={item.storeImages[3]} key={index} alt="" />
                            </div>
                                <span className='text-indigo-700 my-3'>view all images</span>
                            <div className='flex flex-col gap-4'>
                               
                                <div className='flex gap-4  flex-col' >
                                    <div className='border bg-red-500 text-white border-black rounded-sm px-3 py-2'>

                                    <select className=' bg-transparent outline-none  ' name="" id="">
                                    <option value="Missing Information">Missing Information</option>
                                    <option value="Unable To Connect With You">Unable To Connect With You</option>
                                    <option value="Not Verify Your Business">Not Verify Your Business</option>
                                     </select>
                                    </div>
                                      <button className='px-3 py-2 border border-black hover:bg-red-100'>Rejected</button>
                                </div>
                                <div className='flex gap-4  flex-col' >
                                    <div className='border bg-green-500 text-white border-black rounded-sm px-3 py-2'>

                                    <select className=' bg-transparent outline-none  ' name="" id="">
                                    <option value="Missing Information">Accepted with Normal Profile</option>
                                    <option value="Unable To Connect With You">Accepted With Verify Profile</option>
                                   
                                     </select>
                                    </div>
                                      <button className='px-3 py-2 border border-black hover:bg-green-100'>Accepted</button>
                                </div>

                                
                            </div>
                    </div>
                </div>
            ))
        }
    
    </div>
  )
}

export default StoreCompo