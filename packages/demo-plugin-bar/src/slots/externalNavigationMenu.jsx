import React, { PureComponent } from 'react';
import { slot, renderTo } from 'replugger';

import Link from '../../../demo-app/src/components/Link/Link';

import { EXTERNAL_NAVIGATION_MENU } from '../constants/slots';

@slot
class Slot extends PureComponent {
  @renderTo(EXTERNAL_NAVIGATION_MENU)
  render() {
    return (
      <Link href="https://wp.pl" target="_blank">
        Wp
      </Link>
    );
  }
}

export default Slot;
