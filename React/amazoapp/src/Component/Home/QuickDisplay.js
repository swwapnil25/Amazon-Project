import React from 'react';
import './QuickDisplay.css';
import { useDarkMode } from './DarkModeContext';
import { Link } from 'react-router-dom';

const QuickDisplay = (props) => {
    const { isDarkMode } = useDarkMode();

    const listproducts = ({ productData }) => {
        if (productData) {
            return productData.map((item) => (
                <Link to={`/listing/${item.productType_id}`} key={item.productType_id}>
                    <div className={`today_deals_product_item ${isDarkMode ? 'dark-theme' : ''}`}>
                        <img src={item.image} alt={item.productType_id} />
                        <div className="discount_Contaienr" style={{ textDecoration: "none" }}>
                            <a href="#">{item.Off}</a>
                            <a href="#">{item.Deal}</a>
                        </div>
                        <p
                            style={{
                                color: isDarkMode ? 'white' : 'var(--fifth-color)',
                            }}
                            onMouseOver={(e) =>
                                (e.target.style.color = isDarkMode
                                    ? 'rgb(213 117 10 / 95%)'
                                    : 'rgb(213 117 10 / 95%)') // Set the same color for both dark and light modes on hover
                            }
                            onMouseOut={(e) => (e.target.style.color = isDarkMode ? 'white' : 'var(--fifth-color)')}
                        >
                            {item.content}
                        </p>
                    </div>
                </Link>
            ));
        }
    }

    return (
        <div className="today_deals_product_list">
            {listproducts(props)}
        </div>
    );
}

export default QuickDisplay;
