import React from "react";

import axios from "axios";


const url = "https://amazonapi-r8s2.onrender.com/product";


const CuisineFilter =(props)=>{


    const handleFilter =(event)=>{
   
        let productid= props.productid;
        let cuisineId = event.target.value;
        let cuisineUrl ="";
        if(cuisineId===""){
            cuisineUrl =`${url}/${productid}`
        }else{

            cuisineUrl =`${url}/${productid}`
            // ?productid=${cuisineId}

        }

        axios.get(cuisineUrl)
        .then((res)=>{props.restPerCuisine(res.data)})


    }


   


    return(

        <>


                     {/* <center><h3>Product Filter</h3></center>
                   <div style={{marginLeft:'15%'}} onChange={handleFilter}>
                    <label className="radio">
                        <input type="radio" name="cuisine" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1"/>Earbuds
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="2"/>Walking Shoes
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="3"/>Earbuds
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="4"/>Watch
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="5"/>Digital Men's & Boy's Watch
                    </label>
                   </div> */}
        
         

                <center><h3 style={{marginTop: "22px", marginRight: "50px"}}>Product Filter</h3></center>
            <div style={{marginTop: "10px", marginLeft: "22px"}} onChange={handleFilter}>
                <div >
                    <input type="radio" name="cuisine" value="" />All

                </div>
                <div>
                    <input type="radio" name="cuisine" value="1" />Earbuds

                </div>
                <div>
                    <input type="radio" name="cuisine" value="2" />Walking Shoes

                </div>
                <div>
                    <input type="radio" name="cuisine" value="3" />Earbuds

                </div>
                <div>
                    <input type="radio" name="cuisine" value="4" />Watch

                </div>
                <div>
                    <input type="radio" name="cuisine" value="5" />Digital Men's & Boy's Watch

                </div>


            </div>

                
            


        </>
    )

}

export default CuisineFilter;