import React from "react";
import './Footer.css';


const Footer = () => {

    return (

        <>

            <div className="top">

                {/* <!-- <img src="logo.png"> --> */}
                <h3><a href="#">Back To Top</a></h3>
            </div>
            <div className="footer">
                <div className="list">
                    <h2>Get to Know Us</h2><br />
                    <p>About us</p><br />
                    <p>Press Release</p><br />
                    <p>Amazon Science </p><br />

                </div>
                <div className="list">
                    <h2>Connect with Us </h2><br />
                    <p>Facebook</p><br />
                    <p>Instagarm</p><br />
                    <p>Twitter</p><br />

                </div>
                <div className="list">
                    <h2>Make Money With Us</h2><br />
                    <p>Sell On Amazone</p><br />
                    <p>Sell under Amazone Accelerator</p><br />
                    <p>Become on Affliate</p><br />
                    <p>Fulfilment by Amazon</p><br />

                </div>
                <div className="list">
                    <h2>Let Us Help You</h2><br />
                    <p>COVID-19 and Amazon</p><br />
                    <p>Your Account</p><br />
                    <p>Returns Center</p><br />
                    <p>100% Purchase Protection</p><br />
                    <p>Amazon App Download</p><br />

                </div>
            </div>

            
        </>
    )
}

export default Footer;