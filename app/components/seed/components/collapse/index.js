import React, { Component } from 'react';
import './index.scss';

class Collapse extends Component {
  toggle = () => {
    const collapsed = this.props.collapsed ? false : true;
    this.props.onToggle(collapsed);
  }

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
