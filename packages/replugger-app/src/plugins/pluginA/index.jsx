import React from 'react';

import Link from 'components/Link/Link';
import { addToSlot, renderSlot } from 'services/slots/slots';
import { MENU, FOOTER, MY_SLOT } from 'constants/slot';

addToSlot(MENU, () => (
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
