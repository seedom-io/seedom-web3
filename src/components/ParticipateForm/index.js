import React from 'react';
import PropTypes from 'prop-types';

export default class Participate extends React.PureComponent {
  static propTypes = {
    onAddEntries: PropTypes.func.isRequired,
    onParticipate: PropTypes.func.isRequired,
    hasParticipated: PropTypes.bool.isRequired,
    valuePerEntry: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      seed: '',
      numOfEntries: 0,
    };
  }

  handleSubmit = event => {
    const {
      hasParticipated,
      onAddEntries,
      onParticipate
    } = this.props;

    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }

    if (!hasParticipated) {
      onParticipate({ seed: this.state.seed, numOfEntries: this.state.numOfEntries });
    } else {
      onAddEntries({ numOfEntries: this.state.numOfEntries });
    }
  }

  handleSeedChange = event => {
    this.setState({
      seed: event.target.value,
    });
  }

  handleNumOfEntriesChange = event => {
    this.setState({
      numOfEntries: event.target.value,
    });
  }

  render() {
    const { hasParticipated } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {!hasParticipated && <input placeholder="Seed" onChange={this.handleSeedChange} />}
        <input placeholder="Number of Entries" onChange={this.handleNumOfEntriesChange} />
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}
