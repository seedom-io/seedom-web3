import React from 'react';
import { connect } from 'react-redux';
import Sections from '../sections';
import './index.scss';

class Contact extends Sections {
  render() {
    return (
      <div className="container seedom-contact">
        <div className="columns">
          <div className="column is-offset-2 has-text-white">
            <h3 className="title has-text-white">Are you leading a cause that needs funding?</h3>

            <p>Want to learn more about accepting donations in cryptocurrencies?</p>

            <p>Then you are at the right place!</p>
            <br />
            <br />

            <p>For press and media inquires, email us directly at <a href="mailto:team@seedom.io">team@seedom.io</a>.</p>
          </div>
          <div className="column">
            <iframe
              src="https://landing.mailerlite.com/webforms/landing/t6i1i0"
              style={{ border: 'none', width: '350px', height: '472px' }}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { router: state.router };
};

export default connect(mapStateToProps)(Contact);
