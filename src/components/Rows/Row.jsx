import React from 'react';
import Cards from '../Cards/Cards.jsx';
import Pcard from '../PlainCard/Pcard.jsx';
import './Row-style.css';

const Row =props=>{
    return(
      <div>
      <div className="row-container px-2 ">
        <h4 className="heading">Suggested Topic</h4>
        <Cards/>
      </div>
      <div className="row-container px-2 ">
       <h4 className="heading">Modules</h4>
        <Pcard/>
      </div>
      </div>
    );
}
export default Row;
