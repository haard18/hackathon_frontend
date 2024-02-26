import React, { useState } from 'react'
// import Alert from './Alert';
import Navbar from './Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
const Login = () => {
   const[credentials,setcredentials]=useState({email:"",password:""})
    let history=useNavigate()
    const handlesubmit = async (e) => {
        history('/Dashboard')
        // e.preventDefault();
        // const response = await fetch("http://localhost:5000/api/auth/loginenterprise", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },body: JSON.stringify({email: credentials.email,password:credentials.password})
        // });
        // const json = await response.json();
        // console.log(json);
        // if(json.success){
        //     //redirect
        //     localStorage.setItem('token',json.auth_token)
        //    history('/Home')
        // }
        // else{
        //     alert("Invalid credentials")
        //     // Alert("Invalid credentials")
        // }
    }
    const onChange = (e) => {
        setcredentials({
            ...credentials,[e.target.name]:e.target.value
        })
    };
    return (
        <div>
            
            <Link to='/'><button className="btn btn-outline btn-primary">Go Back</button></Link>

            <h1 className='text-center text-3xl my-10'> Login to Access Dashboard</h1>
            <div className="form" style={{display:'flex',justifyContent:'center',alignItems:'center',borderRadius:10,border:"2px solid black",width:"50vh",height:"50vh",marginLeft:"40%"}}>
            <form onSubmit={handlesubmit}>
                <div className="mb-3 text-center">
                    <label htmlFor="Email" className="form-label">Email address</label>
                    <input required style={{opacity:0.5,margin:"auto",textAlign:'center'}} type="email" name='email' className="form-control" value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                
                </div>
                <div className="mb-3 text-center">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input required style={{opacity:0.5,margin:"auto"}} type="password" name='password' className="form-control" value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
                </div>
            <div className="buttons" style={{display:"flex",justifyContent:"center",alignItems:'center'}}>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </div>
            </form>
            </div>
        </div>
    )
}

export default Login