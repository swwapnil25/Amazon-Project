import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import Home from './Home/Home';
import Main from './Main';
import Listing from './listing/listinglogic';
import DetailDisplay from './Details/detailsLogic';
import PlaceOrder from './Orders/PlaceOrder';
import ViewOrder from './Orders/ViewOrder';
import Login from './login/loginComponent';
import Register from './login/registerComponent';
import CouponBanner from './Home/amazon';






const Routing = () =>{

    return(
        <div>
            <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="listing/:productid" element={<Listing/>}/>
                <Route path="details" element={<DetailDisplay/>}/>
                <Route path="placeOrder/:product_name" element={<PlaceOrder/>}/>
                <Route path="ViewOrder" element={<ViewOrder/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="amazon" element={<CouponBanner/>}/>
                {/* <Route path="Full" element={<Full/>}/> */}

                
            
                <Route/>

            </Routes>
        

            <Footer/>
            
            </BrowserRouter>
        </div>
    )
}

export default Routing