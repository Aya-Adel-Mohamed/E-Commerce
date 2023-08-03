import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar(props) {
  let { userData, logOut } = props;
  var state = useSelector((state) => state.handleCart )
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-nav fixed-top py-3 navbar-dark bg-dark bg-nav shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand text-white fs-3 px-3" to="/"><i className="fa-solid fa-bag-shopping me-3 logo"></i>LA COLLECTIONS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {userData ? <>
            <li className="nav-item">
                  <Link className="nav-link nav-link-c text-white " to="/"> Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-c text-white " to="/products"> Products</Link>
                </li>
                
                </>:''}
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {userData ? <>  <li className="nav-item me-2">
                <span className="nav-link text-white cursor" onClick={logOut}><i className="fa-solid fa-arrow-right-from-bracket me-2 logo"></i>Logout</span>
              </li>
              <li className="nav-item me-2 position-relative">
                <Link  className="nav-link text-white cursor " to='/cart' id="num"><i className="fa-solid fa-cart-shopping me-2 logo"></i>Cart <span className="cart-number">{state?.length}</span></Link >
              </li><li className="nav-item">
        <Link className="nav-link text-white" to='profile'><i className='me-2 fa-solid fa-user color '></i>{userData.name}</Link>
      </li>
              </> : <>
                <li className="nav-item me-2">
                  <Link className="nav-link text-white " to="login"><i className="fa-solid fa-right-to-bracket me-2 logo"></i> Login</Link>
                </li>
                <li className="nav-item me-2">
                  <Link className="nav-link text-white " to="register"><i className="fa-solid fa-user-plus me-2 logo"></i>Register</Link>
                </li>
                <li className="nav-item me-2 position-relative">
                <Link  className="nav-link text-white cursor" to='/cart' id="num"><i className="fa-solid fa-cart-shopping me-2 logo"></i>Cart <span className="cart-number">{state?.length}</span></Link >
              </li>
              </>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}