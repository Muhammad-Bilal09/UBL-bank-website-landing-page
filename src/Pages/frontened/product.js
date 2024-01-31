import React from 'react'
import img1 from '../../Assets/products/product3.jpg'
import img2 from '../../Assets/products/product2.jpg'
import img3 from '../../Assets/products/product1.jpg'
import img4 from '../../Assets/products/product4.jpeg'
import '../../scss/product.scss'
export default function product() {
  return (
    <>
        <div className="container text-center bg-primary">
        <div className="row">
            <div className="col">
                <h1 className='text-center text-white'>Our Products</h1>
                <p className='text-center mt-5 text-white'>UBL  Banking service is designed to meet the highest expectations of our clients; wherever they may be.</p>
                <div className='productgrid'>
    
    {/* <div className="container"> */}

    {/* 1 */}

 
    {/* <div className="col-sm-6 col-md-4 col-lg-3"> */}
  <div className="card m-2">
  <img src={img1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Mukammal Current Account</h5>
    <p className="card-text">UBL Mukammal Current account offers a range of benefits and free services allowing transactional flexibility to the modern day customer — which makes it all the more unique and attractive to customers.</p>
  </div>
  </div>
{/* </div> */}
{/* 2 */}
{/* <div className="col-sm-6 col-md-4 col-lg-3"> */}
<div className="card m-2">
  <img src={img2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Lite Instalment Plan</h5>
    <p className="card-text">Buy Now Pay Later with UBL Lite Installment Plan for 1000+ products at 0% markup.With the UBL Lite Installment Plan, you can split your purchases to easy & equal monthly installments at participating merchants nationwide.</p>
  </div>
  </div>
{/* </div> */}
{/* 3 */}

<div className="card m-2">
{/* <div className="col-sm-6 col-md-4 col-lg-3"></div> */}
  <img src={img3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Lone CashPlus</h5>
    <p className="card-text">UBL CashPlus is a unique term loan financing product which offers a number of features, options, and flexibility aimed to fulfil your financial needs. It is designed for salaried individuals of companies maintaining payroll relationship with UBL or any other Bank in Pakistan.</p>
  </div>
  </div>
{/* </div> */}
{/* 4 */}
{/* <div className="col-sm-6 col-md-4 col-lg-3"> */}
<div className="card m-2">
  <img src={img4} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Reward Program</h5>
    <p className="card-text">Spend anywhere and get free fuel from PSO outlets nationwide. With UBL Classic Rewards, spend anywhere to avail redeemable reward points and opt for cashback.</p>
  </div>
  </div>
  </div>
</div>
</div>
            </div>

        {/* </div> */}
    </>
  )
}
