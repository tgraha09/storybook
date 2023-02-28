import React, { useState } from "react";
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter } from 'react-router-dom'
import { Button } from "../stories/tkg/button/button.tkg.jsx";
import './styles/webapps.css'
//import '../projects/sprint4/index.html'
export const AppModule = {
    GalaxyInvaders:()=>{
        return(<>
        <Link className="tkg-button" id="link-back" to="/webapps"><h2>Back</h2></Link>
        <iframe className="galaxy-invaders" src="../src/projects/sprint4/index.html">    
        </iframe>
        </>)
    },
    RecipeFinder:()=>{
       // window.location = 'https://tkg3369-project2.herokuapp.com/'
        return(<>
        <Link className="tkg-button" id="link-back" to="/webapps"><h2>Back</h2></Link>
        <iframe className="recipe-finder" src="">    
        </iframe>
        </>)
    }
}

/*<ul>
          <br><h2>Directions: </h2>
          <li>
            W - Jump 
          </li>
          <li>
            S - Slide
          </li>
          <li>
            Z - Diveroll 
          </li>
          <li>
            Dodge grey obsticles, but dive or slide into Aliens to gain points. 
          </li>
        </ul>*/


export const WebApps = ()=>{

    return(<div className="panel" id="webapps">
        <div id="app-list">
            <div className="app-item">
              <a className="tkg-button" id="web-app" href="https://autonomous-agents.pages.dev/">
                <p>Autonomous Agents</p>
              </a>
              <p>Web App</p>
            </div>
            
            <div className="app-item">
              <a className="tkg-button" id="web-app" href="https://tgramz-express.herokuapp.com/">
                <p>Ecommerce Shop</p>
              </a>
              <p>Web Service</p>
            </div>

            <div className="app-item">
              <a className="tkg-button" id="web-app" href="https://paper-analyzer.pages.dev/">
                <p>Paper Analyzer</p>
              </a>
              <p>Web Service</p>
            </div>
        </div>
    </div>)
}