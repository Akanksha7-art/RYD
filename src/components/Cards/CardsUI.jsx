import React from 'react';
import './cards-style.css';



const CardsUI = props=>{
  return(
    <div className="card-deck">
      <div className="card text-center">
       <div className="overflow">
        <img src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="img-1"
        className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
            nkdkAKHUHFVUYSGFYUGCYSDCSKBYCGSyicgdWGCUYCGDSYG YUGUYGCUSDCBHJBSH,JSYUGYUG
        </p>
        <a href="https://reactjs.org/docs/getting-started.html" className="btn btn-outline-dark">Go</a>
      </div>
    </div>
    </div>
  );
}
export default CardsUI;
