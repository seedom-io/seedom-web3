import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Indicator extends Component {
  static propTypes = {
    type: PropTypes.string
  };

  static defaultProps = {
    type: null
  };

  render() {
    const { type } = this.props;
    return (
      <div className="seedom-overlay">
        <svg className={`indicator ${type ? 'show' : null}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle className={`circle ${type}`} cx="26" cy="26" r="25" />
        </svg>
      </div>
    );
  }
}

export default Indicator;
