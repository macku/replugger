import React from 'react';
import PropTypes from 'prop-types';

const AuxComponent = ({ children }) => (
  <div>{children}</div>
);

AuxComponent.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default AuxComponent;
