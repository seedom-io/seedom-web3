import React from 'react';
import { connect } from 'react-redux';
import Sections from '../sections';
import './index.scss';

class PressRelease extends Sections {
  render() {
    return (
      <div className="container press-release has-text-white">
        <p className="has-text-right">FOR IMMEDIATE RELEASE: (April 30th, 2018)</p>

        <p>Kyle Graden, Seedom, team@seedom.io</p>
        <p>Kris Decoodt, Giveth, kris@giveth.io</p>

        <br />

        <p className="has-text-centered">Seedom Announces Giveth as Beta Launch Partner For Fundraise DApp</p>
        <p className="has-text-centered">
          <i>Raising Awareness &amp; Ether for Decentralized Altruistic Communities Together</i>
        </p>

        <br />

        <p>
          <strong>Earth:</strong> Seedom is launching a fundraising Ethereum decentralized application (DAPP) that raises awareness and ether for altruistic causes while rewarding a single participant for their contribution and support. <a target="_blank" rel="noopener noreferrer" href="https://giveth.io/">Giveth</a> has been selected to be the first cause to benefit from the Seedom DAPP!
        </p>

        <br />

        <p>
          Giveth was chosen because its platform is a rΞvolution in the world of charitable donations, building and empowering communities and enabling new ways for people to make a difference. Giveth meets all Seedom requirements, including:
        </p>

        <br />

        <ul>
          <li><strong>Decentralizing</strong> - believes in the decentralization of power in all forms</li>
          <li><strong>Legitimate</strong> - has a capable team with a clear and effective plan of action</li>
          <li><strong>Active</strong> - is actively working on solving an urgent need</li>
        </ul>

        <br />

        <p>
          Their fundraising round will run from May 1st to May 10th of this year. During this period, anyone can visit <a href="http://seedom.io">www.seedom.io</a> and contribute ether to be entered to win 30% of the total amount raised for Giveth! Seedom fundraisers now run on the 1st and 15th of every month for various altruistic causes.
        </p>

        <br />

        <p>
          <i>"We are honored to be picked by Seedom for their first test run of their awesome DAPP. We are always looking to support projects focused on using #blockchain4good, it’s sooooo cool to have a project support us!!! Seedom is experimenting with a very cool method to raise funds for charity, aligning incentives between all the participants in a fun way! Our social coding team dove into some of the code and it looks really nice. It has been a pleasure to work with the Seedom team!"</i> - Griff Green, co-founder Giveth
        </p>

        <br />

        <p>
          This marks the start of a new era of incentivized routine giving on the blockchain and the Ethereum network.
        </p>

        <br />

        <p><strong>About Giveth:</strong> Giveth is re-engineering charitable giving, by creating an entirely free, open-source platform, built on the Ethereum Blockchain. Our system cuts out bureaucracy and enables nonprofits to create a high level of transparency and accountability towards Givers. Through the Giveth DApp (Donation Application) you will be able to see how the project is laid out and how much money is required for each part. By reducing the costs and decentralizing the giving process we are putting the power back into the hands of the people.</p>

        <br />

        <p><strong>About Seedom:</strong> Seedom takes the efficiency, security, and transparency of the traditional single-room raffle and re-invents it with trustlessness and crowd-sourced random selection into an entirely new type of fundraiser that scales to the entire world.</p>

        <br />

        <p>Visit <a href="http://seedom.io/">www.seedom.io</a> to participate and sign up for email reminders.</p>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return { router: state.router };
};

export default connect(mapStateToProps)(PressRelease);
