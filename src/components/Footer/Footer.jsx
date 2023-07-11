import React from 'react'
import imgFooter from '../../assets/images/footerImg.png'

export default function Footer() {
  return (
    <>
    <div className="bg-footer pb-3">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 d-flex align-items-center justify-content-center pt-1">
            <img src={imgFooter} alt="" className='imgw m-auto' />
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <div className="icons">
                <span className='icon-item'><a href="#" className='text-white'><i className="fa-brands fa-facebook"></i></a></span>
                <span className='icon-item'><a href="#" className='text-white'><i className="fa-brands fa-instagram"></i></a></span>
                <span className='icon-item'><a href="#" className='text-white'><i className="fa-brands fa-twitter"></i></a></span>
                <span className='icon-item'><a href="#" className='text-white'><i className="fa-brands fa-pinterest"></i></a></span>
              </div>
           
            </div>
          </div>
          <p className='text-center mt-3 text-white'>Copy Right 2023 <i className="fa-regular fa-copyright"></i> By Aya Adel All Rights Reserved</p>
        </div>
      </div>
    </div>
    </>
  )
}
