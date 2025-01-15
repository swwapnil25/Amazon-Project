import React, { useState, useEffect } from "react";
import './Header.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useDarkMode } from "./Home/DarkModeContext";

// import Styles from './Header.module.css'

// import { IconName } from "react-icons/fa6";
//  import FontAwesome from 'react-fontawesome'
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//  import { faHouse } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {

    const [input, setInput] = useState("");
    const [useData, setuserData] = useState();
    // const [isDarkMode, setIsDarkMode] = useState(false);
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
    
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);

          const API_KEY = 'e16a49bc212c2317cde408109d67c894';
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`;

          axios
            .get(url)
            .then((response) => {
              setWeatherData(response.data.main.temp);
            })
            .catch((error) => {
              console.error('Error fetching weather data:', error);
            });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

    
    
   

    // const toggleDarkMode = () => {
    //     setIsDarkMode(!isDarkMode);
    //   };


    // const fetchData = (value) => {

    //     fetch("https://amazonapi-r8s2.onrender.com/products").then((response) => response.json())
    //         .then((json) => {
    //             const results = json.filter((user) => {
    //                 return (
    //                     value &&
    //                     user &&
    //                     user.name &&
    //                     user.name.toLowerCase().includes(value)
    //                 );
    //             });
    //             console.log(results)
    //         });

    // };

    // const handlechange = (value) => {
    //     setInput(value)
    //     fetchData(value)
    // };

    return (

        <>

           
            <div id="main">
            <nav className={`fnav ${isDarkMode ? 'dark-theme' : ''}`}>
                    <img src="https://i.ibb.co/ZYcfBML/amazon.png" />
                    <div className="nav">

                        <div className="loca">
                            <i className="fa-solid fa-location-dot icon-location"></i>
                            <p>Select your address</p>
                        </div>
                        <div className="search-container">
                            <select className="search-select">
                                <option>All</option>
                            </select>
                            <input type="text" className="search-input" placeholder="Search Amazon.in"  />
                            {/* value={input} onChange={(e) => handlechange(e.target.value)}  */}
                            

                            <div className="search-icon">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                        <p>EN</p>
                        <p>Account & list</p>
                        {/* <Link to="register"><span><p>Sign Up</p></span></Link>
                        <Link to="login"><span><p>Login</p></span></Link> */}
                        <p>Return & order</p>

                        <i className="fa-sharp fa-solid fa-cart-shopping"></i>

                    </div>
                    <br />
                    <br />
                    <hr />
                    <div id="weather-box">
                        <p id="out"></p>
                        <p id="weather">{weatherData}°C</p>
                        <div id="weather-icon">
                            <img src="https://i.ibb.co/Hzf6zcM/01d.png" alt="weather-icon" />
                        </div>
                    </div>
                </nav>
            </div>

            <nav className={`snav ${isDarkMode ? 'dark-theme' : ''}`}>
                <i className="fa-solid fa-bars"></i>
                <p>All</p>
                <p>Fresh</p>
                <p>Sell</p>
                <p>Gift Cards</p>
                <p>Browsing History</p>
                <p>Buy Again</p>
                <p>Baby</p>
                <p>Subscribe & Save</p>
                <p>Gift Ideas</p>
                <div className="head">
                    <h4>Shopping made sasy | Download the app</h4>
                </div>
                <img
        src={isDarkMode ? 'https://i.ibb.co/hH6RZFN/sun.png' : 'https://i.ibb.co/cLwf7Jz/moon.png'}
        alt="Mode Icon"
        id="icon"
        onClick={toggleDarkMode}
      />
            </nav>


            


        </>

    )
}


export default Header;
