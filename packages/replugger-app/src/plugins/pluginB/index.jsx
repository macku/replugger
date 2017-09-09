import React from 'react';

import Link from 'components/Link/Link';
import { addToSlot } from 'services/slots/slots';
import { MENU, MY_SLOT } from 'constants/slot';

addToSlot(MENU, () => (
  <Link href="https://google.com">
    Google
  </Link>
));

addToSlot(MY_SLOT, () => (
  <span>Plugin B</span>
));
