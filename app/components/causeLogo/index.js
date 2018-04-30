import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as causesResolver from '@seedom-io/seedom-resolver/causes';
import './index.scss';

class CauseLogo extends Component {
  static propTypes = {
    cause: PropTypes.shape(),
    size: PropTypes.string
  };

  static defaultProps = {
    cause: null,
    size: null
  };

  render() {
    const { cause, size } = this.props;
    // make sure we have a cause
    if (!cause) {
      return null;
    }

    const logoUrl = causesResolver.getLogoUrl(cause.image);
    return (
      <div className={`cause-logo ${size}`} style={{ backgroundImage: `url(${logoUrl})` }} />
    );
  }
}

export default CauseLogo;
