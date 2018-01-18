import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';
import Indicator from '../Indicator';
import charityLogo from '../../../../img/logos/charity.png';
import './index.scss';

class Raise extends Content {
  static propTypes = {
    isRaising: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      numOfEntries: 0
    };
  }

  show() {
    super.show();
    this.entriesInput.focus();
  }

  handleSubmit = event => {
    const { onRaise } = this.props;
    const { numOfEntries } = this.state;

    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }

    onRaise({ numOfEntries });
  }

  handleNumOfEntriesChange = event => {
    this.setState({
      numOfEntries: event.target.value
    });
  };

  render() {
    const { className } = this.state;
    const { isRaising } = this.props;

    return (
      <div className={`seedom-content raise ${className}`}>
        <Indicator type={isRaising ? 'waiting' : null} />
        <div className="seedom-overlay">
          <img src={charityLogo} />
          <input className="input is-primary" type="text" placeholder="NUMBER OF ENTRIES" disabled={isRaising} onChange={this.handleNumOfEntriesChange} ref={(input) => { this.entriesInput = input; }} />
          <a className="button is-primary is-outlined" disabled={isRaising} onClick={this.handleSubmit}>GET MORE ENTRIES</a>
        </div>
      </div>
    );
  }
}

export default Raise;
