import React from "react";
import Search from "./Container";
import QuickSeacrh from "./QuickSearch";
import QuickSeacrh1 from "./QuickSearch1";
// import CouponBanner from "./amazon";
import Header from '../Header';
import WeatherApp from "./WeatherApp";





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
        {/* <CouponBanner/> */}

        </>
    )
}

export default Home;