import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Content from '../content';
import Indicator from '../indicator';
import './index.scss';

class Network extends Content {
  static propTypes = {
    isShown: PropTypes.bool.isRequired
  };

  openMetamask = () => {
    window && window.open(METAMASK_URL, '_blank');
  }

  render() {
    const { className } = this.state;
    const { isShown } = this.props;
    return (
      <div className={`seedom-content network ${className}`}>
        <Indicator type={isShown ? 'error' : null} />
        <div className="seedom-overlay layout">
          <div className="division top medium-pad">
            <div className="ethereum-logo" />
          </div>
          <div className="division text center squish narrow">
            <span>oops!<br />we don't support the network you've selected</span>
          </div>
          <div className="division bottom large-pad">
            <div className="field">
              <div className="control">
                <Link className="button is-white is-outlined how-to-access" to="/help">how to participate</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Network;
