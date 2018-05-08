import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { localeNumber, localeDecimal, getEtherFromWei } from '../../../../utils/numbers';
import './index.scss';

const ETHER_USD_ROTATION_DELAY = 10000;

class TextStat extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string
  };

  static defaultProps = {
    value: null
  };

  render() {
    const { title, value } = this.props;
    return (
      <div className="stat">
        <div className="stat-title">
          {title}
        </div>
        <div className="stat-value">
          {value}
        </div>
      </div>
    );
  }
}

class CurrencyStat extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ether: PropTypes.string,
    USD: PropTypes.string,
    isEther: PropTypes.bool.isRequired
  };

  static defaultProps = {
    ether: null,
    USD: null
  };

  render() {
    const { title, ether, USD, isEther } = this.props;
    return (
      <div className="stat">
        <div className="stat-title">
          {title}
        </div>
        <div className="stat-value">
          {isEther ? (
            <div>
              {ether}
              <span className="currency">
                <i className="fas fa-bars" />
              </span>
            </div>
          ) : (
            <div>
              {USD}
              <span className="currency">
                <i className="fas fa-dollar-sign" />
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

class Stats extends Component {
  static propTypes = {
    side: PropTypes.string.isRequired,
    deployment: PropTypes.shape(),
    state: PropTypes.shape(),
    cause: PropTypes.shape(),
    ticker: PropTypes.shape()
  };

  static defaultProps = {
    deployment: null,
    state: null,
    cause: null,
    ticker: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isEther: false
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ isEther: !prevState.isEther }));
    }, ETHER_USD_ROTATION_DELAY);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      side,
      deployment,
      state,
      cause,
      ticker,
      causesVoteCount
    } = this.props;

    const { isEther } = this.state;

    let totalRaisedEther;
    let totalRaisedUSD;
    let causeRewardEther;
    let causeRewardUSD;
    let participantRewardEther;
    let participantRewardUSD;
    let participants;
    let entries;
    if (deployment && state && ticker) {
      const totalRaised = getEtherFromWei(state.entries.times(deployment.valuePerEntry));
      totalRaisedEther = localeDecimal(totalRaised, 3);

      const causeReward
        = totalRaised.times(deployment.causeSplit).dividedBy(1000);
      causeRewardEther = localeDecimal(causeReward, 3);
      const participantReward
        = totalRaised.times(deployment.participantSplit).dividedBy(1000);
      participantRewardEther = localeDecimal(participantReward, 3);

      participants = localeNumber(state.participants);
      entries = localeNumber(state.entries);

      if (ticker) {
        const { price } = ticker.quotes.USD;
        totalRaisedUSD = localeDecimal(totalRaised.multipliedBy(price), 2);
        causeRewardUSD = localeDecimal(causeReward.multipliedBy(price), 2);
        participantRewardUSD = localeDecimal(participantReward.multipliedBy(price), 2);
      }
    }

    let causeName = 'cause';
    if (cause) {
      causeName = cause.name;
    }

    let nextCauseVotes;
    if (causesVoteCount) {
      nextCauseVotes = localeNumber(causesVoteCount);
    }

    return (
      <div className={`seedom-stats ${side}`}>
        {((side === 'top') || (side === 'left')) &&
          <div className="panel">
            <div className="background" />
            <CurrencyStat title="raised" ether={totalRaisedEther} USD={totalRaisedUSD} isEther={isEther} />
            <CurrencyStat title="winner gets" ether={participantRewardEther} USD={participantRewardUSD} isEther={isEther} />
            <CurrencyStat title={`${causeName} gets`} ether={causeRewardEther} USD={causeRewardUSD} isEther={isEther} />
          </div>
        }
        {((side === 'top') || (side === 'right')) &&
          <div className="panel">
            <div className="background" />
            <TextStat title="participants" value={participants} />
            <TextStat title="entries" value={entries} />
            <TextStat title="next cause votes" value={nextCauseVotes} />
          </div>
        }
      </div>
    );
  }
}

export default Stats;
