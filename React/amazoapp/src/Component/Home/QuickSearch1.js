import React, { useState, useEffect } from "react";
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';
import QuickDisplay1 from './QuickDisplay1';

// const base_url1 = "https://amazonapi-r8s2.onrender.com/name";
const base_url2 = "https://amazonapi-r8s2.onrender.com/name1";
const base_url3 = "https://amazonapi-r8s2.onrender.com/name2";
const base_url4 = "https://amazonapi-r8s2.onrender.com/name3";
const base_url5 = "https://amazonapi-r8s2.onrender.com/name4";

const QuickSearch = () => {
//   const [productType1, setProductType1] = useState([]);
  const [productType2, setProductType2] = useState([]);
  const [productType3, setProductType3] = useState([]);
  const [productType4, setProductType4] = useState([]);
  const [productType5, setProductType5] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ data2, data3, data4, data5] = await Promise.all([
        //   fetch(base_url1, { method: 'GET' }).then((res) => res.json()),
          fetch(base_url2, { method: 'GET' }).then((res) => res.json()),
          fetch(base_url3, { method: 'GET' }).then((res) => res.json()),
          fetch(base_url4, { method: 'GET' }).then((res) => res.json()),
          fetch(base_url5, { method: 'GET' }).then((res) => res.json())
        ]);

        // setProductType1(data1);
        setProductType2(data2);
        setProductType3(data3);
        setProductType4(data4);
        setProductType5(data5);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
     

      <section className="today_deals_container1">
        <div className="today_deals_heading">
          <h1>Attractive Deals</h1>
          <p><a href="#">See all deals</a></p>
        </div>
        <QuickDisplay1 productData={productType2} baseUrl={base_url2} />
      </section>

      <section className="today_deals_container1">
        <div className="today_deals_heading">
          <h1>Items You May Like</h1>
          <p><a href="#">See all deals</a></p>
        </div>
        <QuickDisplay1 productData={productType3} baseUrl={base_url3} />
      </section>

      <section className="today_deals_container1">
        <div className="today_deals_heading">
          <h1>Attire</h1>
          <p><a href="#">See all deals</a></p>
        </div>
        <QuickDisplay1 productData={productType4} baseUrl={base_url4} />
      </section>

      <section className="today_deals_container1">
        <div className="today_deals_heading">
          <h1>Gaming Category</h1>
          <p><a href="#">See all deals</a></p>
        </div>
        <QuickDisplay1 productData={productType5} baseUrl={base_url5} />
      </section>
    </>
  );
};

export default QuickSearch;
