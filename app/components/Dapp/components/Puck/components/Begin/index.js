import React from 'react';
import Content from '../Content';
import './index.scss';
import charityLogo from '../../../../../../img/logos/charity.png';

class Begin extends Content {
  render() {
    const { className } = this.state;
    const { onBegin } = this.props;

    return (
      <div className={`seedom-content begin ${className}`}>
        <img src={charityLogo} />
        <a className="button is-primary is-outlined" onClick={onBegin}>OBTAIN ENTRIES</a>
      </div>
    );
  }
}

export default Begin;
