import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import * as badges from '../../utils/badges';

const name = 'Seedom';
const author = 'Team Palm Tree';
const title = 'Seedom | Seeding the future of philanthropy';
const description = 'Raising awareness and Ether for altruistic causes while rewarding a single participant for their contribution and support. Seed the future of philanthropy!';
const image = 'https://raw.githubusercontent.com/seedom-io/seedom-assets/master/share/seedom-share.png';

class Head extends Component {
  render() {
    const { router } = this.props;

    let finalUrl = SEEDOM_URL;
    let finalImage = image;
    // check for badge
    if (router && router.location) {
      if (router.location.search !== '') {
        const query = new URLSearchParams(router.location.search.substr(1));
        const network = query.get('n');
        const contract = query.get('c');
        const participant = query.get('p');
        if (network && contract && participant) {
          finalUrl += router.location.search;
          finalImage = badges.getImageUrl({
            network,
            contract,
            participant
          });
        }
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
        {/* font awesome */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossOrigin="anonymous" />
      </Helmet>
    );
  }
}

const mapStateToProps = state => {
  return { router: state.router };
};

export default connect(mapStateToProps)(Head);
