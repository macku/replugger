import React from 'react';
import PropTypes from 'prop-types';

import { renderSlot } from 'services/slots/slots';
import { FOOTER } from 'constants/slot';
import Aux from 'components/Aux/Aux';

import Navigation from 'containers/Navigation/Navigation';

import styles from './Layout.less';

const Layout = ({ children }) => (
  <Aux>
    <content className={styles.appWrapper}>
      <Navigation />

      <main className={styles.content}>
        {children}
      </main>
    </content>

    { renderSlot(FOOTER) }
  </Aux>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
