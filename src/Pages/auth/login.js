// import React from 'react'
// import { useState,useEffect } from 'react';
// import {  signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
// import { auth } from '../../Config/firebase';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Login() {
// const value ={
//     email:"",
//     password:""
// }
// const [state,setState]=useState(value)


// useEffect(()=>{
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//           // User is signed in, see docs for a list of available properties
//           // https://firebase.google.com/docs/reference/js/auth.user
//           const uid = user.uid;
//           // ...
//         } else {
//           // User is signed out
//           // ...
//         }
//       });
// },[])

// const handelChange=(e)=>{
//     setState({...state,[e.target.name]: e.target.value})
// }
// const handelSubmite=(e)=>{
//     e.preventDefault();
// console.log(state)
// const {email,password}=state
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//     toast("user login successfully")
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     toast("register yourself firstly")
//   });
// }

//   return (
//     <>
//     <div className="container">
//         <div className="col">
//             <div className="row">
//             <div className="card p-5 w-50 ">
//                 <h2 className='card-tittel text-center'>Login Page</h2>
//                 <div className="row">
//                     <div className="col">
//                  <input type="text" name="email" id="email" onChange={handelChange} placeholder='enter your name' className='form-control mb-2' />
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col">
//                         <input type="password" name="password" id="password" onChange={handelChange} placeholder='enter your password' className='form-control mb-2' />
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col">
//                         <button className=' form-control btn btn-success' onClick={handelSubmite}>Login now</button>
//                    <ToastContainer/>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }