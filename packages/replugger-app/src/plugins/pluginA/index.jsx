import React from 'react';

import Link from 'components/Link/Link';
import { addToSlot, renderSlot } from 'services/slots/slots';
import { EXTERNAL_NAVIGATION_MENU, FOOTER } from 'constants/slot';

const MY_SLOT = 'MY_SLOT';

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
