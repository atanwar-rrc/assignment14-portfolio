
import React from 'react';
import { resources } from '../data/site';
export default function Resources(){
  return (
    <div className="container">
      <h2 className="h1">Resources</h2>
      <div className="grid grid-3">
        {resources.map((r,i)=>(
          <div className="card" key={i}>
            <img className="img" src={r.image} alt={r.title}/>
            <h3>{r.title}</h3>
            <p className="small">{r.summary}</p>
            {r.link && <p style={{marginTop:12}}><a className="btn" href={r.link} target="_blank" rel="noreferrer">Open</a></p>}
          </div>
        ))}
      </div>
    </div>
  );
}
