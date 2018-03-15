import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as bytes from '../../utils/bytes';
import * as ethereumActions from '../../actions/ethereum';
import Caster from './components/caster';
import Name from './components/name';
import Index from './components/index';
import './index.scss';

const charitySort = (a, b) => {
  return a.averageScore.comparedTo(b.averageScore);
};

class Suggest extends Component {
  static propTypes = {
    ethereum: PropTypes.shape().isRequired
  };

  handleVoteName = ({ name, score }) => {
    const nameBytes = bytes.bytesString(name);
    this.props.dispatch(ethereumActions.send({
      contractName: 'suggest', method: 'voteName', args: [nameBytes, score]
    }));
  };

  handleVoteIndex = ({ index, score }) => {
    this.props.dispatch(ethereumActions.send({
      contractName: 'suggest', method: 'voteIndex', args: [index, score]
    }));
  };

  render() {
    const {
      caster,
      charities,
      votes,
      account,
      isLoading
    } = this.props.ethereum;

    if (!caster || !charities || !votes) {
      return null;
    }

    return (
      <div className="seedom-suggest">
        <div className="list">
          <Caster caster={caster} />
          <Name
            caster={caster}
            isLoading={isLoading}
            onVoteName={this.handleVoteName}
          />
          {charities.sort(charitySort).map((charity, index) => (
            <Index
              caster={caster}
              charity={charity}
              vote={votes[index]}
              index={index}
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
)(Suggest);
