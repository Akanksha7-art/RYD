import React,{Component} from 'react';
import CardsUI from './CardsUI';

class Cards extends Component{
  render(){
    return(
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-3">  <CardsUI title="Geography"/> </div>
          <div className="col-md-3">  <CardsUI title="Economics"/></div>
          <div className="col-md-3">   <CardsUI title="History"/></div>
          <div className="col-md-3">   <CardsUI title="Politics"/></div>
       </div>
     </div>


    );
  }
}
export default Cards;
