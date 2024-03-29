import React, { useState } from 'react';
import { Meta } from '@storybook/react-native';
import { Box, Text, Radio } from '@src/components';

const RadioMeta: Meta<typeof Radio> = {
  title: 'Radio',
  component: Radio,
  decorators: [
    (Story) => (
      <Box p="tight" justifyContent="center" flex={1}>
        <Story name="default" />
      </Box>
    ),
  ],
};

const options = { a: 'Option 1', b: 'Option 2', c: 'Option 3' };
type OptionsKey = keyof typeof options;

export const RadioDefault = () => {
  const [selected, setSelected] = useState<OptionsKey>('a');

  return (
    <Box>
      <Text variant="bodyLarge" color="lightContentPrimary" mb="xTight">
        Select an option:
      </Text>
      {Object.keys(options).map((key) => (
        <Radio
          key={key}
          label={options[key as OptionsKey]}
          status={key === selected ? 'on' : 'off'}
          onPress={() => setSelected(key as OptionsKey)}
        />
      ))}
    </Box>
  );
};

export const RadioDisabled = () => {
  const [selected, setSelected] = useState<OptionsKey>('a');

  return (
    <Box>
      <Text variant="bodyLarge" color="lightContentPrimary" mb="xTight">
        Select an option:
      </Text>
      {Object.keys(options).map((key) => (
        <Radio
          key={key}
          label={options[key as OptionsKey]}
          status={key === selected ? 'on' : 'off'}
          onPress={() => setSelected(key as OptionsKey)}
          state="disabled"
        />
      ))}
    </Box>
  );
};

export default RadioMeta;
