import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';
import CauseLogo from '../../../../../causeLogo';

class Begin extends Content {
  static propTypes = {
    isShown: PropTypes.bool.isRequired,
    deployment: PropTypes.shape()
  };

  static defaultProps = {
    deployment: null
  };

  render() {
    const { className } = this.state;
    const { isShown, deployment } = this.props;
    return (
      <div className={`seedom-content seed ${className}`}>
        <Indicator type={isShown ? 'waiting' : null} />
        <div className="seedom-overlay layout">
          <div className="division text top small-pad narrow">
            <span>please wait for</span>
          </div>
          <div className="division text center">
            <CauseLogo deployment={deployment} />
          </div>
          <div className="division text bottom small-pad narrow">
            <span>to begin their fundraiser</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Begin;
