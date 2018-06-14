import React from 'react';
import { connect } from 'react-redux';
import Sections from '../../sections';
import './index.scss';

class PressReleaseDonate4Refugees extends Sections {
  render() {
    return (
      <div className="container press-release has-text-white">
        <p className="has-text-right">FOR IMMEDIATE RELEASE: (June 15th, 2018)</p>

        <p>Amber Bauer, Donate4Refugees, [CONTACT]</p>
        <p>Kyle Graden, Seedom, team@seedom.io</p>

        <br />

        <p className="has-text-centered">Donate4Refugees Selected For Third Seedom FUNdraisier</p>
        <p className="has-text-centered">
          <i>Calling Blockchain Enthusiasts to Raise Awareness & ETH During Refugee Week</i>
          <br />
        </p>

        <br />

        <p>
          <strong>City, State:</strong> Donate4Refugees has been selected to benefit from the latest Seedom FUNdraiser with a goal of raising 5 ETH. This round will run from June 15th to June 25th of this year. During the contribution period, anyone can visit <a href="https://www.seedom.io/">seedom.io</a> and donate Ether to be entered to win 35% of the total amount raised.
        </p>

        <br />

        <p>
        Donate4Regugess was chosen because June 8-24 is Refugee Week – and this year is the 20th Anniversary of Refugee Week: Different Pasts, Shared Futures. Facts show that:
        </p>

        <br />

        <ul>
          <li><strong>Fact 1</strong> - deets</li>
          <li><strong>Fact 2</strong> - deets</li>
          <li><strong>Fact 3</strong> - deets</li>
        </ul>

        <br />

        <p>
          <strong>About Donate4Refugees:</strong> Donate4Refugees provides urgent aid to victims of the refugee crisis in Europe. Donate4Refugees is a responsive, inclusive and effective network of donors and grassroots volunteers with a shared goal. That is, to respond to urgent needs for humanitarian aid with solidarity, empathy and human connection in order to save and protect lives. We appreciate every donation and ensure funding is well-targeted, quickly deployed, effective and needs-based. Thank you for supporting Donate4Refugees today. By working together we can and do make a difference to people’s lives.
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

export default connect(mapStateToProps)(PressReleaseDonate4Refugees);
