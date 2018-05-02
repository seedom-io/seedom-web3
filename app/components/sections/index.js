import { Component } from 'react';

class Sections extends Component {
  constructor(props, opened = []) {
    super(props);
    this.state = {
      open: [...opened]
    };
  }

  componentDidMount() {
    this.scrollToElement = require('scroll-to-element');
    this.handleHash(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.handleHash(newProps);
  }

  handleHash = (props) => {
    const { hash } = props.router.location;
    if (hash === '') {
      return;
    }

    const name = hash.substring(1);
    const index = this.state.open.indexOf(name);
    if (index < 0) {
      this.openAndScroll(name);
    }
  }

  handleToggle = (name) => {
    return () => {
      const index = this.state.open.indexOf(name);
      if (index < 0) {
        this.openAndScroll(name);
      } else {
        this.close(index);
      }
    };
  }

  openAndScroll = (name) => {
    const open = [...this.state.open];
    open.push(name);
    this.setState({ open }, () => {
      this.scrollToElement(`#${name}`);
    });
  }

  close = (index) => {
    const open = [...this.state.open];
    delete open[index];
    this.setState({ open });
  }
}

export default Sections;
