import React from 'react';
import { connect } from 'react-redux';
import Sections from '../sections';
import Collapse from '../collapse';

const ourMission = 'our-mission';
const aboutTheTeam = 'about-the-team';

class About extends Sections {
  render() {
    const { open } = this.state;

    const ourMissionOpen = open.includes(ourMission);
    const aboutTheTeamOpen = open.includes(aboutTheTeam);

    return (
      <div>

        <Collapse
          title="our mission"
          collapsed={!ourMissionOpen}
          onToggle={() => this.handleToggle(ourMission)}
        />
        {ourMissionOpen && (
          <div>HELLO!</div>
        )}

        <Collapse
          title="about the team"
          collapsed={!aboutTheTeamOpen}
          onToggle={() => this.handleToggle(aboutTheTeam)}
        />
        {aboutTheTeamOpen && (
          <div>HELLO!</div>
        )}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return { router: state.router };
};

export default connect(mapStateToProps)(About);
