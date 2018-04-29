import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';
import CauseLogo from '../../../../../causeLogo';

class Cancel extends Content {
  static propTypes = {
    isLoading: PropTypes.bool,
    onCancel: PropTypes.func.isRequired,
    cause: PropTypes.shape()
  };

  static defaultProps = {
    isLoading: false,
    cause: null
  };

  handleSubmit = () => {
    const { onCancel } = this.props;
    onCancel();
  }

  render() {
    const { className } = this.state;
    const { isLoading, cause } = this.props;

    return (
      <div className={`seedom-content cancel ${className}`}>
        <Indicator type="cancel" />
        <div className="seedom-overlay layout">
          <div className="division top medium-pad">
            <CauseLogo cause={cause} size="small" />
          </div>
          <div className="division text center narrow">
            fundraiser expired, please cancel for the community
          </div>
          <div className="division bottom huge-pad">
            <div className="field">
              <div className="control">
                <a className="button is-dark" disabled={isLoading} onClick={this.handleSubmit}>cancel</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cancel;
