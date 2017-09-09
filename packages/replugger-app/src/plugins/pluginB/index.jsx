import React from 'react';

import Link from 'components/Link/Link';
import { addToSlot } from 'services/slots/slots';
import { MENU } from 'constants/slot';

addToSlot(MENU, (
  <Link href="https://google.com">
    Google
  </Link>
));
