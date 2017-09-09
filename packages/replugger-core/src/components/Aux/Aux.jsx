import React from 'react';
import PropTypes from 'prop-types';

const Aux = ({ children }) => (
  <div>{children}</div>
);

Aux.propTypes = {
  children: PropTypes.node.isRequired
};

export default Aux;
