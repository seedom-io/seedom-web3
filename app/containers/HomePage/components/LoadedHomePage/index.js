import React from 'react';
import SeedomPuck from '../../../../components/SeedomPuck';
import { rpcWeb3, wsWeb3 } from '../../../../utils/web3';
import testJSON from '../../../../../../seedom-solidity/deployment/test.json';

class LoadedHomePage extends React.Component {
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
  }

  render() {
    const { account } = this.props;

    return (
      <div>
        <h2>Welcome to Seedom</h2>
        <p>
          <strong>Account:</strong> {account}
        </p>
        <SeedomPuck />
      </div>
    );
  }
}

export default LoadedHomePage;
