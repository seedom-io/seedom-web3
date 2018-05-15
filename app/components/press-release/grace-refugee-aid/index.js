import React from 'react';
import { connect } from 'react-redux';
import Sections from '../../sections';
import './index.scss';

import graceAidLogo from '../../../../../seedom-assets/causes/backgrounds/grace-aid.png';

class PressReleaseGraceRefugeeAid extends Sections {
  render() {
    return (
      <div className="container press-release has-text-white">
        <p className="has-text-right">FOR IMMEDIATE RELEASE: (May 15th, 2018)</p>

        <p>Andreas Papazidis, GRACEaid, andreas@graceaid.org.uk</p>
        <p>Kyle Graden, Seedom, team@seedom.io</p>

        <br />

        <p className="has-text-centered">GRACEaid Voted to Benefit from Seedom Ethereum Fundraiser</p>
        <p className="has-text-centered">
          <i>Seed Funding Aid to Refugees</i>
          <br />

          <img alt="GRACEAid" src={graceAidLogo} />
          <br />
          <i>Photo Credit: Aris Messinis</i>
        </p>

        <br />

        <p>
          <strong>London, United Kingdom:</strong> GRACEaid has been voted to benefit from the Seedom fundraising platform. Seedom is an Ethereum decentralized application for raising awareness and ether for social impact causes in need while rewarding a single participant.
        </p>

        <br />

        <p>
        Upon successful completion of Seedom’s BETA, GRACEaid received the most votes from participants and will receive the funds raised from May 15 to May 25 of this year. In addition to winning the popular vote, GRACEaid meets all Seedom requirements, including:
        </p>

        <br />

        <ul>
          <li><strong>Decentralizing</strong> - believes in the decentralization of power in all forms</li>
          <li><strong>Legitimate</strong> - has a capable team with a clear and effective plan of action</li>
          <li><strong>Active</strong> - is actively working on solving an urgent need</li>
        </ul>

        <br />

        <p>
          &quot;We are grateful the Seedom community chose GRACEaid and that their team is willing to work with us. GRACEaid is a growing, grassroots, and resourceful organization that addresses the physiological needs of refugees and are therefore are an ideal cause to seed fund.&quot; - Kyle Graden, Co-founder &amp; CMO at Seedom
        </p>

        <br />

        <p>
          During the contribution period, anyone can visit <a href="https://www.seedom.io/">seedom.io</a> and buy entries for a chance to win 30% of the total amount raised. GRACEaid will receive 60% of the funds to continue its mission.
        </p>

        <br />

        <p>
          This marks the official, post-BETA start of incentivized routine giving on the blockchain and the Ethereum network to seed fund social impact causes.
        </p>

        <br />

        <p>
          <strong>About GRACEAid:</strong> GRACEaid is an organization of local volunteers in south-east London collecting, sorting, distributing donations and fundraising for refugees in need and destitute families locally and abroad.
        </p>

        <br />

        <p>
          <strong>About Seedom:</strong> Seedom takes the efficiency, security, and transparency of the traditional single-room raffle and re-invents it with trustlessness and crowd-sourced random selection into an entirely new type of fundraiser that scales to the entire world.
        </p>

        <br />

        <p>Visit <a href="http://seedom.io/">www.seedom.io</a> to participate and sign up for email reminders.</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { router: state.router };
};

export default connect(mapStateToProps)(PressReleaseGraceRefugeeAid);
