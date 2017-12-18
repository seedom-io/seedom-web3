import React from 'react';
import PropTypes from 'prop-types';

export default class Participate extends React.PureComponent {
  static propTypes = {
    onParticipate: PropTypes.func.isRequired,
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
    const { onParticipate } = this.props;
    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }
    onParticipate({ seed: this.state.seed, numOfEntries: this.state.numOfEntries });
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
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Seed" onChange={this.handleSeedChange} />
        <input placeholder="Number of Entries" onChange={this.handleNumOfEntriesChange} />
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}
