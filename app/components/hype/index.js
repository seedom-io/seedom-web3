import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Circles from '../participate/components/puck/components/circles';
import Field from '../field';
import './index.scss';

class Hype extends Component {
  /*tatic propTypes = {
    ethereum: PropTypes.shape().isRequired
  };*/

  render() {
    const deployment = {
      deployTime: new Date('4-22-2018'),
      endTime: new Date('5-1-2018')
    };

    return (
      <div className="seedom-hype">
        <div className="launchpad">
          <div className="countdown">
            <Circles starter="begins" isLoading={false} deployment={deployment} />
            <div className="seedom-content show">
              <div className="seedom-overlay">

                <div className="text">coming<br />soon!</div>

                <form action="https://seedom.us17.list-manage.com/subscribe/post?u=d218737a0dfcda96f8cf3adf1&amp;id=92467afeb2" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                  <div className="field">
                    <div className="control">
                      <input type="email" value="" name="EMAIL" className="input" id="mce-EMAIL" placeholder="email@example.com" required />
                      <Field
                        format="textbox"
                        type="text"
                        placeholder="your message&#10;to the world"
                        value="test"
                        maxLength={100}
                        disabled={false}
                        isValid={true}
                        onChange={this.handleChange}
                        ref={(component) => { this.message = component; }}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <a className="button is-success" type="submit" onClick={this.handleSubmit}>GET REMINDED</a>
                    </div>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Hype;
