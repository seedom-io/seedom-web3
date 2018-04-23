import React, { Component } from 'react';
import Circles from '../participate/components/puck/components/circles';
import './index.scss';

class Hype extends Component {
  render() {
    const deployment = {
      deployTime: new Date('4-22-2018 00:00:00'),
      endTime: new Date('5-1-2018 00:00:00')
    };

    return (
      <div className="seedom-hype">
        <div className="countdown">
          <Circles starter="launches" isLoading={false} deployment={deployment} />
          <div className="seedom-content show">
            <div className="seedom-overlay layout">

              <div className="division text top large-pad narrow">

                <div className="coming-soon">Launches May 1</div>

                <div className="field">
                  <div className="control">
                    <a className="button is-success" type="submit" href="https://seedom-io.github.io/seedom-whitepaper/seedom-whitepaper.pdf">
                      READ THE WHITEPAPER
                    </a>
                  </div>
                </div>

              </div>

              <div className="division text center">
                <div className="seedom-logo" />
              </div>

              <div className="division text bottom">

                <form action="https://landing.mailerlite.com/webforms/submit/z2z8h3" method="POST" target="_blank">
                  <input type="hidden" name="ml-submit" value="1" />

                  <div className="field email">
                    <div className="control textbox">
                      <input className="input is-primary" type="email" placeholder="email@example.com" name="fields[email]" />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <button className="button is-success" type="submit">
                        SEND ME A REMINDER
                      </button>
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
