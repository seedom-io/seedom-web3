import React from 'react';
import { connect } from 'react-redux';
import Sections from '../sections';
import Collapse from '../collapse';
import './index.scss';

class Help extends Sections {
  render() {
    const { open } = this.state;
    return (
      <div className="seedom-help">

        <Collapse
          title="accessing seedom on mobile"
          collapsed={!open.includes('accessing-mobile')}
        >
          <div className="section">
            Hello crazy mobile section!
          </div>
        </Collapse>

        <Collapse
          title="accessing seedom on desktop"
          collapsed={!open.includes('accessing-desktop')}
        >
          <div className="section">

          </div>
        </Collapse>

        <Collapse
          title="obtaining ether"
          collapsed={!open.includes('obtaining-ether')}
        >
          <div>HELLO!</div>
        </Collapse>

        <Collapse
          title="participating in seedom"
          collapsed={!open.includes('participating')}
        >
          <div>HELLO!</div>
        </Collapse>

        <Collapse
          title="voting for future causes"
          collapsed={!open.includes('voting')}
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

export default connect(mapStateToProps)(Help);
