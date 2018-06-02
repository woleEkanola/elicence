import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
 
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

const RouteProvider = ()=>{
    return(
<Router>
    <div>

  <App /> 
    </div>
  
    </Router>
    )
}

ReactDOM.render(<RouteProvider />, document.getElementById('root'));
registerServiceWorker();
