import React from 'react';
import Cards from '../Cards/Cards.jsx';
import Pcard from '../PlainCard/Pcard.jsx';
import './Row-style.css';

const Row =props=>{
    return(
      <div>
      <div className="row-container px-2 ">
        <h4 className="heading">Suggested Topic</h4>
        <a href="https://reactjs.org/docs/getting-started.html" className="btn btn-outline-dark top-button">More</a>
        <Cards/>
      </div>
      <div className="row-container px-2 ">
       <h4 className="heading">Modules</h4>
       <a href="https://reactjs.org/docs/getting-started.html" className="btn btn-outline-dark top-button">More</a>
        <Pcard/>
      </div>
      </div>
    );
}
export default Row;
