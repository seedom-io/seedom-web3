import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as bytes from '../../utils/bytes';
import * as ethereumActions from '../../actions/ethereum';
import CharityName from './components/charity/name';
import CharityIndex from './components/charity/index';

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
    const { status, charities, votes, isLoading } = this.props.ethereum;

    if (!status || !charities || !votes) {
      return null;
    }

    return (
      <div className="seedom-suggest">
        <div className="seedom-table">
          <div>
            <CharityName
              status={status}
              isLoading={isLoading}
              onVoteName={this.handleVoteName}
            />
            {charities.map((charity, index) => (
              <CharityIndex
                status={status}
                charity={charity}
                vote={votes[index]}
                index={index}
                onVoteIndex={this.handleVoteIndex}
              />
            ))}
          </div>
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
