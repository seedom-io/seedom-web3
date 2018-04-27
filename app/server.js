import express from 'express';
import { Helmet } from 'react-helmet';
import { renderToString } from 'react-dom/server';
import cacheControl from 'express-cache-controller';
import clientConfig from '../webpack/client';
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

const app = express();
app.use(cacheControl({
  public: true,
  maxAge: 3600 // 1h
}));
app.use(publicPath, express.static(path));
app.use(handleRender);
app.listen(3001);
