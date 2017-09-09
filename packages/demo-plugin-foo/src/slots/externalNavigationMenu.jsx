import React, { PureComponent } from 'react';
import { slot, renderTo } from 'replugger';

import { EXTERNAL_NAVIGATION_MENU } from 'constants/slot';
import Link from 'components/Link/Link';

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
