import React, { useState, useEffect } from 'react';
import './details.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams,useSearchParams,useNavigate } from 'react-router-dom';
import Header from '../Header';



const base_url = "https://amazonapi-r8s2.onrender.com";

const DetailDisplay = () => {
    let navigate = useNavigate();
    let [SearchParams] = useSearchParams();
    let [prodDetails, setprodDetails] = useState();
    let [productid] = useState(sessionStorage.getItem('productid'));


    let productType_id = SearchParams.getAll('productType_id');

    const restDetail = async () => {

        const rdata = await axios.get(`${base_url}/details/${productType_id}`);
        setprodDetails(rdata.data[0])
    }

    useEffect(() => {

        restDetail()


    }, [])

    const proceed =()=>{
   navigate(`/placeOrder/${prodDetails.content}`)

    }


    const renderDetails = () => {

        if (prodDetails) {
            return (
                <>
                    
                    <div class="product-div">
                        <div class="product-div-left">
                            <div class="img-container">
                                <img src={prodDetails.image} alt={prodDetails.content} />
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
                            

                            <button style={{ marginRight: '6px', borderRadius: '5px' }}>{prodDetails.Off}</button>
                            <button style={{borderRadius: '5px'}}>{prodDetails.Deal}</button>
                            <br/>
                            <h4 style={{marginTop: '12px'}}>{prodDetails.product_name}</h4>
                            <p>Brand:{prodDetails.Brand}</p>

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
                                <button type="button" class="buy-now-btn"><i class="fas fa-wallet"></i>buy now</button>
                            </div>
                            <div style={{padding: '15px'}}>
                            <Link to={`/listing/${productid}`}><button style={{marginLeft: '-12px', borderRadius: '12px', backgroundColor: '#565679', padding: '15px 23px'}}>Back</button></Link>
                            <button style={{marginLeft: '10px', borderRadius: '12px', backgroundColor: 'rgb(19, 19, 49)', padding: '15px'}} onClick={proceed}>Proceed</button>
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
            <div class="main-wrapper">
                <div class="container" style={{ marginBottom: '-890px' }}>
                    {renderDetails()}

                </div>
            </div>

            {/* marginTop: '-58px' */}

        </>
    )
}


export default DetailDisplay;