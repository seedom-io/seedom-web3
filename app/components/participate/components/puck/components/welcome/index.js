import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Content from '../content';
import { localeDecimal, getEtherFromWei } from '../../../../../../utils/numbers';
import CauseLogo from '../../../../../causeLogo';
import './index.scss';

class Welcome extends Content {
  static propTypes = {
    deployment: PropTypes.shape(),
    cause: PropTypes.shape(),
    onPlay: PropTypes.func.isRequired,
    onCountMeIn: PropTypes.func.isRequired
  };

  static defaultProps = {
    deployment: null,
    cause: null
  };

  handlePlay = () => {
    // always play, but mark played
    this.props.onPlay(true);
  }

  render() {
    const { className } = this.state;
    const { deployment, cause, onCountMeIn } = this.props;

    let etherPerEntry;
    if (deployment) {
      etherPerEntry = localeDecimal(getEtherFromWei(deployment.valuePerEntry), 3);
    }

    return (
      <div className={`seedom-content welcome ${className}`}>
        <div className="seedom-overlay layout">
          <div className="division text top">
            <div>
              <span>1 entry = {etherPerEntry}</span>
              <span className="ether">
                <i className="fas fa-bars" />
              </span>
            </div>
            <div className="now-benefitting">
              now benefitting
            </div>
          </div>
          <div className="division center">
            <CauseLogo cause={cause} onClick={this.handlePlay} />
          </div>
          <div className="division bottom">
            <div className="field">
              <div className="control">
                <Link className="button is-white is-outlined" to="/help">how does this work?</Link>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <a className="button is-dark play-to-win" onClick={onCountMeIn}>play to win!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
