import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import './index.scss';
import charityLogo from '../../../../../../img/logos/charity.png';

class Win extends Content {
  render() {
    const { className } = this.state;
    const { isShown, winner, winnerRandom } = this.props;

    return (
      <div className={`seedom-content win ${className}`}>
        <Indicator type={isShown ? "win" : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
        </div>
        <div className="seedom-overlay">
          <div className="congrats">CONGRATULATES</div>
        </div>
        <div className="seedom-overlay">
          <div className="random-title">THEIR MESSAGE TO THE WORLD</div>
          <div className="random">{winnerRandom}</div>
        </div>
        <div className="seedom-overlay">
          <a className="address" href={`https://etherscan.io/address/${winner}`} target="_blank">{winner}</a>
        </div>
      </div>
    );
  }
}

export default Win;
