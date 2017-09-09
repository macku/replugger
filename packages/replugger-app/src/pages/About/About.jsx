import React, { PureComponent } from 'react';

import route from 'decorators/route-decorator';
import Aux from 'components/Aux/Aux';

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
