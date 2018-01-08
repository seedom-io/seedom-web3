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
    if (this.props.isShown) {
      this.show();
    }
  }

  componentWillReceiveProps(newProps) { //check for the mounted props
    if (!newProps.isShown) {
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
    }, 0);
  }

  hide() {
    setTimeout(() => {
      this.setState({
        className: "hide"
      })
    }, 0);
  }

}

export default SeedomContent;
