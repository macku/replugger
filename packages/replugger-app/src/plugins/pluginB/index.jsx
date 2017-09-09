import React from 'react';

import Link from 'components/Link/Link';
import { addToSlot } from 'services/slots/slots';
import { EXTERNAL_NAVIGATION_MENU, MY_SLOT } from 'constants/slot';

addToSlot(EXTERNAL_NAVIGATION_MENU, () => (
  <Link href="https://google.com">
    Google
  </Link>
));

addToSlot(MY_SLOT, () => (
  <span>Plugin B</span>
));
