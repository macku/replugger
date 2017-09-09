import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from 'containers/Layout/Layout';
import { getRoutesComponents } from 'services/router/router';

import 'pages';

// eslint-disable-next-line react/prefer-stateless-function
class AppRouter extends PureComponent {
  render() {
    const routes = getRoutesComponents(Route);

    return (
      <Router>
        <Layout>
          {routes}
        </Layout>
      </Router>
    );
  }
}

export default AppRouter;
