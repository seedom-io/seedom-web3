import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Caster extends Component {
  static propTypes = {
    caster: PropTypes.shape()
  };

  static defaultProps = {
    caster: null
  };

  render() {
    const { caster } = this.props;
    return (
      <div className="row caster">
        <div className="area stretch">

          {caster.maxVotes.isEqualTo(0) && (
            <div className="bit begin stretch">
              <div className="field">
                <div className="control">
                  <Link className="button is-white is-outlined" to={`${ETH_PATH}`}>participate first to vote</Link>
                </div>
              </div>
            </div>
          )}

          {caster.maxVotes.isGreaterThan(0) && (
            caster.totalVotes.isEqualTo(0) ? (
              <div className="bit begin stretch">
                help us decide our future!
              </div>
            ) : (
              <div className="bit begin stretch">
                thank you for voting!
              </div>
            )
          )}

          <div className="bit header">
            <span className="header">votes cast</span>
          </div>

          <div className="bit">
            {caster.totalVotes.toString()} / {caster.maxVotes.toString()}
          </div>

        </div>
      </div>
    );
  }
}

export default Caster;
