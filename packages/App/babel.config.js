module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@theme': './src/theme',
          '@tokens': './src/tokens',
          '@assets': './assets',
        },
      },
    ],
  ],
};
