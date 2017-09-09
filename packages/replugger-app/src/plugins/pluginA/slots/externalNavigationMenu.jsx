import React, { PureComponent } from 'react';

import { slot, renderTo } from 'decorators/slot-decorator';

import { EXTERNAL_NAVIGATION_MENU } from 'constants/slot';
import Link from 'components/Link/Link';

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
