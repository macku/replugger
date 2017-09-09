import React from 'react';

import styles from './App.less';

const App = () => (
  <content className={styles.appWrapper}>
    <aside className={styles.menu}>
      Menu
    </aside>

    <main className={styles.content}>
      <h1>Hello World</h1>
    </main>
  </content>
);

export default App;
