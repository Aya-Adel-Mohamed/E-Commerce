import React from "react";
import Navbar from "../Navbar/Navbar";

import { Outlet } from "react-router-dom";

export default function MainLayout({ userData, logOut, userCart }){
    return(
     <>
     <Navbar userData = { userData } logOut = {logOut} userCart={userCart}/>
     <Outlet></Outlet>

     </>
    )
}