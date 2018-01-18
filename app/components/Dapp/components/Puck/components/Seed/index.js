import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import './index.scss';
import charityLogo from '../../../../../../img/logos/charity.png';

class Seed extends Content {
  render() {
    const { className } = this.state;
    const { isShown } = this.props;

    return (
      <div className={`seedom-content seed ${className}`}>
        <Indicator type={isShown ? 'waiting' : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
        </div>
        <div className="seedom-overlay">
          <div className="puck-message top">PLEASE WAIT<br />FOR</div>
          <div className="puck-message">TO SEED<br />THEIR RANDOM</div>
        </div>
      </div>
    );
  }
}

export default Seed;
