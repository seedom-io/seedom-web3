import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Field from '../field';
import './index.scss';

class Suggest extends Component {
  static propTypes = {
    ethereum: PropTypes.shape().isRequired
  };

  render() {
    const { charities, votes } = this.props.ethereum;
    return (
      <div className="seedom-table">
        {charities && (
          <div>
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
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ethereum: state.ethereum };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Suggest);
