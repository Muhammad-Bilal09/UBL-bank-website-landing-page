import React from 'react'
import { Routes,Route } from 'react-router-dom'
// pages
import Login  from "./login"
import Register from "./register"
export default function Index() {
  return (
    
    <>
    {/* <Routes> */}
        {/* <Route path="/" element={<Login />}/> */}
        {/* <Route path="/register" element={<Register />}></Route> */}
    {/* </Routes> */}
    <Login/>
    </>
  )
}
