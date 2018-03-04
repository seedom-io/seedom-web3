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
        <div className="seedom-overlay">
          <div className="charity-logo" />
        </div>
        <div className="seedom-overlay layout">
          <div className="division text">please wait<br />for</div>
          <div className="division text">to seed their<br />secret message</div>
        </div>
      </div>
    );
  }
}

export default Seed;
