import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as causesResolver from '@seedom-io/seedom-resolver/causes';
import './index.scss';

class Background extends Component {
  static propTypes = {
    cause: PropTypes.shape()
  };

  static defaultProps = {
    cause: null
  };

  render() {
    const { cause } = this.props;
    // make sure we have a cause
    if (!cause) {
      return null;
    }

    const backgroundImage = causesResolver.getBackgroundUrl(cause.image);
    return (
      <div
        className='seedom-participate-background'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Background;
