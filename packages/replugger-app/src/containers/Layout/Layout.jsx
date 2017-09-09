import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Aux } from 'replugger';

import Navigation from 'containers/Navigation/Navigation';
import Footer from 'containers/Footer/Footer';

import styles from './Layout.less';

// eslint-disable-next-line react/prefer-stateless-function
class Layout extends Component {
  render() {
    return (
      <Aux>
        <content className={styles.appWrapper}>
          <Navigation />

          <main className={styles.content}>
            {this.props.children}
          </main>
        </content>

        <Footer />
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

