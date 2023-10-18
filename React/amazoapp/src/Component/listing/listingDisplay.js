import React from 'react';
import './listingDisplay.css';
import { useDarkMode } from '../Home/DarkModeContext';
import { Link } from 'react-router-dom';



 

const ListingDisplay = (props) => {
    const styles = { color: 'var(--hundred-color)'};
    const { isDarkMode } = useDarkMode();
    const renderData = ({ listData }) => {

        if (listData) {
            if (listData.length > 0) {
                return listData.map((item) => {
                    return (
                        // <div className='item' key={item._id}>
                        
                        
                       
                        
                        
                        
                        <div class="product electronics"  >
                            <Link to={`/details?productType_id=${item.id}`}>
                            <img src={item.image} alt={item.product_name} style={{marginLeft: "24px"}}/>
                            <h3 style={styles} >{item.content}</h3>
                            {/* <p>{item.product_name}</p> */}
                                <p style={{color: '#007185'}}>{item.product_name}</p>

                                <p style={styles}>Rs.{item.price}</p>
                            <button>{item.Off}</button>
                            </Link>

                            
                            {/* <div class="pagination">
                                <a href="#">&laquo;</a>
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <a href="#">6</a>
                                <a href="#">&raquo;</a>

                            </div> */}
                        </div>

                    )
                })
            } else {
                return (
                    <h2>No Data Found</h2>
                )
            }
        } else {
            return (
                <div>
                    <h2>Loading</h2>
                    <img src="/images/loader.gif" alt="loader" />
                </div>
            )
        }

    }


    return (

        <section class={`product-listing ${isDarkMode ? 'dark-theme' : ''}` }>
            {/* <Link to="/">   <button style={{marginLeft: '-65px', borderRadius: '12px', backgroundColor: 'rgb(19, 19, 49)', padding: '15px'}} >Home</button></Link> */}
            {renderData(props)}
        </section>


    )
}


export default ListingDisplay;