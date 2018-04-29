import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';
import CauseLogo from '../../../../../causeLogo';

class Reveal extends Content {
  static propTypes = {
    isShown: PropTypes.bool.isRequired,
    cause: PropTypes.shape()
  };

  static defaultProps = {
    cause: null
  };

  render() {
    const { className } = this.state;
    const { isShown, cause } = this.props;
    return (
      <div className={`seedom-content end ${className}`}>
        <Indicator type={isShown ? 'waiting' : null} />
        <div className="seedom-overlay layout">
          <div className="division text top small-pad narrow">
            <span>please wait for</span>
          </div>
          <div className="division text center">
            <CauseLogo cause={cause} />
          </div>
          <div className="division text bottom small-pad narrow">
            <span>to reveal their message</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Reveal;
