import React from 'react'
import Graph from './Graph'
import Navbar from './Navbar'
import Map from './Map'
import Orders from './Orders'
import PieChart from './Pie'
const Dashboard = () => {
    return (
        <div>
            <Navbar Title={"Logout"}/>

            <div className="container my-5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="threehold" style={{ marginLeft: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 50 }}>

                    <div className="card w-90 bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Order from L&T</h2>
                            <p>Your Order is with John Doe. Will Reach by 25/02/2024 Transit for 20 hours </p>

                            
                        </div>
                    </div>
                    <div className="card w-90 bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Order From Tata Steel</h2>
                            <p>Your Order is with Aakash Mishra . WIll reach by 27/02/2024. Transit for 21 hours</p>
                            
                        </div>
                    </div>
                    <Map />
                </div>
            </div>
            <div className="graph" style={{ height: '60vh', width: '60vh', margin:"auto",color: 'black' }}>

                <PieChart />
            </div>
                <Orders/>
            
        </div>
    )
}

export default Dashboard
