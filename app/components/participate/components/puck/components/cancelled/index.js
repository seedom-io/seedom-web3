import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';
import CauseLogo from '../../../../../causeLogo';

class Cancelled extends Content {
  static propTypes = {
    deployment: PropTypes.shape()
  };

  static defaultProps = {
    deployment: null
  };

  render() {
    const { className } = this.state;
    const { deployment } = this.props;
    return (
      <div className={`seedom-content cancelled ${className}`}>
        <Indicator type="error" />
        <div className="seedom-overlay layout">
          <div className="division top medium-pad">
            <CauseLogo deployment={deployment} size="small" />
          </div>
          <div className="division text bottom medium-pad narrow">
            <span>fundraiser cancelled, please check back later</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Cancelled;
