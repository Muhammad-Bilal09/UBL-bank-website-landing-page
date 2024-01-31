import React, { useState } from 'react'
// import { doc,setDoc } from 'firebase/firestore'; 
import {  firestore } from '../../Config/firebase';
import { collection, addDoc } from "firebase/firestore"; 
import "bootstrap/dist/js/bootstrap.bundle"

// flags images
import flag1 from "../../Assets/flags/pakistan.png"
import flag2 from "../../Assets/flags/united-kingdom.png"
import flag3 from "../../Assets/flags/china.png"
import flag4 from "../../Assets/flags/palestine.png"
import flag5 from "../../Assets/flags/turkey.png"
import flag6 from "../../Assets/flags/united-states.png"
// scss
import '../../scss/_header.scss'

import logo from '../../Assets/cards/logo.png'
// pages
// import Login from '../../Pages/auth/login';
// import Dashboard from '../Dashboard/index'

import { Link } from 'react-router-dom';
// const intailvalue= {firstname:"", lastname:"",email:"",password:"",tel:"",age:"", cnic:""}
export default function Index() {
//   const [state , setState]=useState(intailvalue)
//   // const {firstname, lastname,email,password,tel,age, cnic} = state
//   const handelchange=(e)=>{
// setState({...state,[e.target.name]:e.target.value})
//   }
//   const randomid= Math.random().toString(36).slice(2)
//   console.log(randomid)
//   const handelsubmite= async(e)=>{
//     e.preventDefault()

//     try {
//       const docRef = await addDoc(collection(firestore, "users"), {...state,state});
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   }
  return (
    <>
    <div className='position'>
    {/* top header */}
    <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <img src={logo} className='logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-lg-0" style={{marginLeft:"100px"}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Deposit</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Consumer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Insurance</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Signature Banking</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Banking</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">UBL Digital</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Mutual Funds</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Remittanace services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">careers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-message"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-user"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={flag1} width="20" alt="" />
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">
              <img src={flag2} alt="" width="20" /></a></li>
            <li><a className="dropdown-item" href="#">
              <img src={flag3} width="20" alt="" />
              </a></li>
            <li><a className="dropdown-item" href="#">
              <img src={flag4} width="20" alt="" />
              </a></li>
              <li><a className="dropdown-item" href="#">
              <img src={flag5} width="20" alt="" />
              </a></li>
              <li><a className="dropdown-item" href="#">
              <img src={flag6} width="20" alt="" />
              </a></li>
          </ul>
      </li>
      </ul>
    </div>
  </div>
</nav>

{/*second header */}
<div className="second-header">
  <div className="row">
    <div className="col">
    <nav class="navbar  navbar-expand-lg navbar-light bg-light">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    {/* <span class="navbar-toggler-icon"></span> */}
  </button>

  {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
    <ul class="navbar-nav mx-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">speak to UBL</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Customer protection</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Invester Relation</a>
      </li>
      <form class="form-inline my-2 my-lg-0">
      <button type="button" class="btn btn-outline-primary my-sm-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <i className="fa-solid fa-building-columns me-2"></i>Apply for a Bank Account
</button>
      {/* <button class="btn btn-outline-primary my-sm-0" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{marginLeft:"100px"}} type="submit"><i className="fa-solid fa-building-columns me-2"></i>Apply for a Bank Account</button> */}
    </form>
      <li class="nav-item">
        <a class="nav-link" href="#">Internet Banking Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" to="/login">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" to="/dashboard">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Coporate Banking Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">UBL Funds Login</a>
      </li>
    </ul>
  {/* </div> */}
</nav>

    </div>
  </div>
</div>
</div>



{/* <!-- Button trigger modal --> */}
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <h2 className='card-tittel text-center'>Login Page</h2>
                <div className="row">
                    <div className="col">
                 <input type="text"  name="firstname" id="firstname"  placeholder='enter your firstname' className='form-control mb-2' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                 <input type="text" name="lastname"  id="lastname"  placeholder='enter your lastname' className='form-control mb-2' />
                    </div>
                </div>


                <div className="row">
                    <div className="col">
                 <input type="date" name="date"  id="date"  placeholder='enter your date of birth' className='form-control mb-3' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                 <input type="gander" name="gander"  id="lastname"  placeholder='enter your gender' className='form-control mb-3' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                 <input type="text" name="state"  id="state"  placeholder='enter your state name' className='form-control mb-3' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                 <input type="text" name="city"  id="city"  placeholder='enter your city name' className='form-control mb-3' />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                 <input type="text" name="email" id="email"   placeholder='enter your email' className='form-control mb-3' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="password"  name="password" id="password"  placeholder='enter your password' className='form-control mb-3' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="password"  name="password" id="password"  placeholder='Repeat password' className='form-control mb-3' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="tel"  name="tel" id="tel"  placeholder='enter your tel number' lang="en-PK" className='form-control mb-3' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="age"  name="age" id="age"  placeholder='enter your password' className='form-control mb-3' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <input type="text"  name="cnic" data-inputmask="'mask': '99999-9999999-9'" className='form-control'  placeholder="XXXXX-XXXXXXX-X" required="" />
                    </div>
                </div>
      </div>
      {/* <div class="modal-footer"> */}
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Apply now</button>
      </div>
    {/* </div> */}
  </div>
</div>
    </>

)
}
