
import './App.css';
import {RouterProvider, createHashRouter, Navigate} from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout.jsx';
import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import { useSelector } from 'react-redux';
import Checkout from './components/Checkout/Checkout';
import Profile from './components/Profile/Profile';
import WomenProduct from './components/WomenProduct/WomenProduct';
import MenProduct from './components/MenProduct/MenProduct';
import JeweleryProduct from './components/JeweleryProduct/JeweleryProduct';


function App() {
  
  let [userData,setUserData]= useState(null);
 

  function saveUser(){
   let token = localStorage.getItem("token");

   let decoded=jwt_decode(token);
   setUserData(decoded);

  }

  useEffect(()=>{
    if(localStorage.getItem("token") ){
      saveUser();
   
    }
  },[]);

  function ProductedRoute(props){
    if(localStorage.getItem('token') ){
      return props.children
    }else{
      return <Navigate to='/login'/>
    }
  }
  
  var state = useSelector((state)=> state.handleCart)
  function logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('cart');
    state.length =0

  state = localStorage.setItem('cart', JSON.stringify([]))
    setUserData(null);
    return <Navigate to='/login'/>
  }
  const routers = createHashRouter([
    {path:"/", element: <MainLayout userData={userData} logOut={logOut} />,children:[
      {index:true,element:<Home />},
      {path:'register',element:<Register/>},
      {path:'login',element:<Login saveUser={saveUser}/>},
      {path:'/products',element:<Products/>},
      {path:'/products/:id',element:<Product/>},
      {path:'/cart',element:<Cart saveUser={saveUser} />},
      {path:'/checkout',element:<ProductedRoute><Checkout /></ProductedRoute>},
      {path:'/profile',element:<ProductedRoute><Profile userData={userData}/></ProductedRoute>},
      {path:'/women',element:<WomenProduct/>},
      {path:'/men',element:<MenProduct/>},
      {path:'/jewelery',element:<JeweleryProduct/>},


      {path:'*',element:<ProductedRoute><NotFound/></ProductedRoute>}
    ]}
  ])
  return (
<>
<RouterProvider router={routers}></RouterProvider>
</>
  );
} 
export default App;
