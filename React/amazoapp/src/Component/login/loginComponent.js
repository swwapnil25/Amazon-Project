import React, { useState } from "react";
// import './PlaceOrder.css'
// import Styles from "./PlaceOrder.module.css";
import { useNavigate } from 'react-router-dom';
import Header from '../Header';





const url = "http://3.17.216.66:5000/api/auth/login";


const Login = () => {
  let navigate = useNavigate();


  const initialValues = {


    email: "arpit@gmail.com",
    password: "12345678"


  };


  const [values, setValues] = useState(initialValues);
  const [message, setMessage] = useState();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const checkout = () => {
    console.log(values)
    fetch(url, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(values)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.auth === false) {
          setMessage(data.token)
        } else {
          sessionStorage.setItem('ltk', data.token)
          navigate(`/`)
        }
      })
  }



  return (
    <>

      <Header/>

      <div className="container11">
        <h2 style={{ color: "red" }}>{message}</h2>
        <h1 className="head1">Login</h1>
        <form action="/submit_order" method="post" />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value={values.email} onChange={handleInputChange} required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" value={values.password} onChange={handleInputChange} required />



        <button type="login" onClick={checkout}>Login</button>
        <form />
      </div>
    </>
  )

}


export default Login;