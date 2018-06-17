import React from 'react';
import Content from '../content';
import spinner from '../../../../../../img/spinner.svg';

class Spinner extends Content {
  render() {
    const { className } = this.state;
    return (
      <div className={`seedom-content spinner ${className}`}>
        <div className="seedom-overlay">
            <object data={spinner} type="image/svg+xml">
              <img src={spinner} alt="loading" />
            </object>
        </div>
      </div>
    );
  }
}

export default Spinner;
