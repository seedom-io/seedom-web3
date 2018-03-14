import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';
import { Link } from 'react-router-dom';
import Score from '../score';
import Field from '../../../field';
import './index.scss';

const MAX_NAME_LENGTH = 32;

class CharityName extends Component {
  static propTypes = {
    status: PropTypes.shape(),
    isLoading: PropTypes.bool,
    onVoteName: PropTypes.func.isRequired
  };

  static defaultProps = {
    status: null,
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
        toastr.warning('SUGGEST', 'new charity form invalid');
      }
    });
  };

  render() {
    const { status, isLoading } = this.props;
    const { name, isNameValid } = this.state;

    if (status.hasVoted) {
      return (
        <div className="voted-row">
          thank you for voting!
        </div>
      );
    } else if (status.hasRight) {
      return (
        <div className="name-row">
          <Field
            format="textbox"
            type="text"
            placeholder="suggest a new charity"
            value={name.toString()}
            maxLength={10}
            disabled={isLoading}
            isValid={isNameValid}
            onChange={this.handleNameChange}
            ref={(component) => { this.name = component; }}
          />
          <Score
            maxScore={status.maxScore}
            disabled={isLoading}
            ref={(component) => { this.score = component; }}
          />
          <div className="field">
            <div className="control">
              <a className="button is-dark" disabled={isLoading} onClick={this.handleSubmit}>vote</a>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="participate-row">
        <div className="field">
          <div className="control">
            <Link className="button is-white is-outlined" to={`${ETH_PATH}`}>participate first to suggest</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CharityName;
