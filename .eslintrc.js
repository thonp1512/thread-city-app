module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react-native/no-inline-styles': 'off',
    'prettier/prettier': 'warn',
    'no-func-assign': 'disable',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/self-closing-comp': 'off',
    'eqeqeq': 'off',
    'react/no-unstable-nested-components': [
      'off',
      {
        allowAsProps: true,
        customValidators:
          [] /* optional array of validators used for propTypes validation */,
      },
    ],
  },
};