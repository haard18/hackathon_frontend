import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Navbar = (props) => {
    let history=useNavigate()

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                            <li>
                                <a>Join us</a>
                                <ul className="p-2 font-bold">
                                    <li><a>Delivery Partner</a></li>
                                    <li><a>Enterprise</a></li>
                                </ul>
                            </li>
                            <li><a>About Us</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-bold text-2xl">Mapping Logistic solutions</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-lg menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <details>
                                <summary>Join us</summary>
                                <ul className="p-2 text-sm">
                                    <li><a>Delivery Partner</a></li>
                                    <li><a>Enterprise</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>About Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn-outline text-lg btn-wide btn mx-17" onClick={function(){
                        history('/Login')
                    }}>{props.Title}</a>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
