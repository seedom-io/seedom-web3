import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as bytes from '../../utils/bytes';
import * as ethereumActions from '../../actions/ethereum';
import Caster from './components/caster';
import Name from './components/name';
import Index from './components/index';
import './index.scss';

class Vote extends Component {
  static propTypes = {
    ethereum: PropTypes.shape().isRequired
  };

  handleVoteName = ({ name, score }) => {
    const nameBytes = bytes.bytesString(name);
    this.props.dispatch(ethereumActions.send({
      contractName: 'polling', method: 'voteName', args: [nameBytes, score]
    }));
  };

  handleVoteIndex = ({ index, score }) => {
    this.props.dispatch(ethereumActions.send({
      contractName: 'polling', method: 'voteIndex', args: [index, score]
    }));
  };

  render() {
    const {
      caster,
      causes,
      votes,
      deployment,
      account,
      isLoading
    } = this.props.ethereum;

    if (!caster || !causes || !votes || !deployment) {
      return null;
    }

    // sort causes by average score
    const sortedCauses = [...causes].sort((a, b) => {
      return b.averageScore.comparedTo(a.averageScore);
    });

    const ended = (new Date()) >= deployment.endTime;

    return (
      <div className="seedom-vote">
        <div className="list">

          <Caster
            caster={caster}
            ended={ended}
          />

          <Name
            caster={caster}
            ended={ended}
            isLoading={isLoading}
            onVoteName={this.handleVoteName}
          />

          {sortedCauses.map((cause) => (
            <Index
              key={cause.index}
              caster={caster}
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
