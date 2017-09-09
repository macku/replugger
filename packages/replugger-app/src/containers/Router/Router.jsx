import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from 'containers/App/Layout';

import Dashboard from 'pages/Dashboard/Dashboard';
import About from 'pages/About/About';

const AppRouter = () => (
  <Router>
    <App>
      <Route exact path="/" component={Dashboard} />
      <Route path="/about" component={About} />
    </App>
  </Router>
);

export default AppRouter;
