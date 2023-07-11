import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import { delCart } from '../../redux/action'


const Cart = () => {
    var state = useSelector((state) => state.handleCart)
    state = JSON.parse(localStorage.getItem('cart'))
    let localFilter;

    const dispatch = useDispatch()
    const handleClose = (item) => {
        dispatch(delCart(item))
 
        localFilter = JSON.parse(localStorage.getItem('cart')).filter(users => users.id !== item.id);
    
        localStorage.setItem('cart', JSON.stringify(localFilter))
   }
   
    const cartItems = (cartItem) => {
        return (
 <>        
            <div className="px-lg-4 mt" key={cartItem.id}>
                <div className="container p-4 border-card">
                    <button onClick={() => handleClose(cartItem)} className='float-end btn btn-outline-color mt-3'><i className="fa-solid fa-trash-can fs-4"></i></button>
                    <div className="row align-items-center">
                        <div className="col-md-2 ">
                            <img src={cartItem.image} alt={cartItem.title} className='w-100' />
                        </div>
                        <div className="offset-lg-1 col-md-8">
                            <h5 className='mt-lg-0 mt-4'>{cartItem.category}</h5>
                            <h3 className='color fw-bold'>{cartItem.title}</h3>
                            <p className="lead "><span className='fw-bold'>Price: </span>${cartItem.price}</p>
                         <p className='fw-bold lead'>Quantity: <input type="text" className='mx-2 border text-center w-8' value={cartItem.qty} /></p>
                        <p className='lead' > <span className='fw-bold lead'>Total Price: </span> ${cartItem.price * cartItem.qty}</p>
                        </div>
                    </div>
                </div>
            </div>
 </>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 bg-cart rounded-3 py-0 mt py-lg-2">
                <div className="container py-0 mt-lg-5 mt-0">
                    <div className="row ">
                       
                        <h1 className='fw-bold text-center'>Your Cart is Empty</h1>
              <Link to='/' className='text-center btn-bg width-25 mx-auto py-2 rounded-2 text-white px-3 text-decoration-none mt-3'>GO TO SHOPPING</Link>
                    </div>
                </div>
            </div>
        );
    }

    const button = () => {
        return (
            <div className="container mt-lg-5 mt-0">
                <div className="row">
                    <Link to="/checkout" className="btn btn-outline-color mb-5 w-50 mx-auto">Proceed To checkout</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart