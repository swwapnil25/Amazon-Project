import React from "react";
import Search from "./Container";
import QuickSeacrh from "./QuickSearch";
import QuickSeacrh1 from "./QuickSearch1";
import CouponBanner from "./Coupon";
import Header from '../Header';
// import WeatherApp from "./WeatherApp";
import WeatherComponent from './WeatherComponent';
// import { DarkModeContext } from "./DarkModeContext";
import App from "./Root";







const Home = () =>{

    return(

        <>
         {/* <div className="App"> 
      <WeatherApp />
     </div>  */}
     
        <Header/>
        <Search/>
        <QuickSeacrh/>
        <QuickSeacrh1/>
        <CouponBanner/>
        <App/>
        {/* <DarkModeContext/> */}
        
        
        {/* <WeatherComponent /> */}
        {/* <Weather/> */}

        
        

        </>
    )
}

export default Home;