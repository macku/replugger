import React from 'react';
import PropTypes from 'prop-types';

const LinkWrapper = ({ children }) => (
  <li>
    {children}
  </li>
);

LinkWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default LinkWrapper;
