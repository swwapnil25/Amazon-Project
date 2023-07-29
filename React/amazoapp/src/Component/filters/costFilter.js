import React from "react";
// import './cusineFilter.css';
import axios from "axios";


const url = "https://amazonapi-r8s2.onrender.com/price";


const CostFilter = (props) => {


    const handleFilter = (event) => {

        let productid = props.productid;
        let cost = (event.target.value).split('-')
        let lcost = cost[0]
        let hcost = cost[1]
        let costUrl = "";
        if (event.target.value === "") {
            costUrl = `${url}/${productid}`
        } else {

            costUrl = `${url}/${productid}?lcost=${lcost}&hcost=${hcost}`

        }

        axios.get(costUrl)
            .then((res) => { props.restPerCost(res.data) })



    }


    return (

        <>

            {/* <center><h3>Cuisine Filter</h3></center> */}

            {/* <div style={{marginLeft:'15%'}} onChange={handleFilter}>
                   <center><h3>Cost Filter</h3></center>
                    <label className="radio">
                        <input type="radio" name="cuisine" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="0-300"/>0-300
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="301-600"/>301-600
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="601-900"/>601-900
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="901-1400"/>901-1400
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1201-5000"/>1201-5000
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="5001-11000"/>5001-11000
                    </label>
                   </div> */}


            <center><h3 style={{marginTop: "21px", marginRight: "50px"}}>Cost Filter</h3></center>

            <div style={{marginTop: "10px", marginLeft: "22px"}} onChange={handleFilter}>
                <input type="radio" name="cuisine" value="" />All
                <div>
                    <input type="radio" name="cuisine" value="1" />0-300
                </div>
                <div>
                    <input type="radio" name="cuisine" value="301-600" />301-600
                </div>
                <div>
                    <input type="radio" name="cuisine" value="601-900" />601-900
                </div>
                <div>
                    <input type="radio" name="cuisine" value="901-1400" />901-1400
                </div>
                <div>
                    <input type="radio" name="cuisine" value="1201-5000" />1201-5000
                </div>
                <div>
                    <input type="radio" name="cuisine" value="5001-11000" />5001-11000
                </div>


            </div>



        </>
    )

}

export default CostFilter;