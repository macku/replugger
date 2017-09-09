import React from 'react';

import { renderSlot } from 'services/slots/slots';
import { MENU, FOOTER } from 'constants/slot';
import LinkWrapper from 'components/LinkWrapper/LinkWrapper';
import Aux from 'components/Aux/Aux';

import styles from './App.less';

const App = () => (
  <Aux>
    <content className={styles.appWrapper}>
      <aside className={styles.menu}>
      Menu
        <ul className={styles.menuLinks}>
          { renderSlot(MENU, LinkWrapper) }
        </ul>
      </aside>

      <main className={styles.content}>
        <h1>Hello World</h1>
      </main>
    </content>

    { renderSlot(FOOTER) }
  </Aux>
);

export default App;
