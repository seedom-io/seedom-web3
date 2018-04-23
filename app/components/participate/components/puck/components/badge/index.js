import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';
import * as badges from '../../../../../../utils/badges';
import './index.scss';

const getSeedomShareUrl = (params) => {
  return `${SEEDOM_URL}${SEEDOM_PATH}?c=${params.contract}&p=${params.participant}`;
};

const getFacebookShareUrl = (params) => {
  const seedomShareUrl = getSeedomShareUrl(params);
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(seedomShareUrl)}`;
};

const getTwitterShareUrl = (params) => {
  const seedomShareUrl = getSeedomShareUrl(params);
  return `https://twitter.com/share?url=${encodeURIComponent(seedomShareUrl)}`;
};

class Badge extends Content {
  static propTypes = {
    isShown: PropTypes.bool.isRequired,
    onTicketingOver: PropTypes.func.isRequired,
    primaryContractAddresses: PropTypes.shape(),
    account: PropTypes.string,
    participant: PropTypes.shape()
  };

  static defaultProps = {
    primaryContractAddresses: null,
    account: null,
    participant: null
  };

  render() {
    const { className } = this.state;
    const {
      isShown,
      onTicketingOver,
      primaryContractAddresses,
      account,
      participant
    } = this.props;

    if (!primaryContractAddresses || !account || !participant) {
      return null;
    }

    // make sure user has participated (prevents early caching)
    if (participant.entries.isEqualTo(0)) {
      return null;
    }

    const params = {
      contract: primaryContractAddresses.fundraiser.substr(2),
      participant: account.substr(2)
    };

    // get badge url
    const badgeImageUrl = badges.getImageUrl(params);
    const facebookShareUrl = getFacebookShareUrl(params);
    const twitterShareUrl = getTwitterShareUrl(params);

    return (
      <div className={`seedom-content badge ${className}`}>
        <Indicator type={isShown ? 'success' : null} />
        <div className="seedom-overlay layout">
          <div className="division text top huge-pad narrow">
            <span>thank you!<br />share your badge?</span>
          </div>
          <div className="division center">
            <img className="seedom-badge" src={badgeImageUrl} />
          </div>
          <div className="division bottom small-pad">
            <div className="field is-grouped">
              <div className="control">
                <a className="button is-dark" href={badgeImageUrl}>
                  <i className="fas fa-download" />
                </a>
              </div>
              <div className="control">
                <a className="button twitter" href={twitterShareUrl} target="_blank">
                  SHARE&nbsp;<i className="fab fa-twitter" />
                </a>
              </div>
              <div className="control">
                <a className="button facebook" href={facebookShareUrl} target="_blank">
                  SHARE&nbsp;<i className="fab fa-facebook-f" />
                </a>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <a className="button is-white is-outlined" onClick={onTicketingOver}>skip saving</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Badge;
