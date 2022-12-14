import "./HeroImg2Style.css"
import ExperiencePage from "../assets/blkFibersLarge.jpg"
import React from 'react'

const HeroImg5 = () => {
  return (
    <div className="hero-img">
        <div className="mask">
            <img className="experience-page" src={ExperiencePage} alt="ExperiencePage"/>
        </div>
        <div className="mid">
            <h1>Experience</h1>
            <h2>Recent Workplaces And Side Jobs</h2>
        </div>
    </div>
  )
}

export default HeroImg5
