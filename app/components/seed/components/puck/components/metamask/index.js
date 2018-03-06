import React from 'react';
import Content from '../content';
import Indicator from '../indicator';

const METAMASK_URL = 'https://metamask.io';

class Error extends Content {
  openMetamask = () => {
    window.open(METAMASK_URL, '_blank');
  }

  render() {
    const { className } = this.state;
    const { isShown } = this.props;
    return (
      <div className={`seedom-content error ${className}`}>
        <Indicator type={isShown ? 'error' : null} />
        <div className="seedom-overlay layout">
          <div className="division top medium-pad">
            <div className="metamask-logo small" />
          </div>
          <div className="division text center narrow">
            <span>metamask not detected<br />confirm in main menu</span>
          </div>
          <div className="division bottom large-pad">
            <div className="field">
              <div className="control">
                <a className="button is-dark" onClick={this.openMetamask}>INSTALL METAMASK</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
