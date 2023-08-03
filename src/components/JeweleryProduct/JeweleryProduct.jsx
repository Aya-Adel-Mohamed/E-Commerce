import React, { useState, useEffect } from 'react'
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import jewelleryOne from '../../assets/images/1_2.jpg';
import jewelleryTwo from '../../assets/images/1_3.jpg';
import jewelleryThree from '../../assets/images/4.png';
import { Helmet } from 'react-helmet';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export default function JeweleryProduct() {

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
                console.log(data)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    return (
        <>
        <Helmet>
            <title>E-Commerce | Jewelery</title>
        </Helmet>
        <ScrollToTop/>
            <div className="bg-white product py-5 ">
                <div className="container pt-5">
                    <div className="row justify-content-center pt-3  gap" >
                        <div className="col-12 d-flex flex-wrap justify-content-center imgGap align-items-center" >
                            <h4 className='position-absolute text-2'>jewelery</h4>
                            <div className="col-lg-3">
                                <img src={jewelleryOne} alt="" className='w-100 imgBorder' />
                            </div>
                            <div className=" col-lg-3">
                                <img src={jewelleryTwo} alt="" className='w-100 imgPadding imgBorder' />
                            </div>
                            <div className=" col-lg-3">
                                <img src={jewelleryThree} alt="" className='w-100 imgBorder' />
                            </div>
                        </div>
                        {loading ? <Loading /> : <>
                            {data.filter((x) => x.category === "jewelery").map((product) => {
                                return (
                                    <>
                                        <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                                            <div className="card h-100 text-center pt-4"  >
                                                <Link to={`/products/${product.id}`}><img src={product.image} alt={product.title} className="img-card" height='250px' /></Link>
                                                <div className="card-body text-left d-flex pb-4 align-items-center justify-content-between">
                                                    <div className="card-content pt-3">
                                                        <h5 className="card-title mb-0 fw-bolder">{product.title.substring(0, 12)}....</h5>
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
                        </>}

                    </div>
                </div>
            </div>
        </>
    )
}
