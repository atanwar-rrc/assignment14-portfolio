
import React from 'react';
import { setup } from '../data/site';
export default function Setup(){
  return (
    <div className="container">
      <h2 className="h1">Developer Setup</h2>
      <div className="grid">
        <div className="card"><h3>VS Code Setup</h3><ul>{setup.vscode.map((x,i)=>(<li key={i} className="small">{x}</li>))}</ul></div>
        <div className="card"><h3>Terminal Setup</h3><ul>{setup.terminal.map((x,i)=>(<li key={i} className="small">{x}</li>))}</ul></div>
        <div className="card"><h3>Preferred Editor Font</h3><p className="small">{setup.font}</p></div>
      </div>
    </div>
  );
}
