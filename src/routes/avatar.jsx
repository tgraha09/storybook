import React, { useState } from "react";
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter } from 'react'
import './styles/avatar.css'
//profile.jpg
export const Avatar = ()=>{

    return(<div className="avatar">
    <img  src="profile.jpg"  id="profile" alt="avatar"></img>
    <h2 className="taurian"></h2>
  </div>)
}