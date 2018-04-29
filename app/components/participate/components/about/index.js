import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapse from '../../../collapse';
import './index.scss';

class About extends Component {
  static propTypes = {
    isPlaying: PropTypes.bool,
    cause: PropTypes.shape()
  };

  static defaultProps = {
    isPlaying: false,
    cause: null
  };

  componentDidMount() {
    this.scrollToElement = require('scroll-to-element');
  }

  scrollTo() {
    this.scrollToElement('#seedom-participate-about', {
      offset: 0,
      ease: 'outCirc',
      duration: 3000
    });
  }

  render() {
    const { isPlaying, cause } = this.props;
    if (!cause) {
      return null;
    }

    return (
      <Collapse id="seedom-participate-about" collapsed={!isPlaying} title={`about ${cause.name}`}>
        <div className="seedom-participate-about">
          <div className="video">
            <iframe
              id="video"
              title="video"
              src={`//www.youtube.com/embed/${cause.video}?rel=0${isPlaying ? '&autoplay=1' : ''}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <div className="field">
            <div className="control">
              <a className="button is-dark" href={`https://${cause.url}`} target="_blank">
                {`learn more at ${cause.url}`}
              </a>
            </div>
          </div>
        </div>
      </Collapse>
    );
  }
}

export default About;
