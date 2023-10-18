import React, { useState, useEffect } from 'react';
import './details.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../Header';
import { useDarkMode } from '../Home/DarkModeContext';
import Root from '../Home/Root';

const base_url = "https://amazonapi-r8s2.onrender.com";

const DetailDisplay = () => {
  const { isDarkMode } = useDarkMode();
  let navigate = useNavigate();
  let [SearchParams] = useSearchParams();
  let [prodDetails, setProdDetails] = useState();
  let [productid] = useState(sessionStorage.getItem('productid'));
  
  let productType_id = SearchParams.getAll('productType_id');
  
  const fetchData = async () => {
    try {
      const [details, details1, details2, details3, details4] = await Promise.all([
        axios.get(`${base_url}/details/${productType_id}`),
        axios.get(`${base_url}/details1/${productType_id}`),
        axios.get(`${base_url}/details2/${productType_id}`),
        axios.get(`${base_url}/details3/${productType_id}`),
        axios.get(`${base_url}/details4/${productType_id}`)
      ]);

     
      const ProductData = {
        ...details.data[0],
        ...details1.data[0],
        ...details2.data[0],
        ...details3.data[0],
        ...details4.data[0]
      };

      setProdDetails(ProductData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.style.backgroundColor = isDarkMode ? "rgb(37 36 36)" : "#e0d7d7";
    }
  }, [isDarkMode]);

  const proceed = () => {
    navigate(`/placeOrder/${prodDetails.content}`);
  };




    const renderDetails = () => {

        if (prodDetails) {
            return (
                <>
                     
                    <div class={`product-div  ${isDarkMode ? 'dark-theme' : ''}` }>
                        <div class="product-div-left">
                        <div className="img-container" style={{ width: '300px', height: '267px' }}>
                        <img src={prodDetails.image} alt={prodDetails.content} style={{ objectFit: 'contain', width: '165%', height: '100%' }} />
                            </div>
                            <div class="hover-container">
                                <div><img src={prodDetails.image} /></div>
                                <div><img src={prodDetails.image} /></div>
                                <div><img src={prodDetails.image} /></div>
                                <div><img src={prodDetails.image} /></div>
                                <div><img src={prodDetails.image} /></div>
                            </div>
                        </div>
                        <div class="product-div-right">
                            <span class="product-name">{prodDetails.content}</span>
                            <span class="product-price">Rs.{prodDetails.price}</span>
                            

                            <button style={{ marginRight: '6px', borderRadius: '5px', marginTop:'12px'}}>{prodDetails.Off}</button>
                            <button style={{borderRadius: '5px'}}>{prodDetails.Deal}</button>
                            <br/>
                            <h4 style={{marginTop: '22px'}}>{prodDetails.product_name}</h4>
                            <p>Brand: {prodDetails.Brand}</p>

                            <div class="product-rating">
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star-half-alt"></i></span>
                                <span>(350 ratings)</span>
                            </div>
                            <div class="btn-groups">
                                <button type="button" class="add-cart-btn"><i class="fas fa-shopping-cart"></i>add to cart</button>
                                <button type="button" class="buy-now-btn"  onClick={proceed}><i class="fas fa-wallet"></i>buy now</button>
                            </div>
                            <div style={{padding: '15px'}}>
                            <Link to={`/listing/${productid}`}><button style={{marginLeft: '-12px', borderRadius: '12px', backgroundColor: '#565679', padding: '15px 23px', marginTop: '7px'}}>Back</button></Link>
                            {/* <button style={{marginLeft: '10px', borderRadius: '12px', backgroundColor: 'rgb(19, 19, 49)', padding: '15px'}}>Proceed</button> */}
                            {/* <Link to="/">Home</Link> */}
                        </div>
                        </div>
                        
                        
                    </div>
                    


                </>

            )
        }



    }

    return (

        <>
        <Header/>
            <div class={`main-wrapper  ${isDarkMode ? 'dark-theme' : ''}` }>
                <div class="container" style={{ marginBottom: '-890px' }}>
                    {renderDetails()}

                </div>
            </div>

            {/* marginTop: '-58px' */}

        </>
    )
}


export default DetailDisplay;