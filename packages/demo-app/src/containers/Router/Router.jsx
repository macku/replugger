import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getRoutesComponents } from 'replugger';

import Layout from 'containers/Layout/Layout';
import NoMatch from 'pages/NoMatch/NoMatch';

import 'pages';

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
