import React from 'react';
import Button from '../../src/components/Button';
import {View} from 'react-native';
import {Meta} from '@storybook/react-native';

const ButtonMeta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  decorators: [
    Story => (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          padding: 16,
        }}>
        <Story name="default" />
      </View>
    ),
  ],
};

export default ButtonMeta;

export const Primary = () => <Button onPress={() => {}} title="Click me" />;

export const Secondary = () => (
  <Button onPress={() => {}} title="Click me" variant="secondary" />
);

export const Tertiary = () => (
  <Button onPress={() => {}} title="Click me" variant="tertiary" />
);
