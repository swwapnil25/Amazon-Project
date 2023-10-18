import React, { useState, useEffect } from 'react';
import { useDarkMode } from './DarkModeContext';
import { Link } from 'react-router-dom';


const QuickDisplay = ({ baseUrl }) => {
  const [products, setProducts] = useState([]);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}`, { method: 'GET' });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [baseUrl]);

  return (
    <div className={`today_deals_product_list ${isDarkMode ? 'dark-theme' : ''}`}>
      {products.map((item) => (
        <Link key={item.productType_id} to={`/details?productType_id=${item.id}`}>
          <div className="today_deals_product_item">
            <img src={item.image} alt="" />
            <div className="discount_Contaienr" style={{ textDecoration: 'none' }}>
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
            {/* rgb(160 121 121) */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default QuickDisplay;
