import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import spinner from '../../../../img/spinner.svg';

const getStatus = ({ voteCount, maxVoteCount, ended }) => {
  if (ended) {
    return 'ended';
  } else if (maxVoteCount.isEqualTo(0)) {
    return 'participate';
  } else if (voteCount.isLessThan(maxVoteCount)) {
    return 'decide';
  }
  return 'thanks';
};

class Caster extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    voteCount: PropTypes.shape().isRequired,
    maxVoteCount: PropTypes.shape().isRequired,
    ended: PropTypes.bool.isRequired
  };

  static defaultProps = {
    isLoading: false
  };

  render() {
    const { voteCount, maxVoteCount, ended, isLoading } = this.props;
    const status = getStatus({ voteCount, maxVoteCount, ended });

    return (
      <div className="row caster">
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
                    <i className="fas fa-arrow-alt-circle-left left" />
                    <span>participate first</span>
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

        {isLoading && (
          <div className="bit">
            <object data={spinner} type="image/svg+xml">
              <img src={spinner} alt="loading" />
            </object>
          </div>
        )}

        <div className="bit header">
          <span className="header">votes cast</span>
        </div>

        <div className="bit">
          {voteCount.toString()} / {maxVoteCount.toString()}
        </div>

      </div>
    );
  }
}

export default Caster;
