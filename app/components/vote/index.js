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
      charities,
      votes,
      raiser,
      account,
      isLoading
    } = this.props.ethereum;

    if (!caster || !charities || !votes || !raiser) {
      return null;
    }

    // sort charities by average score
    const sortedCharities = [...charities].sort((a, b) => {
      return b.averageScore.comparedTo(a.averageScore);
    });

    const ended = (new Date()) >= raiser.endTime;

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

          {sortedCharities.map((charity) => (
            <Index
              key={charity.index}
              caster={caster}
              ended={ended}
              charity={charity}
              vote={votes[charity.index]}
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
