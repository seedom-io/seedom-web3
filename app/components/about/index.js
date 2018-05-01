import React from 'react';
import { connect } from 'react-redux';
import Sections from '../sections';
import Member from './member';
import './index.scss';
import alex from '../../img/team/alex.jpg';
import eric from '../../img/team/eric.jpg';
import jesse from '../../img/team/jesse.jpg';
import kyle from '../../img/team/kyle.jpg';

const members = [
  {
    imgSrc: alex,
    name: 'Alex Groleau',
    title: 'Founder, Chief Technology Officer (CTO)',
    linkedIn: 'https://www.linkedin.com/in/awgneo',
    github: 'https://github.com/awgneo'
  },
  {
    imgSrc: eric,
    name: 'Eric Thomas',
    title: 'Founder, Chief Information Officer (CIO)',
    linkedIn: 'https://www.linkedin.com/in/eric-l-m-thomas',
    github: 'https://github.com/et'
  },
  {
    imgSrc: jesse,
    name: 'Jesse Kuiper',
    title: 'Founder, Chief Executive Officer (CEO)',
    linkedIn: 'https://www.linkedin.com/in/jesse-kuiper-cpa-771a2111'
  },
  {
    imgSrc: kyle,
    name: 'Kyle Graden',
    title: 'Founder, Chief Marketing Officer (CMO)',
    linkedIn: 'https://www.linkedin.com/in/kylegraden',
    twitter: 'https://twitter.com/KyleGraden'
  }
];

class About extends Sections {
  render() {
    const memberItems = members.map((member) => {
      return (
        <div className="column">
          <Member key={member.name} member={member} />
        </div>
      );
    });

    return (
      <div className="container about has-text-white">
        <p className="is-size-4">
          Seedom is a fun Ethereum decentralized application (DAPP) for raising awareness and Ether for altruistic causes while rewarding a single participant for their contribution and support.
        </p>
        <br />
        <p className="is-size-5">
          It takes the efficiency, security, and transparency of the traditional single-room raffle and re-invents it with trustlessness and crowd-sourced selection into an entirely new type of fundraiser that scales to the entire world.
        </p>
        <br />
        <br />

        <div className="columns">
          {memberItems}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { router: state.router };
};

export default connect(mapStateToProps)(About);
