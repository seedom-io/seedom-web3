import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import SeedomPuck from '../../components/SeedomPuck';

import * as blockchainActions from '../../redux/modules/blockchain';

@connect(
  state => ({
    account: state.blockchain.account,
  }),
  {
    ...blockchainActions,
  }
)
class HomePage extends React.Component {
  static propTypes = {
    account: PropTypes.string
  }

  static defaultProps ={
    account: 'Unknown'
  }

  render() {
    const { account } = this.props;

    return (
      <div>
        <h2>Welcome to Seedom</h2>
        <p>
          <strong>Account:</strong> {account}
        </p>
        <Button />
        <SeedomPuck />
      </div>
    );
  }
}


export default HomePage;
