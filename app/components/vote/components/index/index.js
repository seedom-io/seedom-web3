import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';
import Score from '../score';
import * as heatmap from '../../../../utils/heatmap';
import { localeDecimal } from '../../../../utils/numbers';
import './index.scss';

class Index extends Component {
  static propTypes = {
    caster: PropTypes.shape().isRequired,
    charity: PropTypes.shape().isRequired,
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
        const { charity, onVoteIndex } = this.props;
        const score = this.score.value();
        onVoteIndex({ index: charity.index, score });
      } else {
        toastr.warning('VOTE', 'score update form invalid');
      }
    });
  };

  handleRemove = () => {
    const { charity, onVoteIndex } = this.props;
    onVoteIndex({ index: charity.index, score: 0 });
  };

  getHeatmapColor = () => {
    const { charity, caster } = this.props;
    const value = charity.averageScore.div(caster.maxScore);
    return heatmap.color(value);
  };

  render() {
    const {
      caster,
      charity,
      vote,
      account,
      isLoading
    } = this.props;

    const { editing } = this.state;

    const available =
      vote
      || (charity.caster === account)
      || !caster.totalVotes.isEqualTo(caster.maxVotes);

    const voted = vote && vote.isGreaterThan(0);

    return (
      <div className="row index" style={{ backgroundColor: this.getHeatmapColor() }}>

        <div className="area stretch">

          <div className="bit header-normal stretch">{charity.name}</div>

          <div className="bit header">
            avg score
          </div>

          <div className="bit">
            {localeDecimal(charity.averageScore)}
          </div>

          <div className="bit">|</div>

          <div className="bit header">
            votes
          </div>

          <div className="bit">
            {charity.totalVotes.toString()}
          </div>

        </div>

        {available && (
          <div className="area right">

            {editing && (
              <div className="tools">

                <Score
                  value={vote}
                  maxScore={caster.maxScore}
                  disabled={isLoading}
                  ref={(component) => { this.score = component; }}
                />

                <div className="field bit">
                  <div className="control">
                    <a className="button is-white is-outlined" disabled={isLoading} onClick={this.handleSubmit}>
                      vote
                    </a>
                  </div>
                </div>

                <div className="field bit end">
                  <div className="control">
                    <a className="button is-white is-outlined" disabled={isLoading} onClick={this.handleDone}>
                      done
                    </a>
                  </div>
                </div>

              </div>
            )}

            {!editing && (
              <div className="tools">

                <div className={`field bit ${!voted ? 'end' : ''}`}>
                  <div className="control">
                    <a className="button is-white is-outlined" disabled={isLoading} onClick={this.handleEdit}>
                      vote
                    </a>
                  </div>
                </div>

                {voted && (
                  <div className="field bit end">
                    <div className="control">
                      <a className="button is-white is-outlined" disabled={isLoading} onClick={this.handleRemove}>
                        unvote
                      </a>
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
