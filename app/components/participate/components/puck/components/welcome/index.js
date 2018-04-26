import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import { localeDecimal, getEtherFromWei } from '../../../../../../utils/numbers';
import { Link } from 'react-router-dom';
import CauseLogo from '../../../../../causeLogo';
import './index.scss';

class Welcome extends Content {
  static propTypes = {
    deployment: PropTypes.shape(),
    onCountMeIn: PropTypes.func.isRequired
  };

  static defaultProps = {
    deployment: null
  };

  render() {
    const { className } = this.state;
    const { deployment, onCountMeIn } = this.props;

    let etherPerEntry;
    if (deployment) {
      etherPerEntry = localeDecimal(getEtherFromWei(deployment.valuePerEntry));
    }

    return (
      <div className={`seedom-content welcome ${className}`}>
        <div className="seedom-overlay layout">
          <div className="division text top small-pad">
            <div>
              <span>1 entry = {etherPerEntry}</span>
              <span className="ether">
                <i className="fas fa-bars" />
              </span>
            </div>
            <div className="supporting">now seeding</div>
          </div>
          <div className="division center">
            <CauseLogo deployment={deployment} />
          </div>
          <div className="division bottom medium-pad">
            <div className="field">
              <div className="control">
                <Link className="button is-white is-outlined" to="/help">how does this work?</Link>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <a className="button is-dark" onClick={onCountMeIn}>count me in!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
