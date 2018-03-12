import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Collapse extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    collapsed: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired
  };

  toggle = () => {
    const collapsed = !this.props.collapsed;
    this.props.onToggle(collapsed);
  };

  render() {
    const { title, collapsed } = this.props;
    return (
      <div className="seedom-collapse" onClick={this.toggle}>
        <span className="toggle left">
          { collapsed ? '+' : '-' }
        </span>
        {title}
        <span className="toggle right">
          { collapsed ? '+' : '-' }
        </span>
      </div>
    );
  }
}

export default Collapse;
