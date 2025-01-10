import { createContext,useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'
import { useEffect } from "react";
export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [aToken,setAtoken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : "");
    const [newStore,setNewStore] = useState(null)
    console.log(newStore)
    const backendUrl = import.meta.env.VITE_BACKEND_URL
   
    const getNewRequest = async () => {
        try {
                const getStoreData = await axios.post(backendUrl + "/api/admin/new-requests",{} ,{headers :  {aToken} })
               
                if (getStoreData.data.success) {

                   setNewStore(getStoreData.data.store)
                   
                }
            } catch (error) {
                console.error(error)}
    }

    useEffect(()=>{
        getNewRequest()
    },[])


    
    const value = {
            aToken,setAtoken,backendUrl,getNewRequest,newStore
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