
import React from 'react';
import { skills } from '../data/site';
export default function Skills(){
  return (
    <div className="container">
      <h2 className="h1">Skills</h2>
      <p className="lead">{skills.description}</p>
      <div className="grid" style={{marginTop:16}}>
        <div className="card"><h3>Languages</h3><div className="tech">{skills.languages.map((x,i)=>(<span className="tag" key={i}>{x}</span>))}</div></div>
        <div className="card"><h3>Frameworks</h3><div className="tech">{skills.frameworks.map((x,i)=>(<span className="tag" key={i}>{x}</span>))}</div></div>
        <div className="card"><h3>Tools</h3><div className="tech">{skills.tools.map((x,i)=>(<span className="tag" key={i}>{x}</span>))}</div></div>
      </div>
    </div>
  );
}
