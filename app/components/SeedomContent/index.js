import React, { Component } from 'react';
import './index.scss';

class SeedomContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      className: "hide"
    };
  }

  componentDidMount() {
    if (this.props.show) {
      this.show();
    }
  }

  componentWillReceiveProps(newProps) { //check for the mounted props
    if (!newProps.show) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    setTimeout(() => {
      this.setState({
        className: "show"
      });
      this.props.children.focus();
    }, 0);
  }

  hide() {
    setTimeout(() => {
      this.setState({
        className: "hide"
      })
    }, 0);
  }

  render() {
    return (
      <div className={`seedom-overlay animated ${this.state.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default SeedomContent;
