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
        'no-console': ['warn'], 
        eqeqeq: ['error', 'always'],
        camelcase: 'error',
        'no-unused-vars': 'error',
    }
  },
];