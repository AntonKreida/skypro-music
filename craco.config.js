const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@style': './src/style',
          '@assets': './src/assets',
          '@components': './src/components',
          '@layouts': './src/layouts',
          '@pages': './src/pages',
        },
      },
    },
  ],
};
