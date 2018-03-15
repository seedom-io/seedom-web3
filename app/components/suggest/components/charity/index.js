import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';
import Score from '../score';
import * as heatmap from '../../../../utils/heatmap';
import './index.scss';

class CharityIndex extends Component {
  static propTypes = {
    status: PropTypes.shape().isRequired,
    charity: PropTypes.shape().isRequired,
    vote: PropTypes.shape().isRequired,
    index: PropTypes.number.isRequired,
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

  getHeatmapColor = () => {
    const { charity, status } = this.props;
    const averageScore = charity.totalScores.div(charity.totalVotes);
    const value = averageScore.div(status.maxScore);
    return heatmap.color(value);
  };

  render() {
    const { status, charity, vote, index, isLoading } = this.props;
    const { name, isFormValid } = this.state;

    return (
      <div className="row index" style={{ backgroundColor: this.getHeatmapColor() }}>

        <div className="name">{charity.name}</div>

        <Score
          value={vote}
          maxScore={status.maxScore}
          disabled={isLoading}
          ref={(component) => { this.score = component; }}
        />

        <div className="field">
          <div className="control">
            <a className="button is-dark" disabled={isLoading} onClick={this.handleSubmit}>submit</a>
          </div>
        </div>

      </div>
    );
  }
}

export default CharityIndex;
