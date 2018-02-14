import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import './index.scss';
import charityLogo from '../../../../../../img/logos/charity-logo.png';
import seedomTicket from '../../../../../../../../seedom-assets/ticket/seedom-ticket.svg';
import * as saveSvgAsPng from 'save-svg-as-png';
import * as randoms from '../../../../utils/randoms';
import * as dates from '../../../../utils/dates';

const MAX_X = 600;
const MAX_Y = 300;

class Ticket extends Content {
  saveTicket = () => {
    // set ticket to seen
    saveSvgAsPng.svgAsPngUri(this.svg, { encoderOptions: 0.9, scale: 2.0 }, (uri) => {
      saveSvgAsPng.download('seedom-ticket.png', uri);
      this.props.onTicketSeen();
    });
  }

  render() {
    const { className } = this.state;
    const {
      isShown,
      onTicketSeen,
      raiser,
      random
    } = this.props;

    return (
      <div className={`seedom-content ticket ${className}`}>
        <Indicator type={isShown ? 'success' : null} />
        <div className="seedom-overlay">
          <svg
            className="seedom-ticket"
            viewBox={`0 0 ${MAX_X} ${MAX_Y}`}
            ref={(svg) => { this.svg = svg; }}
          >
            <image xlinkHref={seedomTicket} x="0" y="0" height={MAX_Y} width={MAX_X} />
            <image xlinkHref={charityLogo} x="92" y="155" width="90" />
            <text className="random" textAnchor="end" x="570" y="45" fontFamily="CamphorPro Heavy" fontSize="20px" fill="white">
              {random}
            </text>
            <text className="header" textAnchor="end" x="570" y="70" fontFamily="CamphorPro Regular" fontSize="20px" fill="white">
              YOUR RANDOM MESSAGE
            </text>
            <text className="header" textAnchor="end" x="570" y="190" fontFamily="CamphorPro Heavy" fontSize="20px" fill="white">
              {dates.localeDate(raiser.revealTime)}
            </text>
            <text className="random" textAnchor="end" x="570" y="215" fontFamily="CamphorPro Regular" fontSize="20px" fill="white">
              REVEAL DATE
            </text>
            <text className="header" textAnchor="end" x="570" y="250" fontFamily="CamphorPro Heavy" fontSize="20px" fill="white">
              {dates.localeDate(raiser.endTime)}
            </text>
            <text className="random" textAnchor="end" x="570" y="275" fontFamily="CamphorPro Regular" fontSize="20px" fill="white">
              END DATE
            </text>
          </svg>
        </div>
        <div className="seedom-overlay layout">
          <div className="division text">your<br />ticket</div>
          <div className="division">
            <div className="field">
              <div className="control">
                <a className="button is-dark" onClick={this.saveTicket}>save ticket</a>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <a className="button is-white is-outlined" onClick={onTicketSeen}>skip saving</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ticket;
