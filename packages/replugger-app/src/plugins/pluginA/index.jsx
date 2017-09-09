import React from 'react';

import Link from 'components/Link/Link';
import { addToSlot, renderSlot } from 'services/slots/slots';
import { EXTERNAL_NAVIGATION_MENU, FOOTER } from 'constants/slot';

const MY_SLOT = 'MY_SLOT';

addToSlot(EXTERNAL_NAVIGATION_MENU, () => (
  <Link href="https://wp.pl" target="_blank">
    Wp
  </Link>
));

addToSlot(FOOTER, () => (
  <div>
    <p>Copyright by Maciej Adamczak</p>
    <div style={{ border: '2px dotted red' }}>
      <span>{'The slot named "MY_SLOT" was created by Plugin A.'}</span>
      { renderSlot(MY_SLOT) }
    </div>
  </div>
));
