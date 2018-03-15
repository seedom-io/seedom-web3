import React, { Component } from 'react';
import Collapse from '../collapse';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  handleOnToggle = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <div className="seedom-about">
        <Collapse title="about slave free trade" collapsed={collapsed} onToggle={this.handleOnToggle} />
        {!collapsed && (
          <span>ABOUT</span>
        )}
      </div>
    );
  }
}

export default About;
