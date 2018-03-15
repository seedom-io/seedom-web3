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
    vote: PropTypes.shape().isRequired,
    index: PropTypes.number.isRequired,
    account: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    onVoteIndex: PropTypes.func.isRequired
  };

  static defaultProps = {
    isLoading: false
  };

  constructor(props) {
    super(props);
    this.state = {
      isFormValid: true
    };
  }

  validateForm = (done) => {
    const isFormValid = this.score.validate();
    this.setState({ isFormValid }, done);
  };

  handleSubmit = () => {
    this.validateForm(() => {
      if (this.state.isFormValid) {
        const { index, onVoteIndex } = this.props;
        const score = this.score.value();
        onVoteIndex({ index, score });
      } else {
        toastr.warning('SUGGEST', 'score update form invalid');
      }
    });
  };

  handleRemove = () => {
    const { index, onVoteIndex } = this.props;
    onVoteIndex({ index, score: 0 });
  };

  getHeatmapColor = () => {
    const { charity, caster } = this.props;
    const value = charity.averageScore.div(caster.maxScore);
    return heatmap.color(value);
  };

  render() {
    const { caster, charity, vote, index, account, isLoading } = this.props;
    const { name, isFormValid } = this.state;
    const available =
      vote
      || (charity.caster === account)
      || !caster.totalVotes.isEqualTo(caster.maxVotes);

    return (
      <div className="row index" style={{ backgroundColor: this.getHeatmapColor() }}>

        <div className="bit header">{charity.name}</div>

        <div className="bit">
          <span className="header">AVG SCORE</span>
          {localeDecimal(charity.averageScore)}
        </div>

        <div className="bit">
          <span className="header">VOTES</span>
          {charity.totalVotes.toString()}
        </div>

        {available && (
          <Score
            value={vote}
            maxScore={caster.maxScore}
            disabled={isLoading}
            ref={(component) => { this.score = component; }}
          />
        )}

        {available && (
          <div className="field tools">
            <div className="control">
              <a className="button is-dark" disabled={isLoading} onClick={this.handleSubmit}>
                <i className="fas fa-pen-square"></i>
              </a>
            </div>
          </div>
        )}

        {vote && vote.isGreaterThan(0) && (
          <div className="field tools">
            <div className="control">
              <a className="button is-dark" disabled={isLoading} onClick={this.handleRemove}>
                <i className="fas fa-minus-circle"></i>
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Index;
