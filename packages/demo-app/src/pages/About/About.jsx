import React, { PureComponent } from 'react';
import { Aux, route } from 'replugger';

import { ABOUT_PAGE } from '../../constants/routes';

@route(ABOUT_PAGE)
class About extends PureComponent {
  render() {
    return (
      <Aux>
        <h1>About</h1>
        <p>Welcome to About page</p>
      </Aux>
    );
  }
}

export default About;
