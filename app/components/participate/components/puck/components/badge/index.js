import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';
import './index.scss';

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

    // make sure user has participated
    if (participant.entries.isEqualTo(0)) {
      return null;
    }

    const contractAddressShort = primaryContractAddresses.fundraiser.substr(2);
    const participantAddressShort = account.substr(2);
    const badgeImageUrl = `${BADGER_URL}/badges/${contractAddressShort}/${participantAddressShort}.png`;

    return (
      <div className={`seedom-content badge ${className}`}>
        <Indicator type={isShown ? 'success' : null} />
        <div className="seedom-overlay layout">
          <div className="division text top huge-pad narrow">
            <span>your ticket</span>
          </div>
          <div className="division center">
            <img className="seedom-badge" src={badgeImageUrl} />
          </div>
          <div className="division bottom small-pad">
            <div className="field">
              <div className="control">
                <a className="button is-dark" onClick={() => this.saveTicket(address)}>save your ticket</a>
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
