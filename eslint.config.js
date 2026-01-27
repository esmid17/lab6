export default [
  {
    files: ['**/*.js'],
    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        console: ['error', 'always'],
        eqeqeq: [ 'error', 'single' ],
        camelcase: [ 'error', 'single' ],
        nounusedvars: [ 'error', 'single' ],
        maxlinesperfunction: [ 'error', 20 ]
    },
  },
];