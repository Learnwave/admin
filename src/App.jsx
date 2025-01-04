import React, { useCallback, useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";

import AddProfile from "./pages/Admin/AddProfile";
import NewRequests from "./pages/Admin/NewRequests";
import Shoplists from "./pages/Admin/Shoplists";
import Profiles from "./pages/Admin/Profiles";
const App = () => {
  const { aToken } = useContext(AdminContext);
 
  
  return aToken ? (
    <div className="bg-[#f8f9fd]">
      <ToastContainer />
      <Navbar/>
      <div className="flex items-start">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<Dashboard/>} />
          <Route path="/new-requests" element={<NewRequests/>} />
          <Route path="/add-profile" element={<AddProfile/>} />
          <Route path="/shop-lists" element={<Shoplists/>} />
          <Route path="/profiles" element={<Profiles/>} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
