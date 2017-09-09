import React, { PureComponent } from 'react';
import { renderSlot } from 'replugger';

import { FOOTER } from 'constants/slot';

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends PureComponent {
  render() {
    return (
      <footer>
        {renderSlot(FOOTER)}
      </footer>
    );
  }
}

export default Footer;
