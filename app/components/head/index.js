import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import queryString from 'query-string';
import * as badges from '../../utils/badges';
import favicon from '../../../../seedom-assets/logo/o/seedom-o-black-transparent.png';

const name = 'Seedom';
const author = 'Team Palm Tree';
const title = 'Seedom | FUNdraising Evolved';
const description = 'Raising awareness and Ether for altruistic causes while rewarding a single participant for their contribution and support, similar to a raffle!';
const image = 'https://raw.githubusercontent.com/seedom-io/seedom-assets/master/share/seedom-share.png';
const imageWidth = 1200;
const imageHeight = 628;

class Head extends Component {
  componentDidMount() {
    if (window) {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'UA-110677302-1');
    }
  }

  render() {
    const { router } = this.props;

    let finalUrl = SEEDOM_URL;
    let finalImage = image;
    // check for badge
    if (router && router.location) {
      if (router.location.search !== '') {
        const query = queryString.parse(router.location.search.substr(1));
        const { n, c, p } = query;
        if (n && c && p) {
          finalUrl += router.location.search;
          finalImage = badges.getImageUrl({
            network: n,
            contract: c,
            participant: p
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
        {/* favicon */}
        <link rel="icon" type="image/png" href={favicon} />
        {/* viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=0.75, maximum-scale=0.75" />
        {/* twitter */}
        <meta name="twitter:card" property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" property="twitter:site" content="@seedom_io" />
        <meta name="twitter:title" property="twitter:title" content={title} />
        <meta name="twitter:description" property="twitter:description" content={description} />
        <meta name="twitter:image" property="twitter:image" content={finalImage} />
        <meta name="twitter:url" property="twitter:url" content={finalUrl} />
        {/* facebook */}
        <meta name="fb:app_id" property="fb:app_id" content="1521560227943499" />
        {/* open graph */}
        <meta name="og:type" property="og:type" content="website" />
        <meta name="og:site_name" property="og:site_name" content={name} />
        <meta name="og:title" property="og:title" content={title} />
        <meta name="og:description" property="og:description" content={description} />
        <meta name="og:image" property="og:image" content={finalImage} />
        <meta name="og:image:width" property="og:image:width" content={imageWidth} />
        <meta name="og:image:height" property="og:image:height" content={imageHeight} />
        <meta name="og:url" property="og:url" content={finalUrl} />
        {/* font awesome */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossOrigin="anonymous" />
        {/* google */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-110677302-1" />
      </Helmet>
    );
  }
}

const mapStateToProps = state => {
  return { router: state.router };
};

export default connect(mapStateToProps)(Head);
