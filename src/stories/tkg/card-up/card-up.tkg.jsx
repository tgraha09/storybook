import React, { useState } from "react";
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter, BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import './card-up.tkg.css';

/**
 * Primary UI component for user interaction
 */
export const CardUp = ({backgroundColor, ...props }) => {
  
  return (
    <div
      className={'tkg-card-up'}
      style={backgroundColor && { backgroundColor }}
      {...props}>
      {props.children}
    </div>
  );
};

CardUp.propTypes = {
  onClick: PropTypes.func
};
  
CardUp.defaultProps = {
  backgroundColor: null,
  children:"",
  onClick: undefined
};