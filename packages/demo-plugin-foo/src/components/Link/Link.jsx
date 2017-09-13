import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Link.less';

const LinkWrapper = ({ children, className, ...props }) => {
  const Component = props.to ? Link : 'a';

  return (
    <Component
      className={classnames(styles.link, className)}
      {...props}
    >
      {children}
    </Component>
  );
};

LinkWrapper.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

LinkWrapper.defaultProps = {
  to: null,
  href: null,
  className: null
};

export default LinkWrapper;
