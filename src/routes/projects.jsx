import React, { useState } from "react";
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter } from 'react'
import './styles/projects.css'


export const Projects = ()=>{

    return(<div className="panel" id="projects">
        <div className="project-item">
            <a href="https://github.com/tgraha09/Dungeon-Rogues" className="toproject"><h3>Dungeon Rogues</h3></a>
            <ul id="details">
                <li className="detail-item">
                    <h4>Genre: 2.5D, Platformer, Rogue-like</h4>
                </li>
                <li className="detail-item">
                    <h4>Platform: PC</h4>
                </li>
                <li className="detail-item">
                <h5 id="desc">Play as a dungeon excavator, battling various monsters throughout multiple floors of a mideval style dungeon. 
                    This is a 2.5D rogue like platformer dungeon looter where the player can find new items throughout each dungeons.</h5>
                <br/>
                </li>
            </ul>
        </div>
        <div className="project-item">
            <a href="https://github.com/tgraha09/next-express" className="toproject"><h3>Ecommerce Shop</h3></a>
            <ul id="details">
                <li className="detail-item">
                    <h4>Frameworks: React, SanityIO, MongoDB, Stripe</h4>
                </li>
                <li className="detail-item">
                    <h4>Platform: Browser</h4>
                </li>
                <li className="detail-item">
                    <h5 id="desc">  Developing a restful ecommerce shop in ReactJS. This microservice is 
                                    M.E.R.N. based and uses SanityIO & Stripe for product schemas and 
                                    payment processing.
                    </h5>
              
                </li>
            </ul>
        </div>
    </div>)
}