import React from 'react';
import './components.css';


export default function ProjectCard(props) {
  return (
    <div className={`cardSkeleton ${props.imgName}`}>
      <div className={`cardTransition ${props.colorClass}`}></div>
      <h3>{props.cardTitle}</h3>
      <p>{props.cardText}</p>
    </div>
  );
}