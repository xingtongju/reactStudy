//const greeter = require('./Greeter.js');
//document.querySelector("#root").appendChild(greeter());

import React from 'react'
import {render} from 'react-dom'
import Greeter from './Greeter'
import './main.css';

import config from './config.json'
import About from './About.js'
import App from './App.js'
import Resp from './Resp.js'
// import { Router, Route, hashHistory } from 'react-router'

// const router = (
//     <Router history={hashHistory}>
//         <Route path="/" component={App}>
//             <Route path="/repos" component={Resp}/>
//             <Route path="/about" component={About}/>
//         </Route>
//     </Router>
// );

            // <Route path="/repos" component={Resp}/>
            // <Route path="/about" component={About}/>

// render((
//     <Router history={hashHistory}>
//         <Route path="/" component={App}>
//         </Route>
//     </Router>
// ), document.getElementById('root'));


render(<App/>, document.getElementById('root'));