import { Component } from 'react';

class Sections extends Component {
  constructor(props, opened = []) {
    super(props);
    this.state = {
      open: [...opened]
    };
    // handle #toggles
    this.handleHash(props);
  }

  componentWillReceiveProps(newProps) {
    this.handleHash(newProps);
  }

  handleHash = (props) => {
    const hash = props.router.location.hash;
    if (hash !== '') {
      this.state.open = [hash.substring(1)];
    }
  }

  handleToggle = (name) => {
    const newState = { open: [...this.state.open] };
    const openIndex = newState.open.indexOf(name);
    if (openIndex >= 0) {
      delete newState.open[openIndex];
    } else {
      newState.open.push(name);
    }

    this.setState(newState);
  }
}

export default Sections;
