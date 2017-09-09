import React, { PureComponent } from 'react';
import { slot, renderTo } from 'replugger';

import Link from '../../../demo-app/src/components/Link/Link';

import { EXTERNAL_NAVIGATION_MENU } from '../constants/slots';

@slot
class Slot extends PureComponent {
  @renderTo(EXTERNAL_NAVIGATION_MENU)
  render() {
    return (
      <Link href="https://google.com" target="_blank">
        Google
      </Link>
    );
  }
}

export default Slot;
