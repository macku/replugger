import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Layout from 'containers/Layout/Layout';

const LayoutRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <Layout>
        <Component {...matchProps} />
      </Layout>
    )}
  />
);

LayoutRoute.propTypes = {
  component: PropTypes.node.isRequired
};

export default LayoutRoute;

