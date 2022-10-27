import "./HeroImg2Style.css";
import EducationPage from "../assets/largeParchment.jpg"
import React from 'react'

const HeroImg3 = () => {
  return (
    <div className="hero-img">
        <div className="mask">
            <img className="education-page" src={EducationPage} alt="EducationPage"/>
        </div> 
        <div className="mid">
            <h1>Education</h1>
            <h3>A Quick Synopsis</h3>
        </div>
    </div>
  )
}

export default HeroImg3
