import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';

class SeedFailed extends Content {
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
            <div className="charity-logo" />
          </div>
          <div className="division text bottom giant-pad narrow">
            <span>charity failed to seed their secret message</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SeedFailed;
