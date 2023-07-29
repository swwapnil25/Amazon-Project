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

			<section className="today_deals_container">
				<div className="today_deals_heading">
					<h1>Today's Deals</h1>
					<p><a href="#">See all deals</a></p>
				</div>
				< QuickDisplay productData={producttype} />
			</section>

			<section class="today_deals_container1">
					<div class="today_deals_heading">
						<h1>Attractive Deals</h1>
						<p><a href="#">See all deals</a></p>
					</div>
						<div class="today_deals_product_list">
							<div class="today_deals_product_item">
								<img src="https://i.ibb.co/QXvb0M9/91fonh-Ato-AL-AC-UY218.jpg"/>
								<div class="discount_Contaienr">
									<a href="#">Up to 20% off</a>
									<a href="#">Deal of the day</a>
								</div>
								<p>Samsung Galaxy M34 5G..</p>
							</div>
							<div class="today_deals_product_item">
								<img src="https://i.ibb.co/LxrsvL7/71b-Y1-Sa-ML-AC-UY218.jpg" height="" />
								<div class="discount_Contaienr">
									<a href="#">Up to 30% off</a>
									<a href="#">Deal of the day</a>
								</div>
								<p>Tecno Camon 20 Pro 5G..</p>
							</div>
							<div class="today_deals_product_item">
								<img src="https://i.ibb.co/dcRmhTd/8f3c87d739b0.jpg"/>
								<div class="discount_Contaienr">
									<a href="#">Up to 25% off</a>
									<a href="#">Deal of the day</a>
								</div>
								<p>realme C11 2021..</p>
							</div>
							<div class="today_deals_product_item">
								<img src="https://i.ibb.co/NLXWG0H/812-MBICsvn-L-AC-UY218.jpg"/>
								<div class="discount_Contaienr">
									<a href="#">Up to 40% off</a>
									<a href="#">Deal of the day</a>
								</div>
								<p>Poco F1 by Xiaomi..</p>
							</div>
							<div class="today_deals_product_item">
								<img src="https://i.ibb.co/ScQX9hw/61d8nh-X80-WL-AC-UY218.jpg"/>
								<div class="discount_Contaienr">
									<a href="#">Up to 25% off</a>
									<a href="#">Deal of the day</a>
								</div>
								<p>Itel S23 (8GB RAM + 128GB ROM..</p>
							</div>
						</div>
					</section>
					
					<section class="today_deals_container1">
						<div class="today_deals_heading">
							<h1>Items You May Like</h1>
							<p><a href="#">See all deals</a></p>
						</div>
						
							<div class="today_deals_product_list">
								<div class="today_deals_product_item">
									<img src="https://i.ibb.co/dDmvGZD/71-Npf-TAn0f-L-AC-UL400.jpg"/>
									<div class="discount_Contaienr">
										<a href="#">Up to 60% off</a>
										<a href="#">Deal of the day</a>
									</div>
									<p>Fire-Boltt Quantum Luxury Stainle..</p>
								</div>
								<div class="today_deals_product_item">
									<img src="https://i.ibb.co/kJQyFsD/61-Gm-Ej-XOdz-L-AC-UL400.jpg" height="" />
									<div class="discount_Contaienr">
										<a href="#">Up to 25% off</a>
										<a href="#">Deal of the day</a>
									</div>
									<p>Regular Printed T-Shirt..</p>
								</div>
								<div class="today_deals_product_item">
									<img src="https://i.ibb.co/CBP44g8/71-RLItr7-I8-L-AC-UY218.jpg"/>
									<div class="discount_Contaienr">
										<a href="#">Up to 25% off</a>
										<a href="#">Deal of the day</a>
									</div>
									<p>HP Laptop 15s, Intel Celeron..</p>
								</div>
								<div class="today_deals_product_item">
									<img src="https://i.ibb.co/hRrXzC6/811-G4-Ue-WEs-L-AC-UL400.jpg"/>
									<div class="discount_Contaienr">
										<a href="#">Up to 60% off</a>
										<a href="#">Deal of the day</a>
									</div>
									<p>womens CHA ROSE GOLD Tote..</p>
								</div>
								<div class="today_deals_product_item">
									<img src="https://i.ibb.co/q0FX9k7/51z-VOj-YRNu-L-AC-UL400.jpg"/>
									<div class="discount_Contaienr">
										<a href="#">Up to 40% off</a>
										<a href="#">Deal of the day</a>
									</div>
									<p>boAt Nirvana Ion with 120 HRS..</p>
								</div>
							</div>
						</section>
						<section class="today_deals_container1">
							<div class="today_deals_heading">
								<h1>Attire</h1>
								<p><a href="#">See all deals</a></p>
							</div>
							
							<div class="today_deals_product_list">
								<div class="today_deals_product_item">
									<img src="https://i.ibb.co/6gcrynS/81-Cev2-Ax0-GL-AC-UL400.jpg"/>
									<div class="discount_Contaienr">
										<a href="#">Up to 30% off</a>
										<a href="#">Deal of the day</a>
									</div>
									<p>Women’s Zari and Foil Printed Net..</p>
								</div>
								<div class="today_deals_product_item">
									<img src="https://i.ibb.co/N3rdyBg/61-Hv7po-EWTL-AC-UL400.jpg" height="" />
									<div class="discount_Contaienr">
										<a href="#">Up to 30% off</a>
										<a href="#">Deal of the day</a>
									</div>
									<p>Men's Regular Fit Vest</p>
								</div>
								<div class="today_deals_product_item">
									<img src="https://i.ibb.co/tXDX6Sf/41x4if-IB6-ML-AC-UL400.jpg"/>
									<div class="discount_Contaienr">
										<a href="#">Up to 64% off</a>
										<a href="#">Deal of the day</a>
									</div>
									<p>High Waist Gym, Yoga, Active..</p>
								</div>
								<div class="today_deals_product_item">
									<img src="https://i.ibb.co/mXDLYpK/71f9x1-YGVu-L-AC-UL400.jpg"/>
									<div class="discount_Contaienr">
										<a href="#">Up to 80% off</a>
										<a href="#">Deal of the day</a>
									</div>
									<p>Reversible Pu-Leather Formal Belt..</p>
								</div>
								<div class="today_deals_product_item">
									<img src="https://i.ibb.co/Ms94qTS/519cw-IVryl-L-AC-UL400.jpg"/>
									<div class="discount_Contaienr">
										<a href="#">Up to 30% off</a>
										<a href="#">Deal of the day</a>
									</div>
									<p>Men Cotton Blend Plain Summer Shirt..</p>
								</div>
							</div>
						</section>
						<section class="today_deals_container1">
							<div class="today_deals_heading">
								<h1>Gaming Category</h1>
								<p><a href="#">See all deals</a></p>
							</div>
							
							<div class="today_deals_product_list">
								<div class="today_deals_product_item">
									<img src="https://i.ibb.co/642kbb5/61022qav-Kb-L-AC-UY218.jpg"/>
									<div class="discount_Contaienr">
										<a href="#">Up to 30% off</a>
										<a href="#">Deal of the day</a>
									</div>
									<p>AmazonBasics Optical USB Gaming Mouse..</p>
								</div>
								<div class="today_deals_product_item">
									<img src="https://i.ibb.co/KD0cKHL/818-YJwl-H2-BL-AC-UY218.jpg" height="" />
									<div class="discount_Contaienr">
										<a href="#">Up to 70% off</a>
										<a href="#">Deal of the day</a>
									</div>
									<p>SpinBot BattleBudz H1 Over-The-..</p>
								</div>
								<div class="today_deals_product_item">
									<img src="https://i.ibb.co/GpRfrsH/51m-WHXY8hy-L-AC-UY218.jpg"/>
									<div class="discount_Contaienr">
										<a href="#">Up to 25% off</a>
										<a href="#">Deal of the day</a>
									</div>
									<p>Sony PS5 PlayStation Console..</p>
								</div>
								<div class="today_deals_product_item">
									<img src="https://i.ibb.co/VjV2hwP/711-Eq-R0-PGGL-AC-UY218.jpg"/>
									<div class="discount_Contaienr">
										<a href="#">Up to 40% off</a>
										<a href="#">Deal of the day</a>
									</div>
									<p>Ambrane Wireless Gaming Controller..</p>
								</div>
								<div class="today_deals_product_item">
									<img src="https://i.ibb.co/Rj4NW51/71c-BZJsl-EL-AC-UY218.jpg"/>
									<div class="discount_Contaienr">
										<a href="#">Up to 33% off</a>
										<a href="#">Deal of the day</a>
									</div>
									<p>Boult Audio Maverick Truly Wireless..</p>
								</div>
							</div>
						</section>
                    


		</>
	)
};  

export default QuickSearch;