import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Link.less';

const Link = ({ href, children, className }) => (
  <a
    className={classnames(styles.link, className)}
    href={href}
  >
    {children}
  </a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Link.defaultProps = {
  className: null
};

export default Link;
