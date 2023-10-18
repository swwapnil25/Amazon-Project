import React, { useEffect, useState } from "react";
import "./Coupon.css";

const CouponBanner = () => {
  const [couponVisible, setCouponVisible] = useState(true);

  useEffect(() => {
    const couponElement = document.getElementById("coupon");
    const overlayElement = document.getElementById("overlay");

    if (couponElement && overlayElement) {
      couponElement.style.visibility = "visible";
      couponElement.style.zIndex = "1000";
      overlayElement.style.display = "block";
      overlayElement.style.backdropFilter = "blur(5px)";
    }

    return () => {
      if (couponElement && overlayElement) {
        couponElement.style.visibility = "hidden";
        overlayElement.style.display = "none";
        document.getElementById("root").style.opacity = "1";
      }
    };
  }, []);

  const closeCoupon = () => {
    setCouponVisible(false);
    localStorage.setItem("couponShown", "true");
  };

  if (couponVisible) {
    return (
      <div>
        <div
          id="overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", /* Translucent black */
            zIndex: 999, /* Higher than the coupon banner */
            display: "none" /* Hidden by default */
          }}
        ></div>
        <div id="coupon" style={{ marginTop: "12%" }}>
          <img
            src="https://i.ibb.co/Rb40q3T/Amazon-Coupon.webp"
            alt="Coupon"
          />
          <button
            className="styling"
            onClick={closeCoupon}
            style={{ marginRight: '600px', marginTop: '-10px' }}
          >
            <p style={{ marginTop: "-10px", marginLeft: "-6px" }}>&times;</p>
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CouponBanner;
