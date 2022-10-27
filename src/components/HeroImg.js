import "./HeroImgStyle.css";
import MainPage from "../assets/largeSpace.jpg";
import React from 'react';
import {Link} from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="main-page" src={MainPage} alt="MainPage"/>
      </div>
      <div className="content">
        <h1>Tyler Mckenzie</h1>
        <p>New graduate from Full Stack Web Development.</p>
        <div>
            <Link to="/skills" className="btn">Skills</Link>
            <Link to="/education" className="btn btn-light">Education</Link>
            <Link to="/experience" className="btn">Experience</Link>
            <Link to="/projects" className="btn btn-light">Projects</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
