import React from 'react';

import { renderSlot } from 'services/slots/slots';
import { MENU } from 'constants/slot';
import LinkWrapper from 'components/LinkWrapper/LinkWrapper';

import styles from './App.less';

const App = () => (
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
);

export default App;
