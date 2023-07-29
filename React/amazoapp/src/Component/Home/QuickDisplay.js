import React from 'react';
import { Link } from 'react-router-dom';




const QuickDisplay = (props) => {


    const listproducts = ({ productData }) => {

        if (productData) {
            return productData.map((item) => {

                return (


                    < Link to={`/listing/${item.productType_id}`}>


                        <div className="today_deals_product_item">
                            <img src={item.image} />
                            <div className="discount_Contaienr" style={{ textDecoration: "none" }} >
                                <a href="#">{item.Off}</a>
                                <a href="#">{item.Deal}</a>
                            </div>
                            <p>{item.content}</p>
                        </div>

                    </Link>

                )

            })
        }
    }

    return (
        <div className="today_deals_product_list">

            {listproducts(props)}


        </div >

    )
}


export default QuickDisplay;