import React from 'react'
import { Navigate, Route,Routes } from 'react-router-dom'
import Frontened from '../Pages/frontened'
import Dashboard from '../Components/Dashboard'
// import PrivateRouting from '../Components/privateRouting'
import Login from '../Pages/auth/login'
import { useAuthContext } from '../context/AuthContext'
export default function CustomRoutes() {
    // const {isAuthenticated}=useAuthContext
    return (
   
    <Routes>
     <Route path="/*" element={<Frontened/>} />
     {/* <Route path="/login" element={<Login/>} /> */}
     {/* <Route path="/dashboard" element={<Dashboard/>} /> */}

     {/* <Route path="/login" element={!isAuthenticated?<Login/>: <Navigate to="/" />}/> */}
     {/* <Route path="/dashboard" element={<PrivateRouting component={<Dashboard/>}/>}/> */}
    </Routes>
  )
}
