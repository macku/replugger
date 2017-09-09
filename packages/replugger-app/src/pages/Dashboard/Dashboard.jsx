import React, { PureComponent } from 'react';
import { Aux, route } from 'replugger';

import { HOME_PAGE } from '../../constants/routes';

@route(HOME_PAGE, true)
class Dashboard extends PureComponent {
  render() {
    return (
      <Aux>
        <h1>Dashboard</h1>
        <p>Welcome to Dashboard page</p>
      </Aux>
    );
  }
}

export default Dashboard;
