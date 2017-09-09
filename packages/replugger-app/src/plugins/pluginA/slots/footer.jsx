import React, { PureComponent } from 'react';

import { slot, renderTo } from 'decorators/slot-decorator';
import { renderSlot } from 'services/slots/slots';

import { FOOTER } from 'constants/slot';
import { MY_SLOT } from '../constants/slots';

@slot
class Slot extends PureComponent {
  @renderTo(FOOTER)
  render() {
    return (
      <div>
        <p>Copyright by <strong>replugger</strong></p>
        <div style={{ border: '2px dotted red' }}>
          <span>{'The slot named "MY_SLOT" was created by Plugin A.'}</span>
          { renderSlot(MY_SLOT) }
        </div>
      </div>
    );
  }
}

export default Slot;
