import React, { useState } from "react";
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter } from 'react'
import './styles/avatar.css'
import avi from '../media/profile.jpg';
//profile.jpg
export const Avatar = ()=>{

    return(<div className="avatar">
    <img  src={avi}  id="profile" alt="avatar"></img>
    <h2 className="taurian">Taurian Graham</h2>
  </div>)
}