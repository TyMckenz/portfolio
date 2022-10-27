import "./HeroImg2Style.css"
import SkillsPage from "../assets/blueFibersLarge.jpg"
import React from 'react'

const HeroImg4 = () => {
  return (
    <div className="hero-img">
        <div className="mask">
            <img className="skills-page" src={SkillsPage} alt="SkillsPage"/>
        </div> 
        <div className="mid">
            <h1>Skills</h1>
            <h3>What I've Picked Up</h3>
        </div>
    </div>
  )
}

export default HeroImg4
