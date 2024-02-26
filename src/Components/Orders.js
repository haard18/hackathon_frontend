import { React, useEffect,useState } from 'react'
import Table from 'react-bootstrap/Table';

const Orders = () => {
    const[order,setorder]=useState([]);
    const handleacceptclick=async(orderid)=>{
        const response=await fetch(`http://localhost:5000/api/auth/changestatus/${orderid}`,{
            method:"PUT"
        });
        const products =await fetch("http://localhost:5000/api/auth/getallorderinfo")
        const Orderrequest=await products.json();
        console.log(Orderrequest)
        setorder(Orderrequest);
        console.log(response);
    }
    const handlerejectclick=async(orderid)=>{
        const response=await fetch(`http://localhost:5000/api/auth/deleterequest/${orderid}`,{
            method:"DELETE"
        });
        const products =await fetch("http://localhost:5000/api/auth/getallorderinfo")
        const Orderrequest=await products.json();
        console.log(Orderrequest)
        setorder(Orderrequest);
        console.log(response);
    }
    useEffect(() => {
        async function getorders(){
        const products =await fetch("http://localhost:5000/api/auth/getallorderinfo")
        const Orderrequest=await products.json();
        console.log(Orderrequest)
        setorder(Orderrequest);
}getorders()}, []);

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra" style={{border:'2px solid white', borderRadius:10,marginTop:10}}>
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>project Name</th>
                        <th>Order Status</th>
                        <th>order Details</th>
                        <th>order Amount</th>
                        <th>Confirmation</th>
                    </tr>
                </thead>
                <tbody>
                    {order.map(order => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.projectName}</td>
                            <td>{order.orderStatus}</td>
                            <td>{order.orderDetails}</td>
                            <td>{order.orderAmount}</td>
                            <td><button onClick={()=>handleacceptclick(order._id)} className="btn btn-primary mx-2">Accept</button> <button onClick={()=>handlerejectclick(order._id)} className="btn btn-error">Reject</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Orders
