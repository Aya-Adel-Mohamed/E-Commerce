import React from 'react'
import Products from '../Products/Products'
import { useSelector } from 'react-redux'
import Footer from '../Footer/Footer.jsx'
import women from '../../assets/images/2.jpg';
import jewelery from '../../assets/images/3.jpg';
import men from '../../assets/images/1.jpg';
export default function Home() {
  var state = useSelector((state)=> state.handleCart)
  state = localStorage.length;

  return (
<>
<div className="hero">
    <div className="content">
      <div className="content-title">
      <h1 className='fw-bolder'>NEW SEASON ARRIVALS</h1>
        <p className='lead'>CHECK OUT ALL THE TRENDS</p>
      </div>
    </div>

</div>
<div className="container mt-5">
  <div className="row pt-5 mt-5 gy-4">
<div className="col-md-4 ">
  <div className="imgcontent">
  <img src={women} alt="" className='w-100'/>
  <div className="layer">
    <div className="layer-content d-flex justify-content-center align-items-center h-100">
      <p className='fw-bold fs-3 text-white'>Women's Clothing</p>
    </div>
  </div>
  </div>
</div>
<div className="col-md-4">
  <div className="imgcontent">
  <img src={men} alt="" className='w-100'/>
    <div className="layer">
    <div className="layer-content d-flex justify-content-center align-items-center h-100">
    <p className='fw-bold fs-3 text-white'>Men's Clothing</p>
</div>
  </div>
  </div>
</div>
<div className="col-md-4">
<div className="imgcontent">
<img src={jewelery} alt="" className='w-100'/>
<div className="layer">
<div className="layer-content d-flex justify-content-center align-items-center h-100">
  <p className='fw-bold fs-3 text-white'>Jewelery</p>
</div>
  </div>
</div>
</div>
  </div>
</div>
<Products/>

<Footer/>
</>
  )
}
