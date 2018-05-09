import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as bytes from '../../../../utils/bytes';
import * as numbers from '../../../../utils/numbers';
import * as etherscan from '../../../../utils/etherscan';
import Collapse from '../../../collapse';
import './index.scss';

const getAddress = (item) => {
  switch (item.type) {
    case 'FUNDRAISER_PARTICIPATION':
      return item.participation.participant;
    case 'FUNDRAISER_RAISE':
      return item.raise.participant;
    default:
      return null;
  }
};

const getEntries = (item) => {
  switch (item.type) {
    case 'FUNDRAISER_PARTICIPATION':
      return item.participation.entries;
    case 'FUNDRAISER_RAISE':
      return item.raise.entries;
    default:
      return null;
  }
};

const getEntriesText = (item) => {
  const entries = getEntries(item);
  const localeEntries = numbers.localeNumber(entries);

  let text = `${localeEntries} `;
  // add new for participation
  if (item.type === 'FUNDRAISER_PARTICIPATION') {
    text += 'NEW ';
  }

  // fix plural
  text += entries.isEqualTo(1) ? 'entry' : 'entries';

  // add raised for raise
  if (item.type === 'FUNDRAISER_RAISE') {
    text += ' RAISED';
  }

  return text;
};

const getMessage = (item) => {
  if (item.type === 'FUNDRAISER_PARTICIPATION') {
    return item.participation.message;
  }
  return null;
};

class FeedItem extends Component {
  static propTypes = {
    item: PropTypes.shape().isRequired,
    network: PropTypes.shape().isRequired
  };

  openTransaction = (transactionHash) => {
    const { network } = this.props;
    const etherscanUrl = etherscan.getTransactionUrl(network.name, transactionHash);
    if (etherscanUrl) {
      window && window.open(etherscanUrl, '_blank');
    }
  }

  render() {
    const { item } = this.props;
    const address = getAddress(item);
    const entriesText = getEntriesText(item);
    const message = getMessage(item);
    return (
      <div
        className="row"
        onClick={() => { this.openTransaction(item.transactionHash); }}
      >
        <div className="icon">
          {{
            FUNDRAISER_PARTICIPATION: (
              <i className="fas fa-arrow-alt-circle-right"></i>
            ),
            FUNDRAISER_RAISE: (
              <i className="far fa-arrow-alt-circle-up"></i>
            ),
          }[item.type]}
        </div>
        <div className="contents">
          <div className="side left">
            <div className="blocknum">
              <i className="fas fa-cube"></i> {item.blockNumber}
            </div>
            <div className="address">
              {bytes.shorten(address)}
            </div>
          </div>
          <div className="side right">
            <div className="entries">
              {entriesText}
            </div>
            <div className="messages">
              {message}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Feed extends Component {
  static propTypes = {
    network: PropTypes.shape(),
    feed: PropTypes.arrayOf(PropTypes.shape())
  };

  static defaultProps = {
    network: null,
    feed: []
  };

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  handleToggle = () => {
    this.setState((prevState) => {
      return { collapsed: !prevState.collapsed };
    });
  }

  render() {
    const { feed, network } = this.props;
    const { collapsed } = this.state;
    return (
      <Collapse title="live activity feed" collapsed={collapsed} onToggle={this.handleToggle} heavy>
        <div className="seedom-feed">
          <div className="list">
            {feed.map((item) => (
              <FeedItem
                key={`${item.transactionHash}-${item.transactionIndex}`}
                item={item}
                network={network}
              />
            ))}
          </div>
        </div>
      </Collapse>
    );
  }
}

export default Feed;
