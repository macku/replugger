import React from 'react';

import Link from 'components/Link/Link';
import { addToSlot, renderSlot } from 'services/slots/slots';
import { EXTERNAL_NAVIGATION_MENU, FOOTER, MY_SLOT } from 'constants/slot';

addToSlot(EXTERNAL_NAVIGATION_MENU, () => (
  <Link href="https://wp.pl">
    Wp
  </Link>
));

addToSlot(FOOTER, () => (
  <div>
    <p>Copyright by Maciej Adamczak</p>
    { renderSlot(MY_SLOT) }
  </div>
));
