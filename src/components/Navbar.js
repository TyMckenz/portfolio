import "./NavbarStyle.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
  const  [click, setClick] = useState(false)
    const handleClick = () => setClick(!click) 

  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>    
                <Link to="/skills">Skills</Link>
            </li>
            <li>
                <Link to="/education">Education</Link>
            </li>
            <li>
                <Link to="/experience">Experience</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
        </ul>
        <div className="burger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}}/>) :
            (<FaBars size={20} style={{color: "#fff"}}/>)}
        </div>
    </div>
  )
}

export default Navbar
