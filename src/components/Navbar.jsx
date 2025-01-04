import React, { useContext } from 'react'
import { assets } from '../assets/assets_admin/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate ,Link} from 'react-router-dom'

const Navbar = () => {
    const {aToken,setAtoken} = useContext(AdminContext)

    const navigate = useNavigate();

    const logout = ()=>{
        navigate('/');
        aToken && setAtoken('')
        aToken && localStorage.removeItem('aToken')
    }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 border-b bg-white py-3 '>
        <div className='flex items-center gap-2 text-xs'>
            <Link to="/" >
            <h1 className='text-2xl sm:text-3xl md:text-5xl  '>Mechji</h1>
            <span className='text-xs'>All solutions in one place </span>
        </Link>
            <p className=' border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>
              admin
            </p>
        </div>
        <button onClick={logout} className='bg-black text-white text-sm px-10 py-2 rounded-md'>Logout</button>
    </div>
  )
}

export default Navbar