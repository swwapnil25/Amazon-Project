import React from 'react';
import { Link } from 'react-router-dom';





const ListingDisplay = (props) => {

    const renderData = ({ listData }) => {

        if (listData) {
            if (listData.length > 0) {
                return listData.map((item) => {
                    return (
                        // <div className='item' key={item._id}>
                        

                        <div class="product electronics" key={item._id}>
                            <img src={item.image} alt={item.product_name} style={{marginLeft: "24px"}}/>
                            <h3>{item.content}</h3>
                            {/* <p>{item.product_name}</p> */}
                            <Link to={`/details?productType_id=${item.id}`}>
                                <p>{item.product_name}</p>
                            </Link>

                            <p>Rs.{item.price}</p>
                            <button>{item.Off}</button>

                            
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

        <section class="product-listing">
            {renderData(props)}
        </section>


    )
}


export default ListingDisplay;