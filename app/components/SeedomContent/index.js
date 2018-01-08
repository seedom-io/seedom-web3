import React, { Component } from 'react';
import './index.scss';

class SeedomContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      className: null
    };
  }

  componentDidMount() {
    if (this.props.isShown) {
      this.show();
    }
  }

  componentWillReceiveProps(newProps) {
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
        className: null
      })
    }, 0);
  }

}

export default SeedomContent;
