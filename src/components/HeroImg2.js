import './HeroImg2Style.css';
import ProjectPage from '../assets/largeIcetopes.jpg';
import React from 'react';

const HeroImg2 = () => {
  return (
    <div className="hero-img">
      <div className="mask">
        <img className="project-page" src={ProjectPage} alt="ProjectPage" />
      </div>
      <div className="mid">
        <h1>Projects</h1>
        <h3>Includes links to Github Projects</h3>
        <h4>Github includes C#/ASP.net, Angular, React, Next.JS, </h4>
        <h4>Java, and some Python</h4>
      </div>
    </div>
  );
};

export default HeroImg2;
