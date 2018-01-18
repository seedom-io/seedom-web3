import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';
import Indicator from '../Indicator';
import charityLogo from '../../../../img/logos/charity.png';
import './index.scss';

class Cancel extends Content {
  static propTypes = {
    isCancelling: PropTypes.bool.isRequired
  }

  handleSubmit = event => {
    const { onCancel } = this.props;

    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }

    onCancel();
  }

  render() {
    const { className } = this.state;
    const { isCancelling } = this.props;

    return (
      <div className={`seedom-content cancel ${className}`}>
        <Indicator type="cancel" />
        <div className="seedom-overlay">
          <div className="puck-message">END EXPIRED<br />PLEASE CANCEL<br />FOR THE COMMUNITY</div>
        </div>
        <div className="seedom-overlay">
          <img src={charityLogo} />
        </div>
        <div className="seedom-overlay">
        <a className="button is-black is-outlined" disabled={isCancelling} onClick={this.handleSubmit}>CANCEL</a>
        </div>
      </div>
    );
  }
}

export default Cancel;
