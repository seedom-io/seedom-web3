import React from 'react';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';
import { localeDecimal, getEtherFromWei } from '../../../../../../utils/numbers';
import Content from '../content';
import Indicator from '../indicator';
import Entries from '../entries';
import CauseLogo from '../../../../../causeLogo';
import './index.scss';

class Raise extends Content {
  static propTypes = {
    deployment: PropTypes.shape(),
    isLoading: PropTypes.bool,
    onRaisingCancelled: PropTypes.func.isRequired
  };

  static defaultProps = {
    deployment: null,
    isLoading: false
  };

  constructor(props) {
    super(props);
    this.state = {
      isFormValid: true
    };
  }

  show() {
    super.show();
    this.entries.focus();
  }

  validateForm = (done) => {
    const isFormValid = this.entries.validate();
    this.setState({ isFormValid }, done);
  }

  handleSubmit = () => {
    this.validateForm(() => {
      if (this.state.isFormValid) {
        const entries = this.entries.value();
        this.props.onRaise(entries);
      } else {
        toastr.warning('RAISE', 'form invalid');
      }
    });
  };

  render() {
    const { className } = this.state;
    const { deployment, isLoading, onRaisingCancelled } = this.props;

    let etherPerEntry;
    if (deployment) {
      etherPerEntry = localeDecimal(getEtherFromWei(deployment.valuePerEntry));
    }

    return (
      <div className={`seedom-content raise ${className}`}>
        <Indicator type={isLoading ? 'waiting' : null} />
        <div className="seedom-overlay">

          <CauseLogo deployment={deployment} size="small" />

          <div className="text">
            1 entry = {etherPerEntry}
            <span className="ether">
              <i className="fas fa-bars" />
            </span>
          </div>

          <Entries
            deployment={deployment}
            disabled={isLoading}
            ref={(component) => { this.entries = component; }}
          />

          <div className="field">
            <div className="control">
              <a className="button is-dark" disabled={isLoading} onClick={this.handleSubmit}>get more entries</a>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <a className="button is-white is-outlined" onClick={onRaisingCancelled}>cancel</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Raise;
