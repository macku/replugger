import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { renderSlot } from '../../services/slots/slots';

class RenderSlot extends PureComponent {
  render() {
    const { name, wrapper } = this.props;

    return renderSlot(name, wrapper);
  }
}

RenderSlot.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.symbol
  ]).isRequired,

  wrapper: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func
  ])
};

RenderSlot.defaultProps = {
  wrapper: null
};

export default RenderSlot;
