import "./SkillsCardStyle.css";
import React from 'react'

const EducationCard = () => {
  return (
    <div className="cards">
        <div className="edu-container">
            <div>
                <h1>High School</h1>
                <h3>Grant Park High School</h3>
                <p>Graduated June, 2013</p>
                <p><b>Major Roles In:</b> Football, Wrestling, and Rugby</p>
            </div>
            <div>
                <h1>Post Secondary</h1>
                <h3>Robertson College / Full Stack Web Dev</h3>
                <p>Program Completed on November 6th, 2022</p>
                <p><b>Main Languages of Interets(In Order):</b></p>
                <p>Front End(Angular/React), C#, JavaScript,</p>
                <p>SQL, Java</p>
            </div>
            <div>
              <h1>Personal Learning</h1>
              <h3>Things I've Learned On My Own Time</h3>
              <p><b>Fitness:</b> Olympic Lifting, Training,</p>
              <p>Coaching(Training, Wrestling)</p>
              <p><b>Coding:</b> Python</p>
              <p><b>Various Labour Jobs:</b> Painting, Landscaping,</p>
              <p>Demo, Woodworking</p>
            </div>
        </div> 
    </div>
  )
}

export default EducationCard
