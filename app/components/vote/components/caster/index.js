import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const getStatus = ({ caster, ended }) => {
  if (ended) {
    return 'ended';
  } else if (caster.maxVotes.isEqualTo(0)) {
    return 'participate';
  } else if (caster.votes.isEqualTo(0)) {
    return 'decide';
  }
  return 'thanks';
};

class Caster extends Component {
  static propTypes = {
    caster: PropTypes.shape().isRequired,
    ended: PropTypes.bool.isRequired
  };

  render() {
    const { caster, ended } = this.props;
    const status = getStatus({ caster, ended });

    return (
      <div className="row caster">
        <div className="area stretch">

          {{
            ended: (
              <div className="bit begin stretch">
                fundraiser ended
              </div>
            ),
            participate: (
              <div className="bit begin stretch">
                <div className="field">
                  <div className="control">
                    <Link className="button is-white is-outlined" to="/">
                      <i className="fas fa-arrow-alt-circle-left" />&nbsp;participate first
                    </Link>
                  </div>
                </div>
              </div>
            ),
            decide: (
              <div className="bit begin stretch">
                help us decide our future!
              </div>
            ),
            thanks: (
              <div className="bit begin stretch">
                thank you for voting!
              </div>
            )
          }[status]}

          <div className="bit header">
            <span className="header">votes cast</span>
          </div>

          <div className="bit">
            {caster.votes.toString()} / {caster.maxVotes.toString()}
          </div>

        </div>
      </div>
    );
  }
}

export default Caster;
