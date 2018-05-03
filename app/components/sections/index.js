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
      this.open(name, true);
    } else {
      this.scroll(name);
    }
  }

  handleToggle = (name) => {
    return () => {
      const index = this.state.open.indexOf(name);
      if (index < 0) {
        this.open(name);
      } else {
        this.close(index);
      }
    };
  }

  open = (name, scroll) => {
    const open = [...this.state.open];
    open.push(name);
    this.setState({ open }, () => {
      if (scroll) {
        this.scroll(name);
      }
    });
  }

  scroll = (name) => {
    this.scrollToElement(`#${name}`, {
      offset: 0,
      ease: 'outCirc',
      duration: 1000
    });
  }

  close = (index) => {
    const open = [...this.state.open];
    delete open[index];
    this.setState({ open });
  }
}

export default Sections;
