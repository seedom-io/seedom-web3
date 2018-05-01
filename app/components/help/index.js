import React from 'react';
import { connect } from 'react-redux';
import Sections from '../sections';
import Toggle from '../toggle';
import './index.scss';

class Help extends Sections {
  render() {
    const { open } = this.state;

    return (
      <div className="seedom-help">
        <div className="container">

          <div className="column is-three-fifths is-offset-one-fifth">
            <h3 className="title has-text-white">Understanding Seedom</h3>
            <Toggle
              title="What is Seedom?"
              collapsed={!open.includes('what-is-seedom')}
            >
              Seedom is a innovative way of donating to charities in the form of a game. Similar to a raffle, there is <strong>always</strong> a randomly selected winner which could be anyone that participates. An added incentive is that a portion of the winnings goes towards an altruistic charity.
            </Toggle>
            <Toggle
              title="Why is Seedom different?"
              collapsed={!open.includes('why-is-seedom-different')}
            >
              Unlike standard raffles (and lotteries, etc.), Seedom is a decentralized open source application built on the Ethereum network. Because of the public transparency of Seedom, it is protected from malicious use.
            </Toggle>
          </div>

          <div className="column is-three-fifths is-offset-one-fifth">
            <h3 className="title has-text-white">Getting Started</h3>
            <Toggle
              title="Accessing on mobile"
              collapsed={!open.includes('accessing-mobile')}
            >
              To use Seedom on mobile, we recommend the <a target="_blank" rel="noopener noreferrer" href="https://www.cipherbrowser.com/">Cipher app</a>. You will need to put Ether into your Cipher wallet in order to participate.
            </Toggle>
            <Toggle
              title="Accessing on desktop"
              collapsed={!open.includes('accessing-desktop')}
            >
              To use Seedom on the desktop, you will need to install <a target="_blank" rel="noopener noreferrer" href="https://metamask.io/">MetaMask</a> or use the <a target="_blank" rel="noopener noreferrer" href="https://brave.com/">Brave browser</a>. You will need to put Ether into your MetaMask wallet in order to participate.
            </Toggle>
          </div>

          <div className="column is-three-fifths is-offset-one-fifth">
            <h3 className="title has-text-white">Playing Seedom</h3>
            <Toggle
              title="Participating"
              collapsed={!open.includes('playing-participating')}
            >
              The first phase of Seedom is the participation phase. In this stage, anyone is welcome to participate in Seedom by selecting a number of entries, entering a message, and sending.
              <br />
              <br />
              The number of entries you choose increases your likelihood of being chosen the random winner.
              <br />
              <br />
              The message can be anything you want. It could be your name. It could be your favorite catchphrase. Anything at all. The beauty about Seedom is that there is no censorship and since Seedom runs on the blockchain, your message is publicly visible and permanent. Even better is that your message will actually affect how the random selection works (see below: <i>Why is Seedom better?</i>).
            </Toggle>

            <Toggle
              title="Revelation"
              collapsed={!open.includes('playing-revelation')}
            >
              After two weeks, the reveal phase happens. The charity reveals their secret message which kicks off the selection process. The game ends and a randomly selected participant takes home a portion of the pool. The remainder of that pool goes to Seedom’s bi-weekly charity. The following day the game starts again.
            </Toggle>
          </div>

          <div className="column is-three-fifths is-offset-one-fifth">
            <h3 className="title has-text-white">Other</h3>
            <Toggle
              title="Why is Seedom better?"
              collapsed={!open.includes('why-is-seedom-better')}
            >
              There exists an abundance of chance games in the Ethereum network. The problem with all of them is that they use an algorithm that can be defeated by <a target="_blank" rel="noopener noreferrer" href="https://blog.keep.network/miners-arent-your-friends-cde9b6e0e9ac">miner manipulation</a> or they rely on a a centralized third party random number supplier.
              <br />
              <br />
              Seedom’s algorithm takes a secret message from Seedom, a secret message from the charity, and eight randomly selected participant messages to determine the winner. This makes Seedom close to impossible to tamper with. The <a target="_blank" rel="noopener noreferrer" href="https://github.com/seedom-io/seedom-whitepaper/raw/master/seedom-whitepaper.pdf">whitepaper</a> goes into more technical detail of how this works.
            </Toggle>

            <Toggle
              title="How does Seedom make money?"
              collapsed={!open.includes('how-does-seedom-make-money')}
            >
              Seedom does incur operating costs and as a result does take a nominal 5% cut on each fundraiser.
            </Toggle>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { router: state.router };
};

export default connect(mapStateToProps)(Help);
