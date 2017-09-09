import React, { PureComponent } from 'react';

import route from 'decorators/route-decorator';
import Aux from 'components/Aux/Aux';

import { CONTACT_PAGE } from '../../routes';

@route(CONTACT_PAGE)
class Contact extends PureComponent {
  render() {
    return (
      <Aux>
        <h1>Contact</h1>
        <p>Welcome to Contact page from Plugin B</p>
      </Aux>
    );
  }
}

export default Contact;
