import React from 'react';

import Link from 'components/Link/Link';
import { addToSlot } from 'services/slots/slots';

addToSlot('menu', () => (
  <Link href="https://wp.pl">
    Wp
  </Link>
));

