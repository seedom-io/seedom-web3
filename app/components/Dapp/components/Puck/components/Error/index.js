import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import metamaskLogo from '../../../../../../img/logos/metamask.png';
import charityLogo from '../../../../../../img/logos/charity.png';

class Error extends Content {
  render() {
    const { className } = this.state;
    const { isShown, error } = this.props;

    if (!error) {
      return null;
    }

    const type = error.split('-')[1];

    return (
      <div className={`seedom-content error ${className}`}>
        <Indicator type={isShown ? 'error' : null} />
        <div className="seedom-overlay">
          {{
            charityHashedRandom: (
              <img src={charityLogo} />
            ),
            hashedRandom: (
              <img src={charityLogo} />
            ),
            metamask: (
              <img src={metamaskLogo} />
            )
          }[type]}
        </div>
        <div className="seedom-overlay">
          {{
            charityHashedRandom: (
              <div className="seedom-overlay layout">
                <div className="division text">CHARITY FAILED<br />TO SEED</div>
                <div className="division text">THEIR RANDOM<br />MESSAGE</div>
              </div>
            ),
            hashedRandom: (
              <div className="seedom-overlay layout">
                <div className="division text">PARTICIPATION NOT<br />DETECTED</div>
                <div className="division text">DURING<br />PARTICIPATION PHASE</div>
              </div>
            ),
            metamask: (
              <div className="seedom-overlay layout">
                <div className="division text">METAMASK PLUGIN</div>
                <div className="division text">NOT DETECTED</div>
              </div>
            )
          }[type]}
        </div>
      </div>
    );
  }
}

export default Error;
