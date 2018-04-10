import React from 'react';
import { connect } from 'react-redux';
import Sections from '../sections';
import Collapse from '../collapse';

class About extends Sections {
  render() {
    const { open } = this.state;

    return (
      <div>

        <Collapse
          title="our mission"
          collapsed={!open.includes('our-mission')}
        >
          <div>HELLO!</div>
        </Collapse>

        <Collapse
          title="about the team"
          collapsed={!open.includes('about-the-team')}
        >
          <div>HELLO!</div>
        </Collapse>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return { router: state.router };
};

export default connect(mapStateToProps)(About);
