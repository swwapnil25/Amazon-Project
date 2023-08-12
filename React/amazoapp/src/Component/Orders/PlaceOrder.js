import React, { useState } from "react";
import './PlaceOrder.css';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

const url = "https://amazonapi-r8s2.onrender.com/placeorder";

const PlaceOrder = () => {
  let navigate = useNavigate();
  let params = useParams();

  const initialValues = {
    id: Math.floor(Math.random() * 100000),
    product_name: params.product_name,
    name: "",
    email: "",
    cost: Math.floor(Math.random() * 1000),
    phone: "",
    address: "",
    payment: ""
  };

  const [values, setValues] = useState(initialValues);
  const [formError, setFormError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const checkout = () => {
    if (values.name && values.email && values.phone && values.address && values.payment) {
      fetch(url, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      }).then(() => {
        navigate(`/ViewOrder`);
      });
    } else {
      setFormError(true);
    }
  }

  return (
    <>
      <Header />
      <div className="container11">
    {formError && <p className="error-message" style={{textAlign: "center",fontSize: "26px", marginTop: "-30px", color: 'red'}}>Please fill out all fields before proceeding..</p>}
    {/* "#534040" */}
        <h1 className="head1" style={{fontSize: "30px",marginTop: "3px"}}>Your Order {params.product_name}</h1>
        <form action="/submit_order" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={values.name} onChange={handleInputChange} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={values.email} onChange={handleInputChange} required />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={values.phone} onChange={handleInputChange} required />

          <label htmlFor="address">Shipping Address:</label>
          <textarea id="address" name="address" value={values.address} onChange={handleInputChange} required></textarea>

          <label htmlFor="payment">Payment Method:</label>
          <select id="payment" name="payment" value={values.payment} onChange={handleInputChange} required>
            <option value="" disabled>Select payment method</option>
            <option value="credit_card">Credit Card</option>
            <option value="paypal">Paypal</option>
            <option value="amazon_pay">Amazon Pay</option>
            <option value="Cash On Delivery">Cash On Delivery</option>
          </select>

          <div>
            <h2 style={{marginTop: "12px"}}>Total Price is Rs.{values.cost}</h2>
            &nbsp;
          </div>


          <button type="button" style={{marginTop: "-10px"}} onClick={checkout}>Place Order</button>
        </form>
      </div>
    </>
  )
}

export default PlaceOrder;
