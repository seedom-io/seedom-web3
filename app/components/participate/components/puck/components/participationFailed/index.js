import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';

class ParticipationFailed extends Content {
  static propTypes = {
    isShown: PropTypes.bool.isRequired
  };

  render() {
    const { className } = this.state;
    const { isShown } = this.props;
    return (
      <div className={`seedom-content seed-failed ${className}`}>
        <Indicator type={isShown ? 'error' : null} />
        <div className="seedom-overlay layout">
          <div className="division top">
            <div className="cause-logo" />
          </div>
          <div className="division text bottom giant-pad narrow">
            <span>participation closed, stay tuned for selection</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ParticipationFailed;
