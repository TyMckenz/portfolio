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
        <div>
          <Link to="/skills" className="btn">
            Skills
          </Link>
          <Link to="/education" className="btn">
            Education
          </Link>
          <Link to="/experience" className="btn">
            Experience
          </Link>
          <Link to="/projects" className="btn">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
