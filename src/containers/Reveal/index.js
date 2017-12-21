import React from 'react';
import PropTypes from 'prop-types';
import RevealForm from './components/RevealForm';

export default class Reveal extends React.PureComponent {
  static propTypes = {
    account: PropTypes.string.isRequired,
    contract: PropTypes.shape({
      methods: PropTypes.shape({
        reveal: PropTypes.func.isRequired
      }).isRequired
    }).isRequired
  }

  handleReveal = ({ random }) => {
    const {
      account,
      contract
    } = this.props;

    contract.methods.reveal(random).call({
      from: account
    }).then(result => {
      // if result.status === 0, this failed
      console.log('Reveal succeeded');
      console.log(result);
    }).catch(err => {
      console.log('Reveal failed');
      console.log(err);
    });

    console.log(random);
  };

  render() {
    return (
      <RevealForm
        onReveal={this.handleReveal}
      />
    );
  }
}
