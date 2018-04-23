import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import * as badges from '../../utils/badges';
import seedomShare from '../../../../seedom-assets/share/seedom-share.png';

const name = 'Seedom';
const author = 'Team Palm Tree';
const title = 'Seedom | Seeding the future of philanthropy';
const description = 'Raising awareness and Ether for altruistic causes while rewarding a single participant for their contribution and support. Seed the future of philanthropy!';

class Head extends Component {
  render() {
    const { router } = this.props;

    let finalUrl = SEEDOM_URL;
    let finalImage = seedomShare;
    // check for badge
    if (router.location.search !== '') {
      const query = new URLSearchParams(router.location.search);
      const contract = query.get('c');
      const participant = query.get('p');
      if (contract && participant) {
        finalUrl += router.location.search;
        finalImage = badges.getImageUrl({
          contract,
          participant
        });
      }
    }

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
        <meta name="twitter:image" content={finalImage} />
        <meta name="twitter:url" content={finalUrl} />
        {/* open graph */}
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content={name} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={finalImage} />
        <meta name="og:url" content={finalUrl} />
      </Helmet>
    );
  }
}

const mapStateToProps = state => {
  return { router: state.router };
};

export default connect(mapStateToProps)(Head);
