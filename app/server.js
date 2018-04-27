import express from 'express';
import { Helmet } from 'react-helmet';
import { renderToString } from 'react-dom/server';
import clientConfig from '../webpack/client';
import render from './render';

const { publicPath, path } = clientConfig.output;

const renderFullPage = (html, helmet, state, path) => {
  return `
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
        </script>
        <script src="${path}index.js"></script>
      </body>
    </html>
  `;
};

const handleRender = (request, response) => {
  const rendered = render(request, null);
  const html = renderToString(rendered.component);
  const helmet = Helmet.renderStatic();
  const state = rendered.store.getState();
  response.send(renderFullPage(html, helmet, state, publicPath));
};

const app = express();
const port = 3001;
app.use(publicPath, express.static(path));
app.use(handleRender);
app.listen(port);
