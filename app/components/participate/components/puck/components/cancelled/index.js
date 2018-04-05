import React from 'react';
import Content from '../content';
import Indicator from '../indicator';

class Cancelled extends Content {
  render() {
    const { className } = this.state;

    return (
      <div className={`seedom-content cancelled ${className}`}>
        <Indicator type="error" />
        <div className="seedom-overlay layout">
          <div className="division top medium-pad">
            <div className="cause-logo small" />
          </div>
          <div className="division text bottom medium-pad narrow">
            <span>fundraiser cancelled, please check back later</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Cancelled;
