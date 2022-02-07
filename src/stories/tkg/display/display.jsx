import React from 'react';
import PropTypes from 'prop-types';
import './display.css';
let displayProps = {
    backgroundColor: undefined ,
    content:undefined
};
let css = {}
export const DisplayComponent = ({ backgroundColor, ...props }) => {
    //console.log(DisplayComponent.propTypes)
    //displayProps.backgroundColor = backgroundColor
    //displayProps.content = content || textContent
    //init(props)
    
    return (<main 
    className="tkg-display"
    style={backgroundColor && {backgroundColor}}
    {...props}>
    <section className="tkg-display-inner">
    {props.children}
    </section>
    </main>)
}

const init = (props)=>{
    console.log("Init Display")
    let objkeys = Object.keys(document.body.style)
   
    objkeys.forEach(key => {
        css[key] = undefined
    });
    console.log(props)
    
    //console.log(DisplayComponent)
}

DisplayComponent.css = css
DisplayComponent.propTypes = {
    backgroundColor: PropTypes.string,
    content: PropTypes.string.isRequired,
};

DisplayComponent.defaultProps = {
    backgroundColor: "rgb(25, 25, 51)",
    content:"Display"
};
