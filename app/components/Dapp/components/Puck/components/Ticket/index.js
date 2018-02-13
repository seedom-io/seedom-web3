import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import './index.scss';
import charityLogo from '../../../../../../img/logos/charity.png';
import seedomTicket from '../../../../../../../../seedom-assets/ticket/seedom-ticket.svg';

const MAX_X = 600;
const MAX_Y = 300;

class Ticket extends Content {
  render() {
    const { className } = this.state;
    const { isShown } = this.props;

    return (
      <div className={`seedom-content ticket ${className}`}>
        <Indicator type={isShown ? 'success' : null} />
        <div className="seedom-overlay">
          <svg
            className="seedom-ticket"
            viewBox={`0 0 ${MAX_X} ${MAX_Y}`}
          >
            <image xlinkHref={seedomTicket} x="0" y="0" height={MAX_Y} width={MAX_X} />
          </svg>
        </div>
        <div className="seedom-overlay layout">
          <div className="division text">your<br />ticket</div>
          <div className="division">
            <div className="field">
              <div className="control">
                <a className="button is-white is-outlined">SKIP SAVING</a>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <a className="button is-dark">SAVE TICKET</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ticket;
