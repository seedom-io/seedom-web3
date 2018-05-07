import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';
import { zero } from '../../../../utils/numbers';
import Count from '../count';
import Field from '../../../field';

const MAX_NAME_LENGTH = 32;

class Name extends Component {
  static propTypes = {
    voteCount: PropTypes.shape(),
    maxVoteCount: PropTypes.shape(),
    ended: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool,
    onVoteName: PropTypes.func.isRequired
  };

  static defaultProps = {
    isLoading: false,
    voteCount: zero(),
    maxVoteCount: zero()
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
    const isCountValid = this.count.validate();
    this.setState({
      isNameValid,
      isFormValid: isNameValid && isCountValid
    }, done);
  };

  handleNameChange = name => {
    this.setState({ name });
  };

  handleSubmit = () => {
    this.validateForm(() => {
      const { isFormValid, name } = this.state;
      if (isFormValid) {
        const count = this.count.value();
        this.props.onVoteName({ name, count });
      } else {
        toastr.warning('VOTE', 'new cause form invalid');
      }
    });
  };

  render() {
    const { voteCount, maxVoteCount, ended, isLoading } = this.props;
    const { name, isNameValid } = this.state;

    if (ended || voteCount.isEqualTo(maxVoteCount)) {
      return null;
    }

    return (
      <div className="row name">

        <div className="bit begin stretch">
          <Field
            format="textbox"
            type="text"
            placeholder="enter new cause or vote below"
            value={name.toString()}
            maxLength={10}
            disabled={isLoading}
            isValid={isNameValid}
            onChange={this.handleNameChange}
            ref={(component) => { this.name = component; }}
          />
        </div>

        {name.length > 0 && (

          <div className="bit">

            <div className="bit header">
              votes
            </div>

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
                    <i className="fas fa-plus-circle"></i>
                  </a>
                </div>
              </div>
            </div>

          </div>

        )}

      </div>
    );
  }
}

export default Name;
