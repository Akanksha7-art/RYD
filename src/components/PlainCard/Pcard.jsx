import React,{Component} from 'react';
import PcardUI from './PcardUI.jsx';

class Pcard extends Component{
  render(){
    return(
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
        
          <div className="col-md-3">  <PcardUI title="Graphics"/> </div>
          <div className="col-md-3">  <PcardUI title="Systems"/></div>
          <div className="col-md-3">   <PcardUI title="DBMS"/></div>
          <div className="col-md-3">   <PcardUI title="Architecture"/></div>
       </div>
     </div>
    );
  }
}
export default Pcard;
