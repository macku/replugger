import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { renderSlot } from 'replugger';

import { EXTERNAL_NAVIGATION_MENU, NAVIGATION_MENU } from 'constants/slot';
import LinkWrapper from 'components/LinkWrapper/LinkWrapper';

import styles from './Navigation.less';

// eslint-disable-next-line react/prefer-stateless-function
class Navigation extends PureComponent {
  render() {
    return (
      <aside className={styles.navigation}>
        <h3>Menu</h3>
        <ul className={styles.navigationLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {renderSlot(NAVIGATION_MENU, LinkWrapper)}

          <hr />
          {renderSlot(EXTERNAL_NAVIGATION_MENU, LinkWrapper)}
        </ul>
      </aside>
    );
  }
}

export default Navigation;
