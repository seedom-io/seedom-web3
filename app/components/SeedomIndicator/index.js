import React, { Component } from 'react';
import './index.scss';

class SeedomIndicator extends Component {
  render() {
    return (
      <div className="seedom-overlay">
        <svg className={`indicator ${this.props.type ? "show" : null}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle className={`circle ${this.props.type}`} cx="26" cy="26" r="25" />
          {{
            "checkmark": (
              <path className="element" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            ),
            "error": (
              <path className="element" d="M13,13 L39,39 M39,13 L13,39" />
            )
          }[this.props.type]}
        </svg>
      </div>
    );
  }
}

export default SeedomIndicator;
