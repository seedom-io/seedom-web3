import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Content extends Component {
  static propTypes = {
    isShown: PropTypes.bool.isRequired
  };

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
    if (this.props.isShown === newProps.isShown) {
      return;
    }

    if (!newProps.isShown) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    setTimeout(() => {
      this.setState({
        className: 'show'
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

export default Content;
