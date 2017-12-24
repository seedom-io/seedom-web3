const environment = {
  development: {
    isProduction: false,
    assetsPath: `http://${process.env.HOST || 'localhost'}:${+process.env.PORT + 1 || 3001}/dist/`
  },
  production: {
    isProduction: true,
    assetsPath: '/dist/'
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign(
  {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT,
    apiHost: process.env.APIHOST || 'localhost',
    apiPort: process.env.APIPORT,
    app: {
      title: 'Seedom',
      description: 'Seeding the future of philanthropy',
      head: {
        titleTemplate: 'Seedom: %s',
        meta: [
          { name: 'description', content: 'All the modern best practices in one example.' },
          { charset: 'utf-8' },
          { property: 'og:site_name', content: 'Seedom' },
          { property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:title', content: 'Seedom' },
          { property: 'og:description', content: 'Seeding the future of philanthropy.' },
          { property: 'og:card', content: 'summary' },
          { property: 'og:creator', content: 'Seedom Team' },
          { property: 'og:image:width', content: '200' },
          { property: 'og:image:height', content: '200' }
        ]
      }
    }
  },
  environment
);
