import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

export const decorators = [withBackgrounds];
export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: 'white' },
      { name: 'dark', value: 'black' },
    ],
  },
};
