module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // disable error when importing without '.ext'
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        vue: 'never',
      },
    ],
  },
  // create override to handle multiple os linebreak system
  overrides: [
    {
      // specify files to override
      files: ['*.vue', '*.js'],
      rules: {
        // override rules
        'linebreak-style': 0,
      },
    },
  ],
};
