import ReactDOM, { render } from 'react-dom'
import React, { BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter } from 'react'
import './styles/github.css'

export const Github = ()=>{

    return(<div className="panel" id="github">
            <div id="git-list">
                <div className="git-item">
                    <a className="tkg-button" id="git" href="https://github.com/tgraha09/Personal-Projects">
                        <p>Personal Git</p>
                    </a> 
                </div>
                <div className="git-item">
                    <a className="tkg-button" id="git" href="https://github.com/tgraha09/School-Projects">
                        <p>School Git</p>
                    </a> 
                </div>
                
            </div>
        </div>)
}

