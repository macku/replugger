import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from 'containers/Layout/Layout';
import { getRoutesComponents } from 'services/router/router';

import 'pages';
import NoMatch from 'pages/NoMatch/NoMatch';

// eslint-disable-next-line react/prefer-stateless-function
class AppRouter extends PureComponent {
  render() {
    const routes = getRoutesComponents(Route);

    return (
      <Router>
        <Layout>
          <Switch>
            {routes}
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default AppRouter;
