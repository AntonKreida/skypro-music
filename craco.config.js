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
          '@shared': './src/shared',
          '@components': './src/components',
          '@layouts': './src/layouts',
          '@pages': './src/pages',
          '@interface': './src/interface',
          '@context': './src/context',
          '@hook': './src/hook',
          '@hocs': './src/hocs',
          '@api': './src/api',
          '@utils': './src/utils',
          '@redux': './src/redux',
        },
      },
    },
  ],
};
