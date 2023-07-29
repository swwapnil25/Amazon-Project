import React, {useState} from "react";
import './PlaceOrder.css'
// import Styles from "./PlaceOrder.module.css";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from '../Header';



const url ="https://amazonapi-r8s2.onrender.com/placeorder";


const PlaceOrder =()=>{
  let navigate = useNavigate();
    let params = useParams();

    const initialValues = {
        id: Math.floor( Math.random()*100000),
        product_name: params.product_name,
        name: "",
        email: "",
        cost: Math.floor(Math.random()*1000),
        phone:"",
        address: "",
        payment: ""
    };
    

    const [values, setValues] = useState(initialValues);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    };

    const checkout =() =>{
        console.log(values)
        fetch(url,{
          method: 'POST',
          headers:{
            'accept':'application/json',
            'Content-Type':'application/json',

          },
          body:JSON.stringify(values)
        })
        .then(navigate(`/ViewOrder`))
    }


    // let [id] = useState(Math.random()*100000);
    // let [rest_name] = params.restName;
    // let [name] = useState('Nidhi');
    // let [email] = useState('nidhi@gmail.com');
    // let [cost] = useState(Math.random()*100000);
    // let [phone] = useState('9552312451');
    // let [address] = useState('how. 12 Sector 34');


    return(
   <>
   <Header/>
    <div className="container11">
      <h1 className="head1">Your Order {params.product_name}</h1>
      <form action="/submit_order" method="post" />
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" value={values.name} onChange={handleInputChange}required />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email"  value={values.email} onChange={handleInputChange}required />

      <label for="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" value={values.phone} onChange={handleInputChange} required />

      <label for="address">Shipping Address:</label>
      <textarea id="address" name="address" value={values. address} onChange={handleInputChange} required></textarea>

      <label for="payment">Payment Method:</label>
      <select id="payment" name="payment" value={values.payment} onChange={handleInputChange} required>
        <option value="disabled selected" >Select payment method</option>
        <option value="credit_card">Credit Card</option>
        <option value="paypal">Paypal</option>
        <option value="amazon_pay">Amazon Pay</option>
        <option value="Cash On Delivary">Cash On Delivary</option>
      </select>

    

      <div>
        <h2>Total Price is Rs.{values.cost}</h2>
        &nbsp;
      </div>
      

      <button type="submit" onClick={checkout}>Place Order</button>
      <form />
    </div>
    </>
  )

}


export default PlaceOrder;