import React, { PureComponent } from 'react';

import route from 'decorators/route-decorator';
import Aux from 'components/Aux/Aux';

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
