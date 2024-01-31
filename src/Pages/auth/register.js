import React from 'react'
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Registeration() {
const value ={email:"",   password:""}

// const notify = () => toast("Wow so easy!");

const [state,setState]=useState(value)
const handelChange=(e)=>{
    setState({...state,[e.target.name]: e.target.value})
}
const handelSubmite=(e)=>{
    e.preventDefault();
console.log(state)
const {email,password}=state
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('user', user)
    // ...
    toast("user Register succsesfully")  
})
  .catch((error) => {
    console.log('error', error)
    toast("user not register")
    // ..
  });
}

  return (
    <>
    <div className="container">
        <div className="col">
            <div className="row">
            <form onSubmit={handelSubmite}>
            <div className="card p-5 w-50 ">
                <h2 className='card-tittel text-center'>Registeration Page</h2>
                
                <div className="row">
                    <div className="col">
                 <input type="text" name="email" id="email" onChange={handelChange} placeholder='enter your name' className='form-control mb-2' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="password" name="password" id="password" onChange={handelChange} placeholder='enter your password' className='form-control mb-2' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className=' form-control btn btn-success'>Register</button>
                    <ToastContainer/>
                    </div>
                </div>
            </div>
            </form>
            </div>
          
        </div>
    </div>
    </>
  )
}
