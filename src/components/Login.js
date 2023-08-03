import React, { useState } from 'react';
import './Login.css'
import { useNavigate, Link } from 'react-router-dom';

export default function Login(){

const[inputs, setInputs] = useState({email:"",password:""})
const navigate = useNavigate();

function handleLogin(e){
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if(inputs.email === loggedUser.email && inputs.password === loggedUser.password){
        localStorage.setItem("loggedIn", true)
       navigate("/Home")
    }
    else{
        alert("Invalid Email or Password")
    }
}

  return (
    <>
     <div className="container">
      <div className="main">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
        <div className="inputs">
            <input type="email" placeholder='Enter email' autoComplete='off'
                 name="email"
                value = {inputs.email}
                onChange={(e)=>setInputs({...inputs, [e.target.name] : e.target.value})}/>

            <input  type="password" placeholder='Enter password' autoComplete='off'
                 name="password"
                value = {inputs.password}
                onChange={(e)=>setInputs({...inputs, [e.target.name] : e.target.value})}/>

        <button>Login</button>
        </div>
        <p>Don't have an account?
        <Link to="/Registration">
         <u>Register here</u>
        </Link>
        </p>
        </form>
        </div>
        </div>
    </>
  )
}
