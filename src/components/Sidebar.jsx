import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets_admin/assets';

const Sidebar = () => {
    const {aToken} = useContext(AdminContext); 
  return (
    <div className='min-h-screen bg-white border-r'>
            {
                aToken && <ul className='text-black mt-5'>
                            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary':''}` } to={'/admin-dashboard'}>
                             <i className="text-black text-xl fa-solid fa-house"></i>
                                <p>Dashboard</p>
                            </NavLink>

                            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary':''}` } to={'/add-profile'}>
                            <i className="text-black text-xl fa-solid fa-user-plus"></i>
                                <p>Add-Profile</p>
                            </NavLink>

                            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary':''}` } to={'/new-requests'}>
                            <i className="text-black text-xl fa-solid fa-bell"></i>
                                <p>New-Requests</p>
                            </NavLink>

                            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary':''}` } to={'/shop-lists'}>
                            <i className="text-black text-xl fa-solid fa-shop"></i>
                                <p>Shop-Lists</p>
                            </NavLink>

                            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary':''}` } to={'/profiles'}>
                            <i className="text-black text-xl fa-solid fa-user"></i>
                                <p>Profile-Lists</p>
                            </NavLink>
                            </ul>
            }
    </div>
  )
}

export default Sidebar