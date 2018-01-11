import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SeedomPuck from '../../../../components/SeedomPuck';
import { rpcWeb3, wsWeb3 } from '../../../../utils/web3';
import hashedRandom from '../../../../utils/hashedRandom';
import testJSON from '../../../../../../seedom-solidity/deployment/test.json';

import * as seedomActions from '../../../../redux/modules/seedom';

function epochToDate(seconds) {
  return new Date(seconds * 1000);
}

const parseRaiser = raiser => {
  return {
    endTime: epochToDate(raiser._endTime),
    expireTime: epochToDate(raiser._expireTime),
    kickoffTime: epochToDate(raiser._kickoffTime),
    revealTime: epochToDate(raiser._revealTime),
    valuePerEntry: Number(raiser._valuePerEntry)
  };
};

@connect(
  state => ({
    participant: state.seedom.participant
  }),
  {
    ...seedomActions
  }
)
class LoadedHomePage extends React.Component {
  static propTypes = {
    participant: PropTypes.shape({
      entries: PropTypes.number.isRequired,
      hashedRandom: PropTypes.string.isRequired
    }).isRequired,
    setParticipant: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      rpcContract: null,
      raiser: null
    };
  }


  componentWillMount() {
    const contractAddress = testJSON.seedom[0].address;

    const { account, contract, setParticipant } = this.props;

    const rpcContract = new rpcWeb3.eth.Contract(contract, contractAddress, {
      from: account,
      gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    });

    const wsWeb3Instance = wsWeb3();
    const wsContract = new wsWeb3Instance.eth.Contract(contract, contractAddress, {
      from: account,
      gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    });

    this.setState({
      rpcContract
    });

    wsContract.methods
      .currentRaiser()
      .call({
        from: account
      })
      .then(
        raiser => {
          this.setState({ raiser: parseRaiser(raiser) });
        },
        err => {
          console.error(err);
        }
      );


    wsContract.methods
      .participant(account)
      .call({
        from: account
      })
      .then(
        participant => {
          setParticipant({ participant });
        },
        err => {
          console.error(err);
        }
      );
  }

  handleParticipate = ({ seed, numOfEntries }) => {
    const { account } = this.props;
    const { raiser, rpcContract } = this.state;

    const hashedSeed = hashedRandom(seed, account);
    const value = numOfEntries * (raiser.valuePerEntry);

    rpcContract.methods
      .participate(hashedSeed.valueOf())
      .send({
        from: account,
        gas: 1000000,
        gasPrice: '20000000000', // default gas price in wei, 20 gwei in this case
        value
      })
      .then(result => {
        // if result.status === 0, this failed
        console.log('Participate succeeded');
        console.log(result);
      });
  }

  render() {
    const { account, participant } = this.props;
    const { raiser } = this.state;

    return (
      <div>
        <h2>Welcome to Seedom</h2>
        <p>
          <strong>Account:</strong> {account}
        </p>
        {raiser &&
          <SeedomPuck
            raiser={raiser}
            participant={participant}
            onParticipate={this.handleParticipate}
          />
        }
      </div>
    );
  }
}

export default LoadedHomePage;
