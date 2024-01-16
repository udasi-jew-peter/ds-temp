import React from 'react';
import { Meta } from '@storybook/react-native';
import { Box } from '..';
import Divider from '.';

const DividerMeta: Meta<typeof Divider> = {
  title: 'Divider',
  component: Divider,
  decorators: [
    (Story) => (
      <Box p="tight" alignItems="center" justifyContent="center" flex={1}>
        <Story name="default" />
      </Box>
    ),
  ],
};

export const DividerDefault = () => <Divider />;

export default DividerMeta;
