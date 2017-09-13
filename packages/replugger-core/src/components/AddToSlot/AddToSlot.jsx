import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addToSlot } from '../../services/slots/slots';

class AddToSlot extends PureComponent {
  constructor(props) {
    super(props);

    const { name, children } = props;

    addToSlot(name, children);
  }

  render() {
    return null;
  }
}

AddToSlot.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.symbol
  ]).isRequired,

  children: PropTypes.node.isRequired
};

export default AddToSlot;
