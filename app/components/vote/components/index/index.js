import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';
import Count from '../count';
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
    voteCount: PropTypes.shape().isRequired,
    maxVoteCount: PropTypes.shape().isRequired,
    causesVoteCount: PropTypes.shape().isRequired,
    ended: PropTypes.bool.isRequired,
    cause: PropTypes.shape().isRequired,
    vote: PropTypes.shape(),
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
    const isFormValid = this.count.validate();
    this.setState({ isFormValid }, done);
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleCancel = () => {
    this.setState({ editing: false });
  };

  handleSubmit = () => {
    this.validateForm(() => {
      if (this.state.isFormValid) {
        const { cause, onVoteIndex } = this.props;
        const count = this.count.value();
        onVoteIndex({ index: cause.index, count });
      } else {
        toastr.warning('VOTE', 'score update form invalid');
      }
    });
  };

  getHeatmapColor = () => {
    return heatmap.color(0);
  };

  render() {
    const {
      voteCount,
      maxVoteCount,
      causesVoteCount,
      ended,
      cause,
      vote,
      isLoading
    } = this.props;

    const { editing } = this.state;

    const available = !ended && voteCount.isLessThan(maxVoteCount);

    return (
      <div className={rowClass(available)} style={{ backgroundColor: this.getHeatmapColor() }}>

        <div className="bit begin header-normal stretch shadow">{cause.name}</div>

        {vote && (
          <div className="bit">VOTED!</div>
        )}

        {(!available || !editing) && (

          <div className="bit shadow">

            <div className="bit header">
              votes
            </div>

            <div className="bit">
              {cause.voteCount.toString()}
            </div>

          </div>

        )}

        {available && (
          <div className="bit">

            {editing && (

              <div className="bit shadow">

                <div className="bit">
                  <Count
                    remainingVoteCount={maxVoteCount.minus(voteCount)}
                    disabled={isLoading}
                    ref={(component) => { this.count = component; }}
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
                      <a className="button is-white" disabled={isLoading} onClick={this.handleCancel}>
                        cancel
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            )}

            {!editing && (
              <div className="bit shadow">
                <div className="field">
                  <div className="control">
                    <a className="button is-white" disabled={isLoading} onClick={this.handleEdit}>
                      vote
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    );
  }
}

export default Index;
