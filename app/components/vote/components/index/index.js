import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';
import Score from '../score';
import * as heatmap from '../../../../utils/heatmap';
import { localeDecimal } from '../../../../utils/numbers';
import classNames from 'classnames';

const rowClass = (available) => {
  return classNames({
    row: true,
    index: true,
    static: !available
  });
};

class Index extends Component {
  static propTypes = {
    caster: PropTypes.shape().isRequired,
    ended: PropTypes.bool.isRequired,
    cause: PropTypes.shape().isRequired,
    vote: PropTypes.shape(),
    account: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    onVoteIndex: PropTypes.func.isRequired
  };

  static defaultProps = {
    isLoading: false,
    vote: null
  };

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      isFormValid: true
    };
  }

  validateForm = (done) => {
    const isFormValid = this.score.validate();
    this.setState({ isFormValid }, done);
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleDone = () => {
    this.setState({ editing: false });
  };

  handleSubmit = () => {
    this.validateForm(() => {
      if (this.state.isFormValid) {
        const { cause, onVoteIndex } = this.props;
        const score = this.score.value();
        onVoteIndex({ index: cause.index, score });
      } else {
        toastr.warning('VOTE', 'score update form invalid');
      }
    });
  };

  handleRemove = () => {
    const { cause, onVoteIndex } = this.props;
    onVoteIndex({ index: cause.index, score: 0 });
  };

  getHeatmapColor = () => {
    const { cause, caster } = this.props;
    const value = cause.averageScore.div(caster.maxScore);
    return heatmap.color(value);
  };

  render() {
    const {
      caster,
      ended,
      cause,
      vote,
      account,
      isLoading
    } = this.props;

    const { editing } = this.state;

    const available =
      !ended && (
        vote
        || (cause.caster === account)
        || !caster.votes.isEqualTo(caster.maxVotes)
      );

    const voted = vote && vote.isGreaterThan(0);

    return (
      <div className={rowClass(available)} style={{ backgroundColor: this.getHeatmapColor() }}>

        <div className="area stretch">

          <div className="bit begin header-normal stretch">{cause.name}</div>

          <div className="bit header">
            score
          </div>

          <div className="bit">
            {localeDecimal(cause.averageScore)}
          </div>

          <div className="bit">|</div>

          <div className="bit header">
            votes
          </div>

          <div className="bit">
            {cause.votes.toString()}
          </div>

        </div>

        {available && (
          <div className="area right">

            {editing && (
              <div className="tools">

                <div className="bit">
                  <Score
                    value={vote}
                    maxScore={caster.maxScore}
                    disabled={isLoading}
                    ref={(component) => { this.score = component; }}
                  />
                </div>

                <div className="bit">
                  <div className="field">
                    <div className="control">
                      <a className="button is-white" disabled={isLoading} onClick={this.handleSubmit}>
                        vote
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bit">
                  <div className="field">
                    <div className="control">
                      <a className="button is-white" disabled={isLoading} onClick={this.handleDone}>
                        done
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {!editing && (
              <div className="tools">

                <div className="bit">
                  <div className="field">
                    <div className="control">
                      <a className="button is-white" disabled={isLoading} onClick={this.handleEdit}>
                        vote
                      </a>
                    </div>
                  </div>
                </div>

                {voted && (
                  <div className="bit">
                    <div className="field">
                      <div className="control">
                        <a className="button is-white" disabled={isLoading} onClick={this.handleRemove}>
                          unvote
                        </a>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}

          </div>
        )}
      </div>
    );
  }
}

export default Index;
