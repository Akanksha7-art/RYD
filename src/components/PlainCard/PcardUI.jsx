import React from 'react';
import './Pcard-style.css';



const PcardUI = props=>{
  return(
    <div className="card-deck">
      <div className="card text-center">
       <div className="overflow"></div>
        <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <a href="https://reactjs.org/docs/getting-started.html" className="btn btn-outline-dark">Go</a>
      </div>
    </div>
    </div>
  );
}
export default PcardUI;
