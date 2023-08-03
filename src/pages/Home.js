import React from 'react'
import './Home.css' 
import { useNavigate, Link } from 'react-router-dom'

export default function Home(){

const userName = JSON.parse(localStorage.getItem("user"))
const navigate = useNavigate()

function handleLogout(){
    localStorage.removeItem("loggedIn")
    navigate("/")
}

  return (
    <>
     <nav className="navbar">
     <div className="main-div">
     <h3>Welcome {userName.name}!</h3>
     <ul className="nav-links">
      <Link to="About"><li>About</li></Link>
      <Link to="Services"><li>Services</li></Link>
      <Link to="Contact"><li>Contact</li></Link>
      <Link to="/"><li><buttons type="submit" onClick={handleLogout}>Logout</buttons></li></Link>
     </ul>
     </div>
    </nav>
    
    </>
  )
}
