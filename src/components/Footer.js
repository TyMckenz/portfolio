import "./FooterStyle.css";
import React from 'react';
import { FaLinkedin, FaMailBulk, FaPhone, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
            <div className="phone">
                <FaPhone size={20} style={{color: "#fff", marginRight: "5px"}}/>
                1-204-930-8448
            </div>
            <div className="email">
                <FaMailBulk size={20} style={{color: "#fff", marginRight: "5px"}}/>
                t_mckenzie@outlook.com
            </div>
        </div>
        <div className="right">
        <h3>Tyler Mckenzie</h3>
        <p>New graduate from the Full Stack Web Development course through Robertson College.</p>
        <div className="social">
        <a target = "_blank" rel="noreferrer" href = "https://github.com/TyMckenz"><FaGithub size={20} style={{color: "#fff", marginRight: "5px"}}/></a>
        <a target = "_blank" rel="noreferrer" href = "https://www.linkedin.com/in/tyler-mckenzie-trm/"><FaLinkedin size={20} style={{color: "#fff", marginRight: "5px"}}/></a>
        </div>
        </div> 
    </div>
    </div>
  )
}

export default Footer
