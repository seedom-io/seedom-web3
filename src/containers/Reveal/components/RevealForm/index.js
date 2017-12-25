import React from 'react';
import PropTypes from 'prop-types';

export default class RevealForm extends React.PureComponent {
  static propTypes = {
    onReveal: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      random: ''
    };
  }

  handleSubmit = event => {
    const { onReveal } = this.props;

    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }

    onReveal({ random: this.state.random });
  };

  handleRandomChange = event => {
    this.setState({
      random: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Random" onChange={this.handleRandomChange} />
        <button onClick={this.handleSubmit}>Reveal</button>
      </form>
    );
  }
}
