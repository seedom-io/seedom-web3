import React from 'react';
import Content from '../content';
import Indicator from '../indicator';

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
            charitySecret: (
              <div className="charity-logo" />
            ),
            participantSecret: (
              <div className="charity-logo" />
            ),
            metamask: (
              <div className="metamask-logo" />
            )
          }[type]}
        </div>
        <div className="seedom-overlay">
          {{
            charitySecret: (
              <div className="seedom-overlay layout">
                <div className="division text">charity failed<br />to seed</div>
                <div className="division text">their secret<br />message</div>
              </div>
            ),
            participantSecret: (
              <div className="seedom-overlay layout">
                <div className="division text">this raiser<br />has already ended</div>
                <div className="division text">stay tuned for<br />selection</div>
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
