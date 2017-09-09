import React, { PureComponent } from 'react';
import { slot, renderTo } from 'replugger';

import { NAVIGATION_MENU } from 'constants/slot';
import Link from 'components/Link/Link';

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
