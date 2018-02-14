import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';

class Cancelled extends Content {
  render() {
    const { className } = this.state;

    return (
      <div className={`seedom-content cancelled ${className}`}>
        <Indicator type="error" />
        <div className="seedom-overlay">
          <div className="charity-logo" />
        </div>
        <div className="seedom-overlay layout">
          <div className="division text">raiser</div>
          <div className="division text">cancelled</div>
        </div>
      </div>
    );
  }
}

export default Cancelled;
