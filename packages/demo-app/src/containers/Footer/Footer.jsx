import React, { PureComponent } from 'react';
import { RenderSlot } from 'replugger';

import { FOOTER } from 'constants/slot';

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <RenderSlot name={FOOTER} />
      </footer>
    );
  }
}

export default Footer;
