import React from 'react';
import PropTypes from 'prop-types';
import hashedRandom from 'utils/hashedRandom';
import ParticipateForm from './components/ParticipateForm';

const getHasParticipated = _hashedRandom => {
  return !!_hashedRandom && _hashedRandom !== '0x0000000000000000000000000000000000000000000000000000000000000000';
};

export default class Participate extends React.PureComponent {
  static propTypes = {
    account: PropTypes.string.isRequired,
    contract: PropTypes.shape({
      methods: PropTypes.shape({
        participate: PropTypes.func.isRequired
      }).isRequired
    }).isRequired,
    participant: PropTypes.shape({
      hashedRandom: PropTypes.string.isRequired
    }).isRequired,
    valuePerEntry: PropTypes.number.isRequired
  }

  handleParticipate = ({ seed, numOfEntries }) => {
    const {
      account,
      contract,
      valuePerEntry
    } = this.props;

    const hashedSeed = hashedRandom(seed, account);
    const value = numOfEntries * valuePerEntry;

    contract.methods.participate(hashedSeed.valueOf()).send({
      from: account,
      gas: 1000000,
      gasPrice: '20000000000', // default gas price in wei, 20 gwei in this case
      value
    }).then(result => {
      // if result.status === 0, this failed
      console.log('Participate succeeded');
      console.log(result);
    }).catch(err => {
      console.log('Participate failed');
      console.log(err);
    });
  }

  handleAddEntries = ({ numOfEntries }) => {
    // TODO make the web3.eth.sendTransaction call
    console.log(numOfEntries);
  }

  render() {
    const { participant, valuePerEntry } = this.props;
    const hasParticipated = getHasParticipated(participant.hashedRandom);

    return (
      <ParticipateForm
        hasParticipated={hasParticipated}
        valuePerEntry={valuePerEntry}
        onAddEntries={this.handleAddEntries}
        onParticipate={this.handleParticipate}
      />
    );
  }
}
