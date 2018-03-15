import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.scss';

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
        {caster.maxVotes.isEqualTo(0) && (
          <div className="field">
            <div className="control">
              <Link className="button is-white is-outlined" to={`${ETH_PATH}`}>participate first to suggest</Link>
            </div>
          </div>
        )}
        {caster.maxVotes.isGreaterThan(0) && (
          caster.totalVotes.isEqualTo(0) ? (
            <div className="status">
              suggest new charity or score existing
            </div>
          ) : (
            <div className="status">
              thank you for voting!
            </div>
          )
        )}
        <div className="votes">
          <span className="header">cast votes</span>&nbsp;&nbsp;
          {caster.totalVotes.toString()} / {caster.maxVotes.toString()}
        </div>
      </div>
    );
  }
}

export default Caster;
