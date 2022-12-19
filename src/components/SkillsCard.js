import './SkillsCardStyle.css';
import React from 'react';

const SkillsCard = () => {
  return (
    <div className="cards">
      <div className="card-container">
        <div>
          <h1>Personal Skills</h1>
          <p>Quick/Eager Learner</p>
          <p>Personable</p>
          <p>Strong Work Ethic</p>
          <p>Good Teammate</p>
          <p>Attention To Detail</p>
        </div>
        <div>
          <h1>Technical Skills</h1>
          <p>HTML, CSS, JS</p>
          <p>Java</p>
          <p>C#/ASP.net Core</p>
          <p>SQL/MongoDB</p>
          <p>Python</p>
          <p>Angular/React/NextJS</p>
        </div>
        <div>
          <h1>Transferable Skills</h1>
          <p>Creative Problem Solving</p>
          <p>Strategic Planning</p>
          <p>Leading/Teaching</p>
          <p>Customer Service</p>
          <p>Product Knowledge</p>
        </div>
        <div>
          <h1>Physical Skills</h1>
          <p>Fitness/Training</p>
          <p>Manual Dexterity</p>
          <p>Focus Under Pressure</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
