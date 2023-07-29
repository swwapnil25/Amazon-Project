import React from "react";
import './DisplayOrder.css';




const DisplayOrders = (props) => {

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

                <tbody>
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

    return (
        <main class="table" style={{marginLeft: '112px',marginBlock: '6px'}}>
        {/* <section class="table__header"/> */}
        <div>
            <h1 style={{ margin: '53px',marginTop: '12px',fontSize: '30px'}}>Customer's Orders</h1>
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