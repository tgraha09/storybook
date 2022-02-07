import React from 'react';
import PropTypes from 'prop-types';
import './button.tkg.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['tkg-button', `tkg-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
    /**
     * Main defintion of proptypes 
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };
  
  Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    label:"TKG-Button",
    onClick: undefined,
  };