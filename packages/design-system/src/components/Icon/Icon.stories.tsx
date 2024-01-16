import React from 'react';
import { Meta } from '@storybook/react-native';
import { Box } from '..';
import Icon from '.';

const IconMeta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  decorators: [
    (Story) => (
      <Box p="tight" alignItems="center" justifyContent="center" flex={1}>
        <Story name="default" />
      </Box>
    ),
  ],
};

export const IconDefault = () => <Icon color="lightContentPrimary" name="shooting-star" size="iconLarge" />;

export default IconMeta;
