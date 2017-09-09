import React, { PureComponent } from 'react';

import Aux from 'components/Aux/Aux';

// eslint-disable-next-line react/prefer-stateless-function
class NoMatch extends PureComponent {
  render() {
    return (
      <Aux>
        <h1>404</h1>
        <p>This is not the page you are lookign for</p>
      </Aux>
    );
  }
}

export default NoMatch;
