import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>Seedom</strong> by the <a className="is-green" href="mailto:team@seedom.io">Seedom Team</a>.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
