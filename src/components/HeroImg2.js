import "./HeroImg2Style.css";
import ProjectPage from "../assets/largeIcetopes.jpg"
import React from 'react'

const HeroImg2 = () => {
  return (
    <div className="hero-img">
        <div className="mask">
            <img className="project-page" src={ProjectPage} alt="ProjectPage"/>
        </div>
        <div className="mid">
            <h1>Projects</h1>
            <h3>Includes a link to Github</h3>
            <h4>Content includes C#/ASP.net, Angular, React, and some Javascript.</h4>
            <h4>Content on Java to be added.</h4>
        </div>
    </div>
  )
}

export default HeroImg2
