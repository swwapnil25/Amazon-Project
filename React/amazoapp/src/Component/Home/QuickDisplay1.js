import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuickDisplay = ({ baseUrl }) => {
  const [products, setProducts] = useState([]);

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
    <div className="today_deals_product_list">
      {products.map((item) => (
        <Link key={item.productType_id} to={`/details?productType_id=${item.id}`}>
          <div className="today_deals_product_item">
            <img src={item.image} alt="" />
            <div className="discount_Contaienr" style={{ textDecoration: 'none' }}>
              <a href="#">{item.Off}</a>
              <a href="#">{item.Deal}</a>
            </div>
            <p>{item.content}</p>
            
          </div>
        </Link>
      ))}
    </div>
  );
};

export default QuickDisplay;
