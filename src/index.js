import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
//import App from "./App.js";
import *as serviceWorker from './serviceWorker';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Row from './components/Rows/Row.jsx';


ReactDOM.render(<Row/>,document.getElementById("root"));
serviceWorker.unregister();
