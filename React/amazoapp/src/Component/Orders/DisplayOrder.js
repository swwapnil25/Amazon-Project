import React, { useState, useEffect } from 'react';
import './DisplayOrder.css';
import { Link } from "react-router-dom";
import { useDarkMode } from '../Home/DarkModeContext';



const DisplayOrders = (props) => {

    const { isDarkMode } = useDarkMode();


    const renderData = ({ orderData }) => {
        if (orderData) {
            return orderData.map((item) => {
                return (
                    // <tr key={item.id}>
                    //     <td>{item.id}</td>
                    //     <td>{item.product}</td>
                    //     <td>{item.name}</td>
                    //     <td>{item.email}</td>
                    //     <td>Rs. {item.cost}</td>
                    //     <td>{item.phone}</td>
                    // </tr>

                    <tbody key={item.id} className={isDarkMode ? 'dark-theme' : ''}>
                    <tr key={item.id}>
                        <td> {item.id}</td>
                        <td>{item.product_name}</td>
                        <td> {item.name}</td>
                        <td> {item.email} </td>
                        <td>
                            <p class="status shipped">{item.payment}</p>
                        </td>
                        <td> Rs.{item.cost} </td>
                        <td> <strong>{item.phone}</strong></td>
                    </tr>
                   
                </tbody>
            

                   
                )
            })
        }
    }


    useEffect(() => {
        const rootElement = document.getElementById("root");
        if (rootElement) {
          rootElement.style.backgroundColor = isDarkMode ? "rgb(37 36 36)" : "#e0d7d7";
        }
      }, [isDarkMode]);

    return (
        <main class="table" style={{marginLeft: '112px',marginBlock: '6px'}}>
        {/* <section class="table__header"/> */}
        <div>
        <Link to="/"><button style={{marginLeft: '-65px', borderRadius: '15px', backgroundColor:'rgb(205 50 96)', padding: '14px',marginLeft: '1000px',marginTop: '6px',marginLeft: '990px',transition: 'background-color 0.3s'}} >Home</button></Link>
        </div>
        <div>
            <h1 style={{ margin: '53px',marginTop: '12px',fontSize: '30px',marginTop: '-44px'}}>Customer's Orders</h1>
        </div>
        {/* <section/> */}
        <section class="table__body" style={{marginTop: -"46px", marginRight: "19px", marginTop: '-43px'}}>
            <table>
                <thead>
                    <tr>
                        <th> OrderId </th>
                        <th> Product </th>
                        <th> Name </th>
                        <th> Email</th>
                        <th> Payment</th>
                        <th> Cost</th>
                        <th> Phone </th>
                    </tr>
                </thead>
        {renderData(props)}
               </table>
        </section>
               
    </main>
               

    )

}

export default DisplayOrders;