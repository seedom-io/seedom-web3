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
        <div className="seedom-overlay layout">
          <div className="division top">
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
          <div className="division text bottom giant-pad narrow">
            {{
              charitySecret: (
                <span>charity failed to seed their secret message</span>
              ),
              participantSecret: (
                <span>this raiser has already ended, stay tuned for selection</span>
              ),
              metamask: (
                <span>metamask plugin not detected</span>
              )
            }[type]}
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
