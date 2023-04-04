import './HeroImgStyle.css';
import MainPage from '../assets/largeSpace.jpg';
import React from 'react';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="main-page" src={MainPage} alt="MainPage" />
      </div>
      <div className="content">
        <h1>Tyler Mckenzie</h1>
        <p>Full Stack Web Developer.</p>
        <div className="centered">
          <Link to="/skills" className="btn btn1">
            Skills
          </Link>
          <Link to="/education" className="btn">
            Education
          </Link>
          <Link to="/experience" className="btn">
            Experience
          </Link>
          <Link to="/projects" className="btn btn4">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
