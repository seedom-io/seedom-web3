import React from 'react';
import SeedomPuck from '../../../../components/SeedomPuck';
import { rpcWeb3, wsWeb3 } from '../../../../utils/web3';
import testJSON from '../../../../../../seedom-solidity/deployment/test.json';

class LoadedHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      raiser: null
    };
  }

  componentWillMount() {
    const contractAddress = testJSON.seedom[0].address;

    const { account, contract } = this.props;

    const rpcContract = new rpcWeb3.eth.Contract(contract, contractAddress, {
      from: account,
      gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    });

    const wsWeb3Instance = wsWeb3();
    const wsContract = new wsWeb3Instance.eth.Contract(contract, contractAddress, {
      from: account,
      gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    });

    wsContract.methods
      .currentRaiser()
      .call({
        from: account
      })
      .then(
        raiser => {
          this.setState({ raiser })
        },
        err => {
          console.error(err)
        }
      );
  }

  render() {
    const { account } = this.props;
    const { raiser } = this.state;

    return (
      <div>
        <h2>Welcome to Seedom</h2>
        <p>
          <strong>Account:</strong> {account}
        </p>
        {raiser && <SeedomPuck raiser={raiser} />}
      </div>
    );
  }
}

export default LoadedHomePage;
