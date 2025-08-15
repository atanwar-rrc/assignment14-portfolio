
import React from 'react';
import { brand } from '../data/site';
export default function Home(){
  return (
    <div className="container">
      <div className="hero">
        <div>
          <div className="badge">{brand.location}</div>
          <h1 className="h1">{brand.title}</h1>
          <p className="lead">{brand.blurb}</p>
          <p style={{marginTop:18}}><a className="btn" href={`mailto:${brand.email}`}>Contact</a></p>
        </div>
        <div>
          <div className="card">
            <h3>Basic Information</h3>
            <div className="list">
              <div><strong>Name:</strong> {brand.name}</div>
              <div><strong>Title:</strong> {brand.title}</div>
              <div><strong>Location:</strong> {brand.location}</div>
              <div><strong>Email:</strong> {brand.email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
