
import React from 'react';
import { work } from '../data/site';
export default function Work(){
  return (
    <div className="container">
      <h2 className="h1">Work</h2>
      <div className="grid grid-3">
        {work.map((w,i)=>(
          <div className="card" key={i}>
            <img className="img" src={w.image} alt={w.title}/>
            <h3>{w.title}</h3>
            <p className="small">{w.description}</p>
            <div className="tech">{w.tech.map((t,idx)=>(<span className="tag" key={idx}>{t}</span>))}</div>
            {w.link && <p style={{marginTop:12}}><a className="btn" href={w.link} target="_blank" rel="noreferrer">Open</a></p>}
          </div>
        ))}
      </div>
    </div>
  );
}
