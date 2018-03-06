import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Head extends Component {
  render() {
    return (
      <Helmet titleTemplate="%s - Seedom" defaultTitle="Seedom">
        <meta name="description" content="Seedom - Seeding the future of philanthropy" />
        <meta name="viewport" content="width=device-width, initial-scale=0.8, maximum-scale=0.8" />
      </Helmet>
    );
  }
}

export default Head;
