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
        <div className="container">

          <div className="column is-three-fifths is-offset-one-fifth">
            <h3 className="title has-text-white">Understanding Seedom</h3>
            <Collapse
              title="What is Seedom?"
              collapsed={!open.includes('what-is-seedom')}
              onToggle={this.handleToggle('what-is-seedom')}
            >
              Seedom is a innovative way of funding altruistic causes in the form of a game. Similar to a raffle, there is <strong>always</strong> a randomly selected winner, which could be anyone that participates. The cause will receive 60% of the funds raised, and the winner will receive 30%. Seedom restarts on the 1st and 15th of every month for a new altruistic cause. After you participate, you can also have <a href="#point-of-voting">a say</a> in which causes we support in the future!
            </Collapse>
            <Collapse
              title="Why is Seedom different?"
              collapsed={!open.includes('why-is-seedom-different')}
              onToggle={this.handleToggle('why-is-seedom-different')}
            >
              Unlike standard raffles (and lotteries, etc.), Seedom is a decentralized open source application built on the Ethereum blockchain. It takes the efficiency, security, and transparency of the traditional single-room raffle and re-invents it with trustlessness and crowd-sourced selection into an entirely new type of completely secure fundraiser that scales to the entire world.
            </Collapse>
          </div>

          <div className="column is-three-fifths is-offset-one-fifth">
            <h3 className="title has-text-white">Getting Started</h3>
            <Collapse
              id="obtaining-ether"
              title="Obtaining Ether to play"
              collapsed={!open.includes('obtaining-ether')}
              onToggle={this.handleToggle('obtaining-ether')}
            >
              The first step is obtaining Ether, the currency of the Ethereum platform. The easiest way to do this is through <a target="_blank" rel="noopener noreferrer" href="https://www.coinbase.com/">Coinbase</a> on the desktop or through their <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.coinbase.android&hl=en_US">Android</a> or <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/us/app/coinbase-buy-bitcoin-more/id886427730?mt=8">iOS</a> apps.
            </Collapse>
            <Collapse
              title="Accessing on mobile"
              collapsed={!open.includes('accessing-mobile')}
              onToggle={this.handleToggle('accessing-mobile')}
            >
              To use Seedom on mobile, we recommend the <a target="_blank" rel="noopener noreferrer" href="https://www.cipherbrowser.com/">Cipher mobile browser</a> for <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.hideitpro.chat&hl=en_US">Android</a> or <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/us/app/cipher-sender/id548958077?mt=8">iOS</a>. You will need to <a href="#obtaining-ether">put Ether</a> into your Cipher wallet in order to participate.
            </Collapse>
            <Collapse
              title="Accessing on desktop"
              collapsed={!open.includes('accessing-desktop')}
              onToggle={this.handleToggle('accessing-desktop')}
            >
              To use Seedom on the desktop, you will need to install <a target="_blank" rel="noopener noreferrer" href="https://metamask.io/">MetaMask</a> or use the <a target="_blank" rel="noopener noreferrer" href="https://brave.com/">Brave browser</a>. You will need to <a href="#obtaining-ether">put Ether</a> into your MetaMask wallet in order to participate.
              <br />
              <br />
              <iframe title="Installing Metamask" width="100%" height="315" src="https://www.youtube.com/embed/tfETpi-9ORs?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen="" />
            </Collapse>
          </div>

          <div className="column is-three-fifths is-offset-one-fifth">
            <h3 className="title has-text-white">Playing Seedom</h3>
            <Collapse
              title="How do I play?"
              collapsed={!open.includes('how-do-i-play')}
              onToggle={this.handleToggle('how-do-i-play')}
            >
              To play Seedom, click the participate tab at the top of this page or go to <a target="_blank" rel="noopener noreferrer" href="https://seedom.io">Seedom.io</a>. Click "COUNT ME IN!" and enter the number of entries you would like to buy, a message to the world that can be up to 32 characters, and an optional email address.
              <br />
              <br />
              Each entry is intended to cost $2 USD in Ether at the beginning of each ten day fundraiser. Enter quickly as we expect this price to fluctuate due to the volatility of Ether. The number of entries you choose increases your likelihood of being chosen the random winner.
              <br />
              <br />
              Your public message to the world be anything you want! It could be your name. It could be your favorite catchphrase or even the name of your Cryptokitty. Anything at all. The beauty about Seedom is that there is no censorship and since Seedom runs on the blockchain, your message is publicly visible and permanent. Even better is that your message will actually affect how the random winner selection process works.
            </Collapse>
            <Collapse
              title="Finding out if you won"
              collapsed={!open.includes('finding-out-if-you-won')}
              onToggle={this.handleToggle('finding-out-if-you-won')}
            >
              The fundraiser ends ten days after it has started. Both the cause and Seedom will reveal secret messages used to start the fundraiser. These messages, combined with those of the participants, will be used to select a winner and allocate funds to the cause. If you win, you will see a withdraw message on our homepage. Simply click withdraw and all funds will be sent directly to your Ethereum wallet.
            </Collapse>
          </div>

          <div className="column is-three-fifths is-offset-one-fifth">
            <h3 className="title has-text-white">Suggesting Future Causes</h3>
            <Collapse
              id="point-of-voting"
              title="What is the point of voting?"
              collapsed={!open.includes('point-of-voting')}
              onToggle={this.handleToggle('point-of-voting')}
            >
              The Seedom team believes in the decentralization of the decision making process for altruistic causes we support. Therefore, after we kick off a fundraiser, we also kick off a polling Dapp that runs for the same ten day period on the vote tab. This polling Dapp allows any participant to vote for the cause that we may support during a future fundraiser. We can not guarantee that these cause suggestions will be selected for support as the cause has to be willing to work with the Seedom team.
            </Collapse>
            <Collapse
              title="How do I suggest the next cause?"
              collapsed={!open.includes('suggest-next-cause')}
              onToggle={this.handleToggle('suggest-next-cause')}
            >
              To add a new cause to the list of causes the Seedom team will consider for the next fundraiser, you must first participate with at least one entry. Afterwards, click on the "VOTE" tab at the top of this page. Enter the name of the cause and click the plus button to submit it to our polling Dapp. Others can now upvote your cause if they agree that it should be next.
            </Collapse>
            <Collapse
              title="How do I vote on an existing suggested cause?"
              collapsed={!open.includes('vote-existing-next-cause')}
              onToggle={this.handleToggle('vote-existing-next-cause')}
            >
              To vote on an existing suggested cause the Seedom team will consider for the next fundraiser, you must first participate with at least one entry. Afterwards, click on the "VOTE" tab at the top of this page. Scroll through the list of causes, ordered by total number of votes, and click the vote button next to the cause you would like to see us support. Next click "CAST" to confirm.
            </Collapse>
          </div>

          <div className="column is-three-fifths is-offset-one-fifth">
            <h3 className="title has-text-white">Other</h3>
            <Collapse
              title="Why is Seedom better?"
              collapsed={!open.includes('why-is-seedom-better')}
              onToggle={this.handleToggle('why-is-seedom-better')}
            >
              There exists an abundance of chance games in the Ethereum network. The problem with many of them is that they use algorithms that can be defeated by <a target="_blank" rel="noopener noreferrer" href="https://blog.keep.network/miners-arent-your-friends-cde9b6e0e9ac">miner manipulation</a> or they rely on a a centralized third party random number service.
              <br />
              <br />
              Seedom’s algorithm takes a secret message from Seedom, a secret message from the cause, and eight randomly selected participant messages to determine the winner. This makes Seedom close to impossible to tamper with. The <a target="_blank" rel="noopener noreferrer" href="https://seedom-io.github.io/seedom-whitepaper/seedom-whitepaper.pdf">whitepaper</a> goes into more technical detail of how this works.
            </Collapse>
            <Collapse
              title="How does Seedom make money?"
              collapsed={!open.includes('how-does-seedom-make-money')}
              onToggle={this.handleToggle('how-does-seedom-make-money')}
            >
              Seedom does incur operating costs and as a result does take a nominal 5% (10% starting) cut on each fundraiser.
            </Collapse>
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
