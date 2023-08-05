import React from 'react'
import Products from '../Products/Products'
import { useSelector } from 'react-redux'
import Footer from '../Footer/Footer.jsx'
import jewelery from '../../assets/images/3.jpg';
import men from '../../assets/images/1.jpg';
import women from '../../assets/images/2.jpg';
import collection from '../../assets/images/collection.jpg'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export default function Home() {

  var state = useSelector((state) => state.handleCart)
  state = localStorage.length;



  return (
    <>
    <Helmet>
      <title>E-Commerce | Home Page</title>
    </Helmet>
    <ScrollToTop/>
      <div className="hero">
        <div className="content">
          <div className="content-title">
            <h1 className='fw-bolder'>NEW SEASON ARRIVALS</h1>
            <p className='lead'>CHECK OUT ALL THE TRENDS</p>
            <Link to='/products'>
              <button className='btn btn-bg' >
                Shop Now
              </button></Link>
          </div>
        </div>

      </div>
      <div className="container mt-5">
        <div className="row pt-5 mt-5 gy-4">
          <div className="col-md-4 ">
            <Link to='/women'>
              <div className="imgcontent">
                <img src={women} alt="" className='w-100' />
                <div className="layer">
                  <div className="layer-content d-flex justify-content-center align-items-center h-100">
                    <p className='fw-bold fs-3  textAnimate'>Women's Clothing</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to='men'>
              <div className="imgcontent">
                <img src={men} alt="" className='w-100' />
                <div className="layer">
                  <div className="layer-content d-flex justify-content-center align-items-center h-100">
                    <p className='fw-bold fs-3  textAnimate'>Men's Clothing</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to='jewelery'>
              <div className="imgcontent">
                <img src={jewelery} alt="" className='w-100' />
                <div className="layer">
                  <div className="layer-content d-flex justify-content-center align-items-center h-100">
                    <p className='fw-bold fs-3  textAnimate'>Jewelery</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Products />
      <div className="container ">
        <div className="imgHome pb-5 position-relative">
          <img src={collection} alt="" className='w-100' />

        </div>

      </div>
      <Footer />
    </>
  )
}
