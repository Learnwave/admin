import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'
export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [aToken,setAtoken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : "");
    const backendUrl = import.meta.env.VITE_BACKEND_URL
   
    const getNewRequest = async () => {
        try {
                const data = await axios.post(backendUrl + "/api/admin/new-requests",{} ,{headers :  {aToken} })
                console.log(data)
            } catch (error) {
                console.error(error)}
    }

    getNewRequest()


    
    const value = {
            aToken,setAtoken,backendUrl,getNewRequest
    }

    return  (
        <AdminContext.Provider value={value}>
            {
                props.children
            }
        </AdminContext.Provider>
    )
}

export default AdminContextProvider