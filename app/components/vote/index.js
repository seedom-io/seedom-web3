import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as bytes from '../../utils/bytes';
import * as messages from '@seedom-io/seedom-crypter/messages';
import * as ethereumActions from '../../actions/ethereum';
import Caster from './components/caster';
import Name from './components/name';
import Index from './components/index';
import './index.scss';

class Vote extends Component {
  static propTypes = {
    ethereum: PropTypes.shape().isRequired
  };

  handleVoteName = ({ name, count }) => {
    const nameHex = messages.hex(name);
    this.props.dispatch(ethereumActions.send({
      contractName: 'polling', method: 'voteName', args: [nameHex, count]
    }));
  };

  handleVoteIndex = ({ index, count }) => {
    this.props.dispatch(ethereumActions.send({
      contractName: 'polling', method: 'voteIndex', args: [index, count]
    }));
  };

  render() {
    const {
      maxVoteCount,
      causes,
      causesVoteCount,
      votes,
      voteCount,
      deployment,
      account,
      isLoading
    } = this.props.ethereum;

    if (!maxVoteCount || !causes || !votes || !deployment) {
      return null;
    }

    // sort causes by vote count
    const sortedCauses = [...causes].sort((a, b) => {
      return b.voteCount.comparedTo(a.voteCount);
    });

    const ended = (new Date()) >= deployment.endTime;

    return (
      <div className="seedom-vote">
        <div className="list">

          <Caster
            voteCount={voteCount}
            maxVoteCount={maxVoteCount}
            ended={ended}
          />

          <Name
            voteCount={voteCount}
            maxVoteCount={maxVoteCount}
            ended={ended}
            isLoading={isLoading}
            onVoteName={this.handleVoteName}
          />

          {sortedCauses.map((cause) => (
            <Index
              key={cause.index}
              voteCount={voteCount}
              maxVoteCount={maxVoteCount}
              causesVoteCount={causesVoteCount}
              ended={ended}
              cause={cause}
              vote={votes[cause.index]}
              account={account}
              onVoteIndex={this.handleVoteIndex}
            />
          ))}

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ethereum: state.ethereum };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vote);
