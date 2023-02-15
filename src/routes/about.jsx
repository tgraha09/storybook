import React, { useState } from "react";
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter, useHistory } from 'react-router-dom'
import { Button } from "../stories/tkg/button/button.tkg.jsx";
import './styles/about.css'
import resume from '../media/resume.pdf'

//require('../src/media/resume.pdf')
/*My name is Taurian Graham and I have a Computer Programming background in Game Design & Development from Rochester Institute of Technology.  
                Currently I am an IT Manager with experience in software development, web applications, and project management while also having a demonstrated history of working 
                in retail and payment transactions services. I hope to work with diverse teams for creative projects in the technical industry after my core studies.*/

const sendMail = ()=>{
    console.log("sendMail")
    const email = "tfire09@gmail.com"
    let name = document.body.querySelector("#name").value
    let subject = document.body.querySelector("#subject").value
    let message = document.body.querySelector("#message").value
    let mail = 'mailto:'+name + `<${email}>?subject=` + encodeURIComponent(subject) +'&body=' + encodeURIComponent(message);
    window.open(mail)
}



export const Email = ()=>{

    return(<div className="panel" id="about">
        <Link className="tkg-button" id="link-back" to="/about"><h2>Back</h2></Link>
        <div className="emailForm">
            <form  encType="text/plain" id="emailme">
                <input type="text" className="mail" placeholder="Name" id="name"/>
                
                <input type="text" className="mail" placeholder="Subject" id="subject"/>
                <textarea type="text" className="mail" placeholder="Message" id="message"></textarea>
            </form>
            <div id="submitWrap">
                <Button id="submit" onClick={sendMail} className="tkg-button" ><h2>Submit</h2></Button>
            </div>
        </div>
    </div>)
}

export const About = ()=>{
    //history = new useHistory()
    console.log("ABOUT")
    return(<div className="panel" id="about">
    <p id="bio" className="plainText">
                Hello!<br></br> <br></br>My name is Taurian Graham and I have a Computer Programming background in Game Design & Development from Rochester Institute of Technology.  
                Currently I am a Tech Architecture Delivery Analyst with experience in software development, web applications, and project management. I hope to work with diverse teams for creative projects in the technical industry that are inline with my core studies.
            </p>

            <div className="contact-wrap">
                <a className="tkg-button" id="link-resume" href={resume} target="_blank"><h2>Resume</h2></a>
                <a className="tkg-button" id="link-resume" href="https://www.linkedin.com/in/taurian-graham-b9a6111bb/"><h2>LinkedIn</h2></a>
                <Link className="tkg-button" id="link-email" to="/about/email"><h2>Email</h2></Link>
        </div>
    </div>)
}


/*<Button className="tkg-button"> Button</Button>*/

/**/