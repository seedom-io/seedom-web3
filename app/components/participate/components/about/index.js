import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapse from '../../../collapse';
import './index.scss';

class About extends Component {
  static propTypes = {
    cause: PropTypes.shape()
  };

  static defaultProps = {
    cause: null
  };

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  componentDidMount() {
    this.scrollToElement = require('scroll-to-element');
  }

  play() {
    this.setState({ collapsed: false }, () => {
      this.scrollToElement('#seedom-participate-about', {
        offset: 0,
        ease: 'outCirc',
        duration: 5000
      });
    });
  }

  handleToggle = () => {
    this.setState((prevState) => {
      return { collapsed: !prevState.collapsed };
    });
  }

  render() {
    const { cause } = this.props;
    if (!cause) {
      return null;
    }

    const { collapsed } = this.state;
    return (
      <Collapse id="seedom-participate-about" collapsed={collapsed} title={`about ${cause.name}`} onToggle={this.handleToggle} heavy>
        <div className="seedom-participate-about">
          <div className="video">
            <iframe
              id="video"
              title="video"
              src={`//www.youtube.com/embed/${cause.video}?rel=0${!collapsed ? '&autoplay=1' : ''}`}
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
