import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';
import CauseLogo from '../../../../../causeLogo';

class BeginningFailed extends Content {
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
      <div className={`seedom-content seed-failed ${className}`}>
        <Indicator type={isShown ? 'error' : null} />
        <div className="seedom-overlay layout">
          <div className="division top">
            <CauseLogo cause={cause} size="medium" />
          </div>
          <div className="division text bottom huge-pad narrow">
            <span>cause failed to begin their fundraiser</span>
          </div>
        </div>
      </div>
    );
  }
}

export default BeginningFailed;
