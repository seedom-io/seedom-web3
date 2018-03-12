import React, { Component } from 'react';
import Field from '../field';
import './index.scss';

class Suggest extends Component {
  render() {
    const { charities, votes } = this.props;
    return (
      <div className="seedom-table">
        <div className="row">
          <Field
            format="textbox"
            type="text"
            placeholder="suggest a new charity"
            value={"value"}
            maxLength={10}
            disabled={false}
            isValid={true}
            ref={(component) => { this.message = component; }}
          />
        </div>
        {charities.map((charity) => (
          <div className="row">
            {charity.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Suggest;
