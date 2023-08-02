import React,{useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addCart ,delCart} from '../../redux/action';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

export default function Product() {
    var state = useSelector((state)=> state.handleCart)
    state = localStorage.setItem('cart', JSON.stringify(state))
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading,setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product,e) =>{
e.preventDefault();
        dispatch(addCart(product,e));
        Swal.fire(
            'Succes!',
            'Your product has been added.',
            'success'
        )
    }
    const removeProduct = (product) => {
        dispatch(delCart(product))
        Swal.fire(
            'Deleted!',
            'Your Quantity has been decreased.',
            'success'
        )
   
   }
    useEffect(() => {
        const getProduct = async () =>{
            setLoading(true);
            const response = await fetch (`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
       
     getProduct();
   
    }, [])
    

    const ShowProduct = () =>{
        return(
            <>
            <div className="col-lg-4 col-md-6" key={product.id}>
                <img src={product.image} alt={product.title} height='400px' className='w-100'/>
            </div>
            <div className="col-lg-8 col-md-6">
                <h4 className="text-uppercase text-black-50">
                    {product.category}
                </h4>
                <h1 className='fw-bolder'>{product.title}</h1>
                <p className='lead fw-bolder'>Rating:&nbsp; {product.rating && product.rating.rate}
                <i className='fa fa-star ms-1 text-warning'></i>
                </p>
               <h3 className='fw-bold my-4 color'>
                $ {product.price}
               </h3>
               <p className="lead mb-5">
                {product.description}
               </p>
             
              <div className="d-flex flex-wrap">
              <button className='btn btn-color py-2 mb-3' onClick={(e)=> addProduct(product,e)}><i className="fa-solid fa-cart-plus"></i></button>
               <button className='btn btn-outline-color ms-2 py-2 mb-3' onClick={(e)=> removeProduct(product,e)}>Decrease Quantity <i className="fa-solid fa-circle-minus"></i></button>

               <Link className='btn btn-color ms-2 py-2 mb-3' to='/cart' >Go to Cart</Link>
              </div>

            </div>
            </>
        )
    }
  return (
    <>
    <div className="container mt-l">
        <div className="row justify-content-center align-items-center vh-100 gx-lg-5">
            {loading ? <Loading />:<ShowProduct/>}
        </div>
    </div>
    </>
  )
}
