import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapse from '../../../collapse';
import './index.scss';

class About extends Component {
  static propTypes = {
    isPlaying: PropTypes.bool
  };

  static defaultProps = {
    isPlaying: false
  };

  render() {
    const { isPlaying } = this.props;
    return (
      <Collapse collapsed={!isPlaying} title="about cause">
        <div className="centered">
          <div className="field">
            <div className="control">
              <a className="button is-primary" href="https://giveth.io" target="_blank">LEARN MORE AT GIVETH.IO</a>
            </div>
          </div>
          <div className="video">
            <iframe
              id="video"
              title="video"
              src={`//www.youtube.com/embed/i8kjxGxGSkA?rel=0${isPlaying ? '&autoplay=1' : ''}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </Collapse>
    );
  }
}

export default About;
