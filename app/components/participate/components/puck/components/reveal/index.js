import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';

class Reveal extends Content {
  static propTypes = {
    isShown: PropTypes.bool.isRequired
  };

  render() {
    const { className } = this.state;
    const { isShown } = this.props;
    return (
      <div className={`seedom-content end ${className}`}>
        <Indicator type={isShown ? 'waiting' : null} />
        <div className="seedom-overlay layout">
          <div className="division text top small-pad narrow">
            <span>please wait for</span>
          </div>
          <div className="division text center">
            <div className="charity-logo" />
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
