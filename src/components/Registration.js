import React, { useState } from 'react';
import './Registration.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Registration(){

const[inputs, setInputs] = useState({name:"", email:"", number:"", password:""})
const navigate = useNavigate()

function handleSubmit(e){
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(inputs))
    navigate("/");
}

  return (
    <div className="container1">
     <div clssName="main1">

      <h2>CREATE AN ACCOUNT</h2>

      <form onSubmit={handleSubmit}>

        <div className="inputs1">
            <input type="text" placeholder='Enter Name' autoComplete='off'
                name="name"
                value = {inputs.name}
                onChange={(e)=>setInputs({...inputs, [e.target.name] : e.target.value})}
            />

            <input type="email" placeholder='Enter email' autoComplete='off'
                 name="email"
                value = {inputs.email}
                onChange={(e)=>setInputs({...inputs, [e.target.name] : e.target.value})}
            />

            <input type="number" placeholder='Enter Number' autoComplete='off'
                 name="number"
                value = {inputs.number}
                onChange={(e)=>setInputs({...inputs, [e.target.name] : e.target.value})}
            />

            <input type="password" placeholder='Enter password' autoComplete='off'
                 name="password"
                value = {inputs.password}
                onChange={(e)=>setInputs({...inputs, [e.target.name] : e.target.value})}
            />

            <button type="submit">Submit</button>
        </div>
        <p>Have already an account?
        <Link to="/">
         <u>Login here</u>
        </Link>
        </p>
        </form>

     </div>
    </div>
  )
}
