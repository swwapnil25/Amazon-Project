// import React, { useEffect } from "react";
// import './amazon.css';

// const CouponBanner = () => {
//   const loadCoupon = () => {
//     const couponElement = document.getElementById('coupon');
//     if (couponElement) {
//       couponElement.style.visibility = 'visible';
//       couponElement.style.zIndex = '1000'; 
//     }
//     document.getElementById('root').style.opacity = '0.3';
//   };

//   const closeCoupon = () => {
//     const couponElement = document.getElementById('coupon');
//     if (couponElement) {
//       couponElement.style.visibility = 'hidden';
//     }
//     document.getElementById('root').style.opacity = '1';
//   };

//   useEffect(() => {
//     loadCoupon();
//     return () => closeCoupon();
//   }, []);

//   return (
//     <div id="coupon" style={{marginTop: '12%'}}>
//       <img src="https://i.ibb.co/Rb40q3T/Amazon-Coupon.webp" alt="Coupon" />
//       <button onClick={closeCoupon}>&times;</button>
//     </div>
//   );
// };

// export default CouponBanner;
