import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';
import CauseLogo from '../../../../../causeLogo';

class Cancelled extends Content {
  static propTypes = {
    cause: PropTypes.shape()
  };

  static defaultProps = {
    cause: null
  };

  render() {
    const { className } = this.state;
    const { cause } = this.props;
    return (
      <div className={`seedom-content cancelled ${className}`}>
        <Indicator type="error" />
        <div className="seedom-overlay layout">
          <div className="division top medium-pad">
            <CauseLogo cause={cause} size="small" />
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
