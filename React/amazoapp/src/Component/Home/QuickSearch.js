import React, { useState, useEffect } from "react";
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay'


const base_url = "https://amazonapi-r8s2.onrender.com";
// const base_url2 = "https://amazonapi-r8s2.onrender.com";

const QuickSearch = () => {


	const [producttype, setProductType] = useState();

	useEffect(() => {
		fetch(`${base_url}/name`, { method: 'GET' })
			.then((res) => res.json())
			.then((data) => {
				setProductType(data)


			})
	}, [])



	return (

		<>

			<section className="today_deals_container" style={{ marginTop: "-350px" }}>
				<div className="today_deals_heading">
					<h1>Today's Deals</h1>
					<p><a href="#">See all deals</a></p>
				</div>
				< QuickDisplay productData={producttype} />
			</section>

		</>
	)
};

export default QuickSearch;