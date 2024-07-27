import React from 'react';
import './Nav.css';
import logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Courses</li>
            <li><button className='btn'>LOGOUT</button></li>
        </ul>
    </nav>
    
  )
}

export default Nav

