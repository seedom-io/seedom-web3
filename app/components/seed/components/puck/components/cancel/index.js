import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';

class Cancel extends Content {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired
  }

  handleSubmit = () => {
    const { onCancel } = this.props;
    onCancel();
  }

  render() {
    const { className } = this.state;
    const { isLoading } = this.props;

    return (
      <div className={`seedom-content cancel ${className}`}>
        <Indicator type="cancel" />
        <div className="seedom-overlay layout">
          <div className="division top third">
            <div className="charity-logo small" />
          </div>
          <div className="division text center">
            raiser expired<br />please cancel for<br />the community
          </div>
          <div className="division bottom third">
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
