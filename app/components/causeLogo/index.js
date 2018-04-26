import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as causesResolver from '@seedom-io/seedom-resolver/causes';
import './index.scss';

class CauseLogo extends Component {
  static propTypes = {
    deployment: PropTypes.shape(),
    size: PropTypes.string
  };

  static defaultProps = {
    deployment: null,
    size: null
  };

  render() {
    const { deployment, size } = this.props;
    // make sure we have a deployment
    if (!deployment) {
      return null;
    }

    const imageUrl = causesResolver.getImageUrl(deployment.cause);
    return (
      <div className={`cause-logo ${size}`} style={{ backgroundImage: `url(${imageUrl})` }} />
    );
  }
}

export default CauseLogo;
