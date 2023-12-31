import React, { useState, useEffect } from 'react'
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollToTop from '../ScrollToTop/ScrollToTop.jsx';


export default function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json());
                setLoading(false)
            }
            return () => {
                componentMounted = false;
            }
        }

        getProducts();
    }, [])

    const filterProduct = (cat) =>{
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList)
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="list mb-5 d-flex flex-wrap justify-content-center pt-5">
                    <span className='item mb-3'onClick={()=>setFilter(data)}>All</span>
                    <span className='item mb-3'onClick={()=>filterProduct("men's clothing")}>Men's Clothing</span>
                    <span className='item mb-3'onClick={()=>filterProduct("women's clothing")}>Women's Clothing</span>

                    <span className='item mb-3'onClick={()=>filterProduct("jewelery")}>Jewelery</span>
                    <span className='item mb-3'onClick={()=>filterProduct("electronics")}>Electronic</span>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                                <div className="card h-100 text-center pt-4"  >
                                <Link to={`/products/${product.id}`}><img src={product.image} alt={product.title} className="img-card" height='250px' /></Link>
                                        <div className="card-body text-left d-flex pb-4 align-items-center justify-content-between">
                                          <div className="card-content pt-3">
                                          <h5 className="card-title mb-0 fw-bolder">{product.title.substring(0,12)}....</h5>
                                            <p className="card-text">$ {product.price}</p>
                                          </div>
                                          <div className="card-buy pt-3">
                                          <Link to={`/products/${product.id}`}><i className="fa-solid fa-cart-shopping fa-cart-shopping-c fs-4"></i></Link>
                                          </div>
                                        </div>
                                </div>
                            </div>

                        </>
                    )
                })}
            </>
        )
    }
    return (
        <>
        <Helmet>
            <title>E-Commerce | Products Page</title>
        </Helmet>
 <ScrollToTop/>
            <div className="bg-white product py-5 ">
                <div className="container-fluid px-5 pt-3">
                    <div className="row mx-0 mx-md-5 pt-5">
  
                        <div className="col-12 mb-3 pt-5">
                          
                            <h2 className='text-center fw-bolder content-hr py-2'>Latest Products</h2>
       
                        </div>
                    </div>
                   
                </div>
                <div className="container">
                <div className="row justify-content-center pt-3  gap" >
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>
        </>
    )
}
