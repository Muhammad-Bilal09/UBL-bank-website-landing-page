import React from 'react'
// cards
import card1 from "../../Assets/cards/WhatsApp Image 2023-11-20 at 05.42.50 (2).jpeg"
import card2 from "../../Assets/cards/WhatsApp Image 2023-11-20 at 05.42.50 (1).jpeg"
// import card3 from "../Assets/cards/WhatsApp Image 2023-11-23 at 08.28.20_4a7611ea.jpg"
import card4 from "../../Assets/cards/WhatsApp Image 2023-11-23 at 08.28.19_2760b756.jpg"
export default function services() {
  return (
    <>
    <div className="container text-center">
        <div className="row">
            <div className="col">
                <h1 className='text-center'>Featured Services</h1>
                <p className='text-center mt-5'>With a customer base of over 10 million customers — UBL is at the forefront of the banking and financial services sector in Pakistan.</p>
                <div className='servicesgrid text-center'>
    {/* 1 */}
                <div class="card m-2">
  <img src={card1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Credite Card</h5>
    <p class="card-text">Welcome to the world of UBL Credit Cards, the most exciting and vibrant credit card brand in Pakistan. We offer you a range of innovative and exciting cards that is powered by a security of chip.</p>
  </div>
</div>
{/* 2 */}
<div class="card m-2">
  <img src={card2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Customer Lone</h5>
    <p class="card-text">UBL brings you an array of products specifically tailored to meet your financial needs. From education and marriage expenses for your child, to buying the car or house of your dreams.</p>
  </div>
</div>
{/* 3 */}
{/* <div class="card" style={{width: "30%"}}>
  <img src={card3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Lone CashPlus</h5>
    <p class="card-text">Welcome to the world of UBL Credit Cards, the most exciting and vibrant credit card brand in Pakistan. We offer you a range of innovative and exciting cards.</p>
  </div>
</div> */}
{/* 4 */}
<div class="card m-2">
  <img src={card4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Islamic Finance Chatbot</h5>
    <p class="card-text">Welcome to the world of UBL Credit Cards, the most exciting and vibrant credit card brand in Pakistan. We offer you a range of innovative and exciting cards that is powered by a security of chip.</p>
  </div>
</div>
</div>
            </div>
        </div>
    </div>
    </>
  )
}
