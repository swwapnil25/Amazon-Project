import React from "react";
import './Container.css';
import { useDarkMode } from "./DarkModeContext";



const Container = () =>{

    const { isDarkMode } = useDarkMode();

    return(

        <>
        
           <div className={`main ${isDarkMode ? 'dark-theme' : ''}`}>
				<img src="https://i.ibb.co/7R35KbV/Background.png "/>
			</div>
			<div class="card-product-container container" style={{maxWidth: "1300px", marginTop: "26px"}}>
            <div class={`card-product ${isDarkMode ? 'dark-theme' : ''}` }>
                <h2>Up to 60% off | Styles for Men</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/H4PRBDt/MF-1-186-116-SY116-CB636110853.jpg" />
                        <p>clothing</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/qNDJfLm/MF-2-186-116-SY116-CB636110853.jpg" />
                        <p>Footwear</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/19YxT7v/MF-3-186-116-SY116-CB636110853.jpg" />
                        <p>Watches</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/QNk9HtN/MF-4-186-116-SY116-CB636110853.jpg" />
                        <p>Bags & luggage</p>
                    </div>
                </div>
                <button class="card-product-btn">see more</button>
            </div>
            <div class={`card-product ${isDarkMode ? 'dark-theme' : ''}` }>
                <h2>Redefine your living room</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_03_low._SY116_CB605507312_.jpg" />
                        <p>Sofa cum beds</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_04_low._SY116_CB605507312_.jpg" />
                        <p>Office chairs & study</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_01_low._SY116_CB605507312_.jpg" />
                        <p>Bean bags</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_02_low._SY116_CB605507312_.jpg" />
                        <p>Explore all</p>
                    </div>
                </div>
                <button class="card-product-btn">see more</button>
            </div>
            <div class={`card-product ${isDarkMode ? 'dark-theme' : ''}` }>
                <h2>Great Freedom Sale | Brands in focus</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/5cg3Gwd/QC-adapts-186x116-4-SY116-CB600489960.jpg" />
                        <p>Wipes & more..</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/MS0dYyv/QC-adapts-186x116-3-SY116-CB600489960.jpg" />
                        <p>Batharoom Assisorie</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/NWhwPBh/QC-adapts-186x116-7-SY116-CB600489960.jpg" />
                        <p>Hammers & more..</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/44vwmGc/QC-adapts-186x116-5-SY116-CB600489960.jpg" />
                        <p>Plugs & more..</p>
                    </div>
                </div>
                <button class="card-product-btn">see more</button>
            </div>
            <div class={`card-product ${isDarkMode ? 'dark-theme' : ''}` }>
                <h2>Automotive essentials | Up to 60% off</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/vh8yVfY/Glasscare1-X-SY116-CB410830553.jpg" />
                        <p>Cleaning Assisorie</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/gy4bK7t/Rim-tyrecare1x-SY116-CB410830552.jpg" />
                        <p>Tyre & rim care</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/BcdD6MJ/Vega-helmet-186x116-SY116-CB405090404.jpg" />
                        <p>Helmets</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/zNpVW97/Vaccum1x-SY116-CB410830552.jpg" />
                        <p>Vaccum Cleaner</p>
                    </div>
                </div>
                <button class="card-product-btn">see more</button>
            </div>
        </div>

        <div class="card-product-container container productBackgraound" style={{maxWidth: "1300px",marginTop: "49px"}}>
        <div class={`card-product ${isDarkMode ? 'dark-theme' : ''}` }>
                <h2>Top rated, premium quality | Amazon Brands</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_1._SY116_CB606110532_.jpg" />
                        <p>Home Products</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_5._SY116_CB606110532_.jpg" />
                        <p>Furniture</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg" />
                        <p>Daily essentials</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_8._SY116_CB606110532_.jpg" />
                        <p>Fashion</p>
                    </div>
                </div>
                <button class="card-product-btn">see more</button>
            </div>
            <div class={`card-product ${isDarkMode ? 'dark-theme' : ''}` }>
                <h2>Up to 60% off | Fashion as unique as you are</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/rQPdvFb/Mi-186-X116-SY116-CB598912920.jpg" />
                        <p>Xiamoni TVs</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/V361QLq/TCl-new-SY116-CB598954819.jpg" />
                        <p>TCL TVs</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/HVN4ZSb/Samsung-new-SY116-CB598954819.jpg" />
                        <p>Samsung TVs</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/gDY5s3h/Hisense-new-SY116-CB598954819.jpg" />
                        <p>Hisense TVs</p>
                    </div>
                </div>
                <button class="card-product-btn">see more</button>
            </div>
            <div class={`card-product ${isDarkMode ? 'dark-theme' : ''}` }>
                <h2>Up to 60% off | Top picks</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/VJ6Kb9f/Shoes-low-res-SY116-CB600335802.png" />
                        <p>Sports Shoes</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/bsqrS54/PCQC-Jewl-low-res-SY116-CB600800765.png" />
                        <p>Jewellery</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/168VVW4/PCQC-Watches-low-res-SY116-CB600800683.jpg" />
                        <p>smartwatches</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/7YkN4CT/PCQC-Lugg-low-res-SY116-CB600800315.png" />
                        <p>wallets & luggage</p>
                    </div>
                </div>
                <button class="card-product-btn">see more</button>
            </div>
            <div class={`card-product ${isDarkMode ? 'dark-theme' : ''}` }>
                <h2>Electronics devices for home office</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/9HqPSWB/D21343116-IN-CEPC-BAU-GW-graphics-March21-dbqc0-5x-5-SY116-CB655805757.jpg" />
                        <p>Smart Watches</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/vjLg5sL/D21343116-IN-CEPC-BAU-GW-graphics-March21-dbqc0-5x-6-SY116-CB655805757.jpg" />
                        <p>Tablets</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/pbJfmyf/D21343116-IN-CEPC-BAU-GW-graphics-March21-dbqc0-5x-7-SY116-CB655805757.jpg" />
                        <p>Laptops</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://i.ibb.co/Bq3BPqS/D21343116-IN-CEPC-BAU-GW-graphics-March21-dbqc0-5x-8-SY116-CB655805757.jpg" />
                        <p>Monitors</p>
                    </div>
                </div>
                <button class="card-product-btn">see more</button>
            </div>
        </div>
        </>
    )
}

export default Container;