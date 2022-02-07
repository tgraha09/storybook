import React from 'react';
import PropTypes from 'prop-types';
import './test-bttn.css';

/**
 * Primary UI component for user interaction
 */
export const TestButton = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}>
      {label}
    </button>
  );
};



TestButton.propTypes = {
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

TestButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  label:"Test-Button",
  onClick: undefined,
};
