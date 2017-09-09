import React from 'react';

import Link from 'components/Link/Link';
import { addToSlot } from 'services/slots/slots';
import { EXTERNAL_NAVIGATION_MENU, NAVIGATION_MENU } from 'constants/slot';

import { CONTACT_PAGE_URL } from './pages';

const MY_SLOT = 'MY_SLOT';

addToSlot(EXTERNAL_NAVIGATION_MENU, () => (
  <Link href="https://google.com">
    Google
  </Link>
));

addToSlot(NAVIGATION_MENU, () => (
  <Link to={CONTACT_PAGE_URL}>
    Contact
  </Link>
));

addToSlot(MY_SLOT, () => (
  <span>Plugin B</span>
));
