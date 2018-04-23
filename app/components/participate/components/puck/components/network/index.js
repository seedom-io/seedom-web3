import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';
import { Link } from 'react-router-dom';
import './index.scss';

class Network extends Content {
  static propTypes = {
    isShown: PropTypes.bool.isRequired
  };

  openMetamask = () => {
    window.open(METAMASK_URL, '_blank');
  }

  render() {
    const { className } = this.state;
    const { isShown } = this.props;
    return (
      <div className={`seedom-content ethereum ${className}`}>
        <Indicator type={isShown ? 'error' : null} />
        <div className="seedom-overlay layout">
          <div className="division top medium-pad">
            <div className="ethereum-logo" />
          </div>
          <div className="division text center narrow">
            <span>current network not supported, please change</span>
          </div>
          <div className="division bottom large-pad">
            <div className="field">
              <div className="control">
                <Link className="button is-white is-outlined" to="/help">how to access seedom</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Network;
