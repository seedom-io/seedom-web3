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

const getMessage = (item) => {
  if (item.type === 'FUNDRAISER_PARTICIPATION') {
    return item.participation.message;
  }
  return null;
};

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

  openTransaction = (transactionHash) => {
    const { network } = this.props;
    const etherscanUrl = etherscan.getTransactionUrl(network.name, transactionHash);
    if (etherscanUrl) {
      window && window.open(etherscanUrl, '_blank');
    }
  }

  handleToggle = () => {
    this.setState((prevState) => {
      return { collapsed: !prevState.collapsed };
    });
  }

  render() {
    const { feed } = this.props;
    const { collapsed } = this.state;
    return (
      <Collapse title="live activity feed" collapsed={collapsed} onToggle={this.handleToggle} heavy>
        <div className="seedom-feed">
          <div className="list">
            {feed.map((item) => (
              <div
                className="row"
                key={`${item.transactionHash}-${item.transactionIndex}`}
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
                      {bytes.shorten(getAddress(item))}
                    </div>
                  </div>
                  <div className="side right">
                    <div className="entries">
                      {numbers.localeNumber(getEntries(item))} entries
                    </div>
                    <div className="messages">
                      {getMessage(item)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Collapse>
    );
  }
}

export default Feed;
