import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';
import './index.scss';
import causeLogo from '../../../../../../img/logos/cause-logo.png';
import seedomTicket from '../../../../../../../../seedom-assets/ticket/seedom-ticket.svg';
import * as saveSvgAsPng from 'save-svg-as-png';
import * as dates from '../../../../../../utils/dates';
import * as bytes from '../../../../../../utils/bytes';

const MAX_X = 600;
const MAX_Y = 300;

class Ticket extends Content {
  static propTypes = {
    isShown: PropTypes.bool.isRequired,
    onTicketingOver: PropTypes.func.isRequired,
    account: PropTypes.string,
    raiser: PropTypes.shape(),
    participant: PropTypes.shape()
  };

  static defaultProps = {
    account: null,
    raiser: null,
    participant: null
  };

  saveTicket = (address) => {
    // set ticket to seen
    saveSvgAsPng.svgAsPngUri(this.svg, { encoderOptions: 1.0, scale: 1.0 }, (uri) => {
      saveSvgAsPng.download(`seedom-ticket-${address}.png`, uri);
      this.props.onTicketingOver();
    });
  }

  render() {
    const { className } = this.state;
    const {
      isShown,
      onTicketingOver,
      account,
      raiser,
      participant
    } = this.props;

    const address = account ? bytes.shorten(account) : '';
    const message = participant ? participant.message : '';
    const endTime = raiser ? dates.localeDate(raiser.endTime) : '';

    return (
      <div className={`seedom-content ticket ${className}`}>
        <Indicator type={isShown ? 'success' : null} />
        <div className="seedom-overlay layout">
          <div className="division text top huge-pad narrow">
            <span>your ticket</span>
          </div>
          <div className="division center">
            <svg
              className="seedom-ticket"
              viewBox={`0 0 ${MAX_X} ${MAX_Y}`}
              ref={(svg) => { this.svg = svg; }}
            >
              <image xlinkHref={seedomTicket} x="0" y="0" height={MAX_Y} width={MAX_X} />
              <image xlinkHref={causeLogo} x="92" y="155" width="90" />
              <text textAnchor="end" x="570" y="130" fontFamily="CamphorPro Heavy" fontSize="20px" fill="#54BA63">
                {message}
              </text>
              <text textAnchor="end" x="570" y="155" fontFamily="CamphorPro Regular" fontSize="20px" fill="#54BA63">
                YOUR MESSAGE
              </text>
              <text textAnchor="end" x="570" y="190" fontFamily="CamphorPro Heavy" fontSize="20px" fill="#54BA63">
                {address}
              </text>
              <text textAnchor="end" x="570" y="215" fontFamily="CamphorPro Regular" fontSize="20px" fill="#54BA63">
                YOUR ADDRESS
              </text>
              <text textAnchor="end" x="570" y="250" fontFamily="CamphorPro Heavy" fontSize="20px" fill="#54BA63">
                {endTime}
              </text>
              <text textAnchor="end" x="570" y="275" fontFamily="CamphorPro Regular" fontSize="20px" fill="#54BA63">
                END DATE
              </text>
            </svg>
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

export default Ticket;
