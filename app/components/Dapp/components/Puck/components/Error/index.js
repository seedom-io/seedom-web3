import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';

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
              <div className="charity-logo" />
            ),
            hashedRandom: (
              <div className="charity-logo" />
            ),
            metamask: (
              <div className="metamask-logo" />
            )
          }[type]}
        </div>
        <div className="seedom-overlay">
          {{
            charityHashedRandom: (
              <div className="seedom-overlay layout">
                <div className="division text">charity failed<br />to seed</div>
                <div className="division text">their random<br />message</div>
              </div>
            ),
            hashedRandom: (
              <div className="seedom-overlay layout">
                <div className="division text">participation not<br />detected</div>
                <div className="division text">during<br />participation phase</div>
              </div>
            ),
            metamask: (
              <div className="seedom-overlay layout">
                <div className="division text">metamask plugin</div>
                <div className="division text">not detected</div>
              </div>
            )
          }[type]}
        </div>
      </div>
    );
  }
}

export default Error;
