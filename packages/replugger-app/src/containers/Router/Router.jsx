import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'containers/App/Layout';
import { getRoutesComponents } from 'services/router/router';
import 'pages';

const AppRouter = () => {
  const routes = getRoutesComponents();

  return (
    <Router>
      <App>
        {routes}
      </App>
    </Router>
  );
};

export default AppRouter;
