import React from 'react';
import { connect } from 'react-redux';
import Sections from '../sections';
import Toggle from '../toggle';
import './index.scss';

class Help extends Sections {
  render() {
    const { open } = this.state;

    return (
      <div className="seedom-help">
        <div className="container">
          <div className="column is-three-fifths is-offset-one-fifth">
            <h3 className="title has-text-white">Accessing Seedom</h3>
            <Toggle
              title="Accessing on mobile"
              collapsed={!open.includes('accessing-mobile')}
            >
              To use Seedom on mobile, we recommend the <a target="_blank" href="https://www.cipherbrowser.com/">Cipher app</a>. You will need to put Ether into your Cipher wallet in order to participate.
            </Toggle>
            <Toggle
              title="Accessing on desktop"
              collapsed={!open.includes('accessing-desktop')}
            >
              To use Seedom on the desktop, you will need to install <a target="_blank" href="https://metamask.io/">>MetaMask</a> or use the <a target="_blank" href="https://brave.com/">Brave browser</a>. You will need to put Ether into your MetaMask wallet in order to participate.
            </Toggle>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { router: state.router };
};

export default connect(mapStateToProps)(Help);
