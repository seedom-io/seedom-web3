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
    const { hash } = props.router.location;
    if (hash !== '') {
      this.state.open = [hash.substring(1)];
    }
  }
}

export default Sections;
