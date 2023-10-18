import React, { useState, useEffect } from 'react';
import './listing.css';
// import styles from "./listing.module.css"
import { useParams } from 'react-router-dom';
import ListingDisplay from './listingDisplay';
import axios from 'axios';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';
import Header from '../Header';
import Footer from '../Footer';
import { useDarkMode } from '../Home/DarkModeContext';
import Root from '../Home/Root';



const base_url = "https://amazonapi-r8s2.onrender.com";


const Listing = () => {

    let params = useParams();
    const { isDarkMode } = useDarkMode();
    const [restList, setRestList] = useState();
    let productid = params.productid;

    useEffect(() => {

        sessionStorage.setItem('productid',productid)
        axios.get(`${base_url}/product1?productid=${productid}`)
            .then((res) => {
                setRestList(res.data)

            })

    }, [])


    const setDataPerFilter=(data)=>{
        setRestList(data)
    }


    useEffect(() => {
        const rootElement = document.getElementById("root");
        if (rootElement) {
          rootElement.style.backgroundColor = isDarkMode ? "rgb(37 36 36)" : "#e0d7d7";
        }
      }, [isDarkMode]);


    return (
        <>
           <Header/>
            <div>
            {/* <div className="container" style={{ marginTop: "460px", marginLeft: "-7px" }}> */}
                <div class={`small ${isDarkMode ? 'dark-theme' : ''}`} style={{marginLeft: '6px'}} >
                    <div class="filter-options">
                        <div style={{marginLeft: "113px", fontSize: "23px",marginTop: "-20px"}}class="filter-heading" >Filters</div>

                        <CuisineFilter productid={productid}
                            restPerCuisine={(data) => { setDataPerFilter(data) }} />
                        <CostFilter productid={productid}
                            restPerCost={(data) => { setDataPerFilter(data) }} />

                    </div>
                </div>

            <ListingDisplay listData={restList} />
            </div>
              

        </>
    )
}

export default Listing;