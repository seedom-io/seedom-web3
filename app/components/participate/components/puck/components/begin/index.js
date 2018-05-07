import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import Indicator from '../indicator';
import CauseLogo from '../../../../../causeLogo';
import './index.scss';

class Begin extends Content {
  static propTypes = {
    isShown: PropTypes.bool.isRequired,
    cause: PropTypes.shape(),
    onPlay: PropTypes.func.isRequired
  };

  static defaultProps = {
    cause: null
  };

  handlePlay = () => {
    // always play, but mark played
    this.props.onPlay(true);
  }

  render() {
    const { className } = this.state;
    const { isShown, cause } = this.props;
    return (
      <div className={`seedom-content begin ${className}`}>
        <Indicator type={isShown ? 'waiting' : null} />
        <div className="seedom-overlay layout">
          <div className="division text top small-pad narrow">
            <span>please wait for</span>
          </div>
          <div className="division text center">
            <CauseLogo cause={cause} onClick={this.handlePlay} />
          </div>
          <div className="division text bottom small-pad narrow">
            <span>to begin their fundraiser</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Begin;
