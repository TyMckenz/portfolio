import "./GithubCardStyle.css";
import React from 'react';
import GithubCard from "./GithubCard";
import GithubCardData from "./GitCardData";

const Git = () => {
  return (
    <div className="gh-container">
        <h1 className="gh-heading">Github</h1>
        <div className="small-container">
           {GithubCardData.map((val, ind) => {
            return (
                <GithubCard
                key={ind}
                imgcard ={val.imgcard}
                title ={val.title}
                text ={val.text}
                visit ={val.visit}
                />
            )
           })}
        </div>
    </div>
  )
}

export default Git