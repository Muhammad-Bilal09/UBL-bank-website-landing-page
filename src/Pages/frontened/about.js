import React from 'react'
import '../../scss/about.scss'
export default function about() {
  return (
    <>
 <div className="container">
        <div className="row">
            <div className="col">
                <h1 className='text-warning text-center '>Contact</h1>
           
                <div className="card w-75 mt-5 " style={{marginLeft:"auto",marginRight:"auto"}}>
                    <h2 className='text-center '>Contact Us</h2>
                    <abbr className='text-center' title="Muhammadbilal0729@gmail.com">Contact Email</abbr>
                    <input type="text"  placeholder='Name' className='form-control mt-2'/>
                    <input type="email" placeholder='Email' className='form-control mt-2' />
                    <textarea name="" id="" cols="30" rows="5" placeholder='Message' className=' mt-2 form-control'></textarea>
                <div className='text-center'>
                <button className='btn btn-primary w-75 mt-3'  >Send Message</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    
    <section className='contact d-flex'>
<div class="container">
    <div class="row">
        <div class="col">
            <div className="card">
            <h4>About ubl</h4>
            <ul>
                <li><a href="#">About us </a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">President Message</a></li>
                <li><a href="#">Board of Directors</a></li>
                <li><a href="#">Rates</a></li>
                <li><a href="#">Media Room</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Speak to UBL</a></li>
            </ul>
        {/* </div> */}
        </div>
        <div class="col">
        <div className="card">
            <h4>Locate Us</h4>
            <ul>
                <li><a href="#">UBL Branch Locator</a></li>
                <li><a href="#">UBL Branch list </a></li>
                <li><a href="#">UBL Saturday Branch List</a></li>
                <li><a href="#">price bond branch</a></li>
                <li><a href="#">biometric through ATMs</a></li>
                <li><a href="#">branch with Ramp Facility</a></li>
            </ul>
            </div>
        </div>
        <div class="col">
        <div className="card">
            <h4>More</h4>
            <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Schedule of charge</a></li>
                <li><a href="#">ConsumerProtection</a></li>
                <li><a href="#">Disclaimer</a></li>
                <li><a href="#">site map</a></li>
                <li><a href="#">Live chat</a></li>
                <li><a href="#">Discount Allience</a></li>
                <li><a href="#">Whistle Blowing</a></li>
                <li><a href="#">Branch Conversion</a></li>
                <li><a href="#">financial service for women</a></li>
                <li><a href="#">FE HelpLine</a></li>
            </ul>
    </div>

</div>
    </div>
             </div>
            <div className='m-5'>
<h4>Home Remittance:</h4>
<input type="search" placeholder='GID/TT No.' />
<button className='btn btn-primary m-1'>Search</button>
<div>
<h4>Select Country:</h4>
   <input type="text" placeholder='enter your country' />
</div>
</div>
 </div>
 </section>
    </>
  )
}
