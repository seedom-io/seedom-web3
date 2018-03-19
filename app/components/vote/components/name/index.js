import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';
import { Link } from 'react-router-dom';
import Score from '../score';
import Field from '../../../field';
import './index.scss';

const MAX_NAME_LENGTH = 32;

class Name extends Component {
  static propTypes = {
    caster: PropTypes.shape(),
    isLoading: PropTypes.bool,
    onVoteName: PropTypes.func.isRequired
  };

  static defaultProps = {
    caster: null,
    isLoading: false
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isNameValid: true,
      isFormValid: true
    };
  }

  validateForm = (done) => {
    const { name } = this.state;
    const isNameValid = (name.length > 1) && (name.length <= MAX_NAME_LENGTH);
    const isScoreValid = this.score.validate();
    this.setState({
      isNameValid,
      isFormValid: isNameValid && isScoreValid
    }, done);
  };

  handleNameChange = name => {
    this.setState({ name });
  };

  handleSubmit = () => {
    this.validateForm(() => {
      const { isFormValid, name } = this.state;
      if (isFormValid) {
        const score = this.score.value();
        this.props.onVoteName({ name, score });
      } else {
        toastr.warning('VOTE', 'new charity form invalid');
      }
    });
  };

  render() {
    const { caster, isLoading } = this.props;
    const { name, isNameValid } = this.state;

    if (caster.totalVotes.isEqualTo(caster.maxVotes)) {
      return null;
    }

    return (
      <div className="row name">

        <Field
          format="textbox"
          type="text"
          placeholder="enter new charity or vote below"
          value={name.toString()}
          maxLength={10}
          disabled={isLoading}
          isValid={isNameValid}
          onChange={this.handleNameChange}
          ref={(component) => { this.name = component; }}
        />

        {name.length > 0 && (
          <div className="tools">

            <div className="bit header">
              score
            </div>

            <Score
              maxScore={caster.maxScore}
              disabled={isLoading}
              ref={(component) => { this.score = component; }}
            />

            <div className="field">
              <div className="control">
                <a className="button is-white" disabled={isLoading} onClick={this.handleSubmit}>
                  <i className="fas fa-plus-circle"></i>
                </a>
              </div>
            </div>

          </div>
        )}

      </div>
    );
  }
}

export default Name;
