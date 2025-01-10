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
                <div key={index} className='w-full border border-black rounded-md flex  justify-between  p-4'>
                    
                    <div>

                        <div className='flex gap-3'>
                         <p>Business name : {item.name}</p>
                        <p>Store Request By : {item.ownerName} </p>

                        </div>
                        <div className='flex gap-2'>
                            <p>Phone Number :</p>
                            <p>{item.phoneNumber }</p>
                        </div>

                        <div className='flex gap-2'>
                            <p>Business Category :</p>
                            <p>{item.businessCategory}</p>
                        </div>

                        <div className='flex gap-2'>
                            <p>Seller Offered To Customers :</p>
                            <p>{item.sellOptions }</p>
                        </div>

                        <div className='flex gap-2'>
                            <p>Services Offered To Customers :</p>
                            <p>{item.dealsInServices }</p>
                        </div>

                        <div className='flex gap-2'>
                            <p>Working Range :</p>
                            <p>{item.workingRange }</p>
                        </div>

                        <div className='flex gap-2'>
                            <p>Address : </p>
                            <p>{item.address.street},{item.address.city},{item.address.zipCode} - {item.address.state}</p>
                        </div>

                        <div className='flex gap-2'>
                            <p>Description : </p>
                            <p>{item.description}</p>
                        </div>

                    </div>

                    <div>
                            <div className='flex gap-2'>
                              <img className='w-28 h-28' src={item.storeImages[0]} key={index} alt="" />
                             
                            </div>
                    </div>
                </div>
            ))
        }
    
    </div>
  )
}

export default StoreCompo