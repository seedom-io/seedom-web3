import React, { Component } from 'react';
import './index.scss';

class SeedomFeed extends Component {
  render() {
    return (
      <div className="seedom-feed">
        <table className="table">
          <thead>
            <tr>
              <th>Address</th>
              <th>Entries</th>
              <th>Random Message</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0x7d571b2942b8144EBfD22c5F608A391F0B9E43d3</td>
              <td>55</td>
              <td>I LOVE YOU MOM!</td>
            </tr>
            <tr>
              <td>0x7d571b2942b8144EBfD22c5F608A391F0B9E43d3</td>
              <td>55</td>
              <td>I LOVE YOU MOM!</td>
            </tr>
            <tr>
              <td>0x7d571b2942b8144EBfD22c5F608A391F0B9E43d3</td>
              <td>55</td>
              <td>I LOVE YOU MOM!</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SeedomFeed;
