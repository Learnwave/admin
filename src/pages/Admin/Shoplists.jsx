import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const Shoplists = () => {

  const {doctors,aToken,getAllDoctors,changeAvailability} = useContext(AdminContext);
   console.log(doctors);
   
  useEffect(()=>{
      if (aToken) {
        getAllDoctors()
      }
  },[aToken])

  return (
    <div className='m-5 max-h-[90vh] overscroll-y-scroll '>
        <h1 className='text-lg font-medium '>All Doctors</h1>
        <div className='flex flex-wrap w-full gap-4 gap-y-6 pt-5'>
          {
            
            doctors.map((item,index)=>(
                <div className='border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={index}>
                  <img className='bg-indigo-50 group-hover:bg-primary transition-all duration-500' src={item.image} alt="" />
                 <div className='p-4'>
                  <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
                  <p className='text-neutral-800 text-lg font-medium'>{item.speciality}</p>
                  <div className='mt-2 flex items-center gap-1 text-sm'> <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} name="" id="" /> 
                  <p>Available</p>
                  </div>
                 </div>
                </div>
            ))
          }
        </div>
    </div>
  )
}

export default Shoplists