import React from 'react'
import Navbar from './Navbar'
import trucklogo from '../images/bluetruck.png'
import firsticon from '../images/firsticon.png';
import secondicon from '../images/secondicon.png';
import thirdicon from '../images/thirdicon.png';
import fourthicon from '../images/fourthicon.png';
import { useNavigate } from 'react-router-dom'
const Home = () => {
    let history = useNavigate()
    return (
        <div>
            <Navbar Title={"Login"} />

            <div className="top" style={{ display: 'flex', height: '50%' }}>

                <div className="logo" style={{ display: 'flex', height: 369, width: 450 }}>
                    <figure><img src={trucklogo} alt="Shoes" /></figure>
                    <div className="heading text-5xl font-serif" style={{ display: 'flex', flexDirection: 'column', gap: 50, alignItems: 'right', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 280, top: 180 }}>
                        <h1>Nationwide Logistics</h1>


                        <a className="btn-outline text-lg btn-wide btn" onClick={function () {
                            history('/Login')
                        }}>Signup</a>
                    </div>
                </div>
            </div>
            <div className="whitebottom">

                <div className="bottom" style={{ color: 'black', display: 'flex', borderRadius: 20, backgroundColor: '#bebebe', justifyContent: 'center', alignItems: 'center', height: '50%', gap: 400, fontFamily: "serif" }}>
                    <div className="one text-3xl">80 thousand+ <br /> Business</div>
                    <div className="two text-3xl">20 Million+ <br /> Deliveries</div>
                    <div className="three text-3xl">64 Districts <br /> wide</div>
                </div>
                <h1 className='text-center font-serif underline text-4xl my-4'>Fundamental working Components</h1>
                <div className="outer-images" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 200, marginTop: 20 }}>
                    

                    <div className="images" style={{ display: "flex", justifyContent: "center", backgroundColor: '#bebebe', alignItems: 'center', height: 169, width: 169, borderRadius: '50%' }}>
                        <figure> <img src="https://cdn.hugeicons.com/icons/package-stroke-rounded.svg" width={80} height={80} /></figure>
                    </div>
                    <div className="images" style={{ display: "flex", justifyContent: "center", alignItems: 'center', backgroundColor: '#bebebe', height: 169, width: 169, borderRadius: '50%' }}>
                        <figure> <img src="https://cdn.hugeicons.com/icons/container-truck-02-stroke-rounded.svg" alt="container-truck-02" width={80} height={80} /></figure>
                    </div>
                    <div className="images" style={{ display: "flex", justifyContent: "center", alignItems: 'center', backgroundColor: '#bebebe', height: 169, width: 169, borderRadius: '50%' }}>
                        <figure> <img src="https://cdn.hugeicons.com/icons/location-05-stroke-rounded.svg" alt="location-05" width={80} height={80} /></figure>
                    </div>
                    <div className="images" style={{ display: "flex", justifyContent: "center", alignItems: 'center', backgroundColor: '#bebebe', height: 169, width: 169, borderRadius: '50%' }}>
                        <figure> <img src="https://cdn.hugeicons.com/icons/database-stroke-rounded.svg" alt="database" width={80} height={80} /></figure>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
