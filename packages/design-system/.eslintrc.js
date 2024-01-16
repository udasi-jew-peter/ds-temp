module.exports = {
  root: true,
  extends: ['@react-native', 'eslint-config-prettier', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '.js', '.jsx'],
      rules: {
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 'warn',
        quotes: 'off',
      },
    },
  ],
  ignorePatterns: ['.yarn/*', '!.eslintrc.js', '!.prettierrc.js'],
};
