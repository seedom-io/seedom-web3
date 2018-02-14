import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';
import Indicator from '../Indicator';
import charityLogo from '../../../../../../img/logos/charity.png';

class Cancel extends Content {
  static propTypes = {
    isCancelling: PropTypes.bool.isRequired
  }

  handleSubmit = () => {
    const { onCancel } = this.props;
    onCancel();
  }

  render() {
    const { className } = this.state;
    const { isCancelling } = this.props;

    return (
      <div className={`seedom-content cancel ${className}`}>
        <Indicator type="cancel" />
        <div className="seedom-overlay">
          <img src={charityLogo} />
        </div>
        <div className="seedom-overlay layout">
          <div className="division text">end expired<br />please cancel<br />for the community</div>
          <div className="division">
            <div className="field">
              <div className="control">
                <a className="button is-dark" disabled={isCancelling} onClick={this.handleSubmit}>cancel</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cancel;
