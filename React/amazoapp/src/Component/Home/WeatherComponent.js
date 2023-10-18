// import React, { useState, useEffect } from 'react';

// const WeatherComponent = () => {
//   const [weatherLocation, setWeatherLocation] = useState('');
//   const [permissionDenied, setPermissionDenied] = useState(false);

//   useEffect(() => {
//     // Function to fetch weather data and update the weather location state
//     const fetchWeatherData = async (latitude, longitude) => {
//       try {
//         const response = await fetch(
//           `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=1&appid={your_api_key}`
//         );
//         const data = await response.json();
//         const location = data.city.name;
//         setWeatherLocation(location);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };

//     // Ask for location permission
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const latitude = position.coords.latitude;
//           const longitude = position.coords.longitude;
//           fetchWeatherData(latitude, longitude);
//         },
//         (error) => {
//           console.error('Error getting location:', error);
//           setPermissionDenied(true);
//         }
//       );
//     } else {
//       console.log('Geolocation is not available in this browser.');
//     }
//   }, []);

//   return (
//     <div id="weather-box">
//                         <p id="out"></p>
//                         <p id="weather">{weatherLocation}</p>
//                         <div id="weather-icon">
//                             <img  src="https://i.ibb.co/Hzf6zcM/01d.png" alt="weather-icon" />
//                         </div>
//                     </div>
//   );
 
// };

// export default WeatherComponent;
