import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";


import NewRequests from "./pages/Admin/NewRequests";

import Store from "./pages/Admin/Store";
import Products from "./pages/Admin/Products";
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
          
          <Route path="/shop-lists" element={<Store/>} />
          <Route path="/profiles" element={<Products/>} />
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
