import React from 'react'
import '../../scss/_home.scss'
import bgvideo from '../../Assets/istockphoto-631545456-640_adpp_is.mp4'
export default function home() {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className='home'>
              <h1 className='fs-1 text-dark'>Open a Digital Bank Account of Your Choice With Pakistan's </h1>
                <h2 className='text-primary'>Best Digital Bank</h2>
                 </div>
             <div className='homegrid'>
            <div className="card m-2">
              <div className="card-body">
              <i className="fa-solid fa-building-columns fs-1"></i>
                <h5 className="card-title">UBL Asaan Digital Account</h5>
              </div>
            </div>
            <div className="card  m-2">
              <div className="card-body">
              <i className="fa-solid fa-building-columns fs-1"></i>
                <h5 className="card-title">UBL Roshan Digital Account</h5>
              </div>
            </div>
            <div className="card m-2">
              <div className="card-body">
              <i className="fa-solid fa-building-columns fs-1"></i>
                <h5 className="card-title">UBL Tazraftar Asaan Digital Account</h5>
              </div>
            </div>
      
           <div className="card m-2">
              <div className="card-body">
              <i className="fa-solid fa-money-check-dollar fs-1"></i>
                <h5 className="card-title">UBL Frelancer Account</h5>
              </div>
            </div>
            <div className="card m-2">
              <div className="card-body">
              <i class="fa-solid fa-user fs-1"></i>
                <h5 className="card-title">UBL Urooj Account</h5>
              </div>
            </div>
          </div>
        
        <div>
        <button className='btn btn-primary'>Apply now<i className="fa-solid fa-arrow-right m-2"></i></button>
        </div>
        <div>
        <u className='text-primary mt-5'>Resume Application</u>
        </div>
            </div>
        </div>
    </div>
    </>
  )
}
