import React, { Component } from 'react';
import * as bytes from '../../utils/bytes';
import './index.scss';

const getData = (feedItem) => {
  if (feedItem.hashedRandom) {
    return bytes.shorten(feedItem.hashedRandom);
  } else if (feedItem.random) {
    return bytes.shorten(feedItem.random);
  }
  return null;
};

class Feed extends Component {
  render() {
    const { feed } = this.props;

    return (
      <div className="seedom-feed">
        <table className="table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Participant</th>
              <th>Entries</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {feed.map((feedItem) => (
              <tr>
                <td>{feedItem.type}</td>
                <td>{bytes.shorten(feedItem.participant)}</td>
                <td>{feedItem.entries}</td>
                <td>{getData(feedItem)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Feed;
