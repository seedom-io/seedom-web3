import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Head extends Component {
  render() {
    return (
      <Helmet titleTemplate="%s - Seedom" defaultTitle="Seedom">
        <meta name="description" content="Seedom - Seeding the future of philanthropy" />
      </Helmet>
    );
  }
}

export default Head;
