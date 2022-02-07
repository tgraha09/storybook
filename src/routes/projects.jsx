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
            <a href="https://github.com/tgraha09/PerlinSimulator" className="toproject"><h3>Perlin Simulator</h3></a>
            <ul id="details">
                <li className="detail-item">
                    <h4>Frameworks: React, ViteJS</h4>
                </li>
                <li className="detail-item">
                    <h4>Platform: Browser</h4>
                </li>
                <li className="detail-item">
                <h5 id="desc"> Developing a simulator for testing Perlin noise in level design by manipulating terrain data. <br/>
                    This is to help illustrate different algorithms that could be used for terrain building. </h5>
              
                </li>
            </ul>
        </div>
    </div>)
}