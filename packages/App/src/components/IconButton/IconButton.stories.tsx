import React from 'react';
import {Meta} from '@storybook/react-native';
import IconButton from '.';
import {Box} from '..';

const IconButtonMeta: Meta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
  decorators: [
    Story => (
      <Box p="tight" alignItems="center" justifyContent="center" flex={1}>
        <Story name="default" />
      </Box>
    ),
  ],
};

export const IconButtonDefault = () => <IconButton />;
export const IconButtonSmall = () => <IconButton size="small" />;
export const IconButtonLarge = () => <IconButton size="large" />;
export const IconButtonDisabled = () => <IconButton state="disabled" />;
export const IconButtonSmallDisabled = () => (
  <IconButton size="small" state="disabled" />
);
export const IconButtonLargeDisabled = () => (
  <IconButton size="large" state="disabled" />
);

export default IconButtonMeta;
