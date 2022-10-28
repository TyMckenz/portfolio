import "./GithubCardStyle.css";
import React from 'react';



const GithubCard = (props) => {
  return (
    <div className="gh-card">
    <img src={props.imgcard} alt="GH-Logo"/>
    <h2 className="hub-title">{props.title}</h2>
    <div className="hub-details">
        <p>{props.text}</p>
        <div className="hub-btn">
            <a target = "_blank" rel="noreferrer" href = {props.visit} className="btn">Visit</a>
        </div>
    </div>
    </div>
  )
}

export default GithubCard
