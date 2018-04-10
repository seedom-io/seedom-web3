import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import seedomShare from '../../../../seedom-assets/share/seedom-share.png';

const name = 'Seedom';
const author = 'Team Palm Tree';
const title = 'Seedom | Seeding the future of philanthropy';
const description = 'Raising awareness and Ether for altruistic causes while rewarding a single participant for their contribution and support. Seed the future of philanthropy!';
const url = 'https://www.seedom.io';

class Head extends Component {
  componentDidMount() {
    ((window.gitter = {}).chat = {}).options = {
      room: 'FUNDRAISER_io/Lobby'
    };
  }

  render() {
    return (
      <Helmet>
        {/* description */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        {/* viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=0.7, maximum-scale=0.7" />
        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@seedom_io" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={seedomShare} />
        <meta name="twitter:url" content={url} />
        {/* open graph */}
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content={name} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={seedomShare} />
        <meta name="og:url" content={url} />
        {/* sidecar */}
        <script src="https://sidecar.gitter.im/dist/sidecar.v1.js" async defer />
      </Helmet>
    );
  }
}

export default Head;
