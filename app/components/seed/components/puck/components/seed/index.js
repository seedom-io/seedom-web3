import React from 'react';
import Content from '../content';
import Indicator from '../indicator';

class Seed extends Content {
  render() {
    const { className } = this.state;
    const { isShown } = this.props;
    return (
      <div className={`seedom-content seed ${className}`}>
        <Indicator type={isShown ? 'waiting' : null} />
        <div className="seedom-overlay layout">
          <div className="division text top small-pad narrow">
            <span>please wait for</span>
          </div>
          <div className="division text center">
            <div className="charity-logo" />
          </div>
          <div className="division text bottom small-pad narrow">
            <span>to seed their secret message</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Seed;
