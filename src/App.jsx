import React, { useState, Component } from "react";
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter, useHistory } from 'react-router-dom'
//import { Switch, Link, Redirect } from 'react'
import logo from './logo.svg'
import './App.css'
import {DisplayComponent as Display} from './stories/tkg/display/display.jsx'
import { About, Email } from "./routes/about.jsx";
import { Projects } from "./routes/projects.jsx";
import { WebApps, AppModule } from "./routes/webapps.jsx";
import { Github } from "./routes/github.jsx";
import { CardUp } from "./stories/tkg/card-up/card-up.tkg.jsx";
import { Button } from "./stories/tkg/button/button.tkg.jsx";
import { Avatar } from "./routes/avatar.jsx";
 
const navButtonBackgroundColor = 'rgb(56, 56, 56)'

const NavArgs = {
  About:{
    backgroundColor: navButtonBackgroundColor,
    children:<Link className="tkg-button" id="link"to="/about"><h2>About</h2></Link> 
  },
  Projects:{
    backgroundColor: navButtonBackgroundColor,
    children:<Link  className="tkg-button" id="link" to="/projects"><h2>Projects</h2></Link>
  },
  WebApps:{
    backgroundColor: navButtonBackgroundColor,
    children:<Link  className="tkg-button" id="link" to="/webapps"><h2>WebApps</h2></Link>
  },
  Github:{
    backgroundColor: navButtonBackgroundColor,
    children:<Link  className="tkg-button" id="link" to="/github"><h2>Github</h2></Link>
  }
}

/*Button({
      backgroundColor: null,
      primary: false,
      size: 'medium',
      label:"About"
    })*/

/* Button({
      backgroundColor: null,
      primary: false,
      size: 'medium',
      label:"Projects"
    })*/



let GalaxyInvaders = () =>{
  return AppModule.GalaxyInvaders()
}
let RecipeFinder = () =>{
  return AppModule.RecipeFinder()
}

/*const Display = () => {
  
  return DisplayComponent({
    backgroundColor: "rgb(25, 25, 51)",
    innerHTML: <About></About>,
    test:"test"
  })
}*/

//console.log(DisplayComponent.css);
//Display.defaultProps = DisplayComponent.args


const Header=()=>{
 
  return (<>
    <Avatar></Avatar>
    <nav> 
      <CardUp {...NavArgs.About}></CardUp>
      <CardUp {...NavArgs.Projects}></CardUp>
      <CardUp {...NavArgs.WebApps}></CardUp>
      <CardUp {...NavArgs.Github}></CardUp>
    </nav>
   </>)
}

export class Portfolio  extends Component{
  constructor(){
    super()
    console.log("Constr");
    this.state = {
      name: "React",
      isUserAuthenticated: true
    };
    //this.appState = 'Home'
    //this.history = undefined
    //currentApp = this;
    //<Redirect from="/" to="/about" />
  }

  render(){
    return (
      <>
        <App />
      </>
    )
  }
}
function App(){
  return (
    <Display>
      <Router>
      <Route exact path={`/`}  > 
          <Header></Header>
          <About></About>
        </Route>
      <Switch>
        <Route exact path={`/about`}  > 
          <Header></Header>
          <About></About>
        </Route>
        <Route exact path={`/about/email`}>
          <Header></Header>
          <Email></Email>
        </Route>
        <Route exact path={`/projects`} >
          <Header></Header>
          <Projects></Projects>
        </Route>
        <Route exact path={`/webapps`} >
          <Header></Header>
          <WebApps></WebApps>
        </Route>
        <Route exact path={`/webapps/galaxy-invaders`} >
          <GalaxyInvaders></GalaxyInvaders>
        </Route>
        <Route exact path={`/github`} >
          <Header></Header>
          <Github></Github>
        </Route>
      </Switch>
    </Router>
  </Display>
  )
}

/*<Route exact path={`/webapps/recipe-finder`} >
            <RecipeFinder></RecipeFinder>
          </Route>*/
//<Route exact path={`/about/email`} component={Email}/>
//export default App
