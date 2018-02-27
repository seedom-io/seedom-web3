import React, { Component } from 'react';
import * as bytes from '../../../../utils/bytes';
import * as randoms from '../../../../utils/randoms';
import { localeNumber } from '../../../../utils/numbers';
import * as etherscan from '../../../../utils/etherscan';
import './index.scss';

const getData = (feedItem) => {
  if (feedItem.hashedRandom) {
    return bytes.shorten(feedItem.hashedRandom);
  } else if (feedItem.random) {
    return randoms.dehexRandom(feedItem.random);
  }
  return null;
};

class Feed extends Component {
  openTransaction = (transactionHash) => {
    const { network } = this.props;
    const etherscanUrl = etherscan.getTransactionUrl(network, transactionHash);
    if (etherscanUrl) {
      window.open(etherscanUrl, '_blank');
    }
  }

  render() {
    const { feed } = this.props;

    return (
      <div className="seedom-feed">
        <table className="table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Participant</th>
              <th>Entries</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {feed.map((feedItem) => (
              <tr
                key={`${feedItem.event.transactionHash}-${feedItem.event.transactionIndex}`}
                onClick={() => { this.openTransaction(feedItem.event.transactionHash); }}
              >
                <td>{feedItem.event.type}</td>
                <td>{bytes.shorten(feedItem.participant)}</td>
                <td>{localeNumber(feedItem.entries)}</td>
                <td>{getData(feedItem)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Feed;
