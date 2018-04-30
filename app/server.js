import express from 'express';
import { Helmet } from 'react-helmet';
import { renderToString } from 'react-dom/server';
import cacheControl from 'express-cache-controller';
import clientConfig from '../webpack/client';
import * as mailerlite from './utils/mailerlite';
import render from './render';

const { publicPath, path } = clientConfig.output;

const renderFullPage = (helmet, state) => {
  return `
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <div id="root"></div>
        <script>
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
        </script>
        <script src="${publicPath}index.js"></script>
      </body>
    </html>
  `;
};

const handleRender = (request, response) => {
  const rendered = render(request, null);
  renderToString(rendered.component);
  const helmet = Helmet.renderStatic();
  const state = rendered.store.getState();
  response.send(renderFullPage(helmet, state));
};

const handleMailerlite = (request, response) => {
  const { method } = request.params;
  if (!(method in mailerlite)) {
    response.status(404).send('mailerlite method not found');
    return;
  }

  // forward body to mailerlite
  mailerlite[method](request.body).then((result) => {
    if (result.response.statusCode !== 200) {
      response.status(500).send('mailerlite method failed');
      return;
    }

    // success
    response.status(200).send();
  });
};

const app = express();

// setup cache control for everything
app.use(cacheControl({
  public: true,
  maxAge: 3600 // 1h
}));

// serve static assets
app.use(publicPath, express.static(path));

// serve mailer lite api
if (mailerlite.initialize()) {
  app.use(express.json());
  app.post('/mailerlite/:method', handleMailerlite);
}

// serve server side rendering
app.use(handleRender);

// listen
app.listen(3000);
