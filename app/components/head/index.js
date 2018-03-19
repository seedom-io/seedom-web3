import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Head extends Component {
  componentDidMount() {
    ((window.gitter = {}).chat = {}).options = {
      room: 'seedom_io/Lobby'
    };
  }

  render() {
    return (
      <Helmet titleTemplate="%s - Seedom" defaultTitle="Seedom">
        <meta name="description" content="Seedom - Seeding the future of philanthropy" />
        <meta name="viewport" content="width=device-width, initial-scale=0.7, maximum-scale=0.7" />
        <script src="https://sidecar.gitter.im/dist/sidecar.v1.js" async defer />
      </Helmet>
    );
  }
}

export default Head;
