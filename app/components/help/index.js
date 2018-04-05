import React from 'react';
import { connect } from 'react-redux';
import Sections from '../sections';
import Collapse from '../collapse';

const accessingDesktop = 'accessing-desktop';
const accessingMobile = 'accessing-mobile';
const obtainingEther = 'obtaining-ether';
const participating = 'participating';
const voting = 'voting';

class Help extends Sections {
  render() {
    const { open } = this.state;

    const accessingDesktopOpen = open.includes(accessingDesktop);
    const accessingMobileOpen = open.includes(accessingMobile);
    const obtainingEtherOpen = open.includes(obtainingEther);
    const participatingOpen = open.includes(participating);
    const votingOpen = open.includes(voting);

    return (
      <div>

        <Collapse
          title="accessing seedom on desktop"
          collapsed={!accessingDesktopOpen}
          onToggle={() => this.handleToggle(accessingDesktop)}
        />
        {accessingDesktopOpen && (
          <div>HELLO!</div>
        )}

        <Collapse
          title="accessing seedom on mobile"
          collapsed={!accessingMobileOpen}
          onToggle={() => this.handleToggle(accessingMobile)}
        />
        {accessingMobileOpen && (
          <div>HELLO!</div>
        )}

        <Collapse
          title="obtaining ether"
          collapsed={!obtainingEtherOpen}
          onToggle={() => this.handleToggle(obtainingEther)}
        />
        {obtainingEtherOpen && (
          <div>HELLO!</div>
        )}

        <Collapse
          title="participating in seedom"
          collapsed={!participatingOpen}
          onToggle={() => this.handleToggle(participating)}
        />
        {participatingOpen && (
          <div>HELLO!</div>
        )}

        <Collapse
          title="voting for future causes"
          collapsed={!votingOpen}
          onToggle={() => this.handleToggle(voting)}
        />
        {votingOpen && (
          <div>HELLO!</div>
        )}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return { router: state.router };
};

export default connect(mapStateToProps)(Help);
