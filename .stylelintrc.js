module.exports = {
  processors: ['stylelint-processor-styled-components'],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard-scss',
    'stylelint-config-styled-components',
    'stylelint-config-recess-order',
  ],

  rules: {
    'prettier/prettier': true,
  },
  configBasedir: __dirname,
};
