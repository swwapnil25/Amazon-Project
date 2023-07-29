import React, {useState} from "react";
// import './PlaceOrder.css'
// import Styles from "./PlaceOrder.module.css";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Header from '../Header';



const url ="http://3.17.216.66:5000/api/auth/register";


const Register =()=>{
  let navigate = useNavigate();
  let params = useParams();
    

    const initialValues = {
        
        name: "",
        email: "",
        password: "",
        phone:"",
       
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
        .then(navigate(`/login`))
    }


    


    return(
<> 
    <Header/>
    <div className="container11">
      <h1 className="head1">Register{params.product_name}</h1>
      <form action="/submit_order" method="post" />
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" value={values.name} onChange={handleInputChange}required />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email"  value={values.email} onChange={handleInputChange}required />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" value={values.phone} onChange={handleInputChange} required />

      <label for="phone">Phone</label>
      <textarea id="tel" name="phone" value={values. address} onChange={handleInputChange} required></textarea>

     


      <button type="submit" onClick={checkout}>Register</button>
      <form />
    </div>
    </>
  )

}


export default Register;