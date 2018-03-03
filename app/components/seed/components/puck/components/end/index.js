import React from 'react';
import Content from '../content';
import Indicator from '../indicator';

class End extends Content {
  render() {
    const { className } = this.state;
    const { isShown } = this.props;

    return (
      <div className={`seedom-content end ${className}`}>
        <Indicator type={isShown ? 'waiting' : null} />
        <div className="seedom-overlay">
          <div className="seedom-logo" />
        </div>
        <div className="seedom-overlay layout">
          <div className="division text">please wait<br />for</div>
          <div className="division text">to end the<br />raiser</div>
        </div>
      </div>
    );
  }
}

export default End;
