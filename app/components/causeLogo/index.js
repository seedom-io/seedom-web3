import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as causesResolver from '@seedom-io/seedom-resolver/causes';
import causeLogo from '../../img/logos/cause-logo.png';
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
    const finalImageUrl = ENV === 'production' ? imageUrl : causeLogo;
    return (
      <div className={`cause-logo ${size}`} style={{ backgroundImage: `url(${finalImageUrl})` }} />
    );
  }
}

export default CauseLogo;
