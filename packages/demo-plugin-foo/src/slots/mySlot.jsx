import React, { PureComponent } from 'react';
import { slot, renderTo } from 'replugger';

import { MY_SLOT } from '../constants/slots';

@slot
class Slot extends PureComponent {
  @renderTo(MY_SLOT)
  render() {
    return (
      <span>{'Plugin B can populate to "MY_SLOT"'}</span>
    );
  }
}

export default Slot;
