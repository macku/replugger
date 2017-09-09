import React, { PureComponent } from 'react';
import { slot, renderTo } from 'replugger';

import Link from '../../../demo-app/src/components/Link/Link';

import { NAVIGATION_MENU } from '../constants/slots';
import { CONTACT_PAGE_URL } from '../routes';

@slot
class Slot extends PureComponent {
  @renderTo(NAVIGATION_MENU)
  render() {
    return (
      <Link to={CONTACT_PAGE_URL}>
        Contact
      </Link>
    );
  }
}

export default Slot;
