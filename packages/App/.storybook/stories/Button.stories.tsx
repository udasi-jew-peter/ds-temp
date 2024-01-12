import {Meta} from '@storybook/react-native';
import React, {useState} from 'react';
import {View} from 'react-native';
import Button from '../../src/components/Button';
import {parameters} from '../preview';

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

export const PrimaryMedium = () => (
  <Button onPress={() => {}} title="Click me" size="medium" />
);

export const SecondaryMedium = () => (
  <Button
    onPress={() => {}}
    title="Click me"
    variant="secondary"
    size="medium"
  />
);

export const TertiaryMedium = () => (
  <Button
    onPress={() => {}}
    title="Click me"
    variant="tertiary"
    size="medium"
  />
);

export const PrimaryDisabled = () => (
  <Button onPress={() => {}} title="Click me" state="disabled" />
);

export const SecondaryDisabled = () => (
  <Button
    onPress={() => {}}
    title="Click me"
    variant="secondary"
    state="disabled"
  />
);

export const TertiaryDisabled = () => (
  <Button
    onPress={() => {}}
    title="Click me"
    variant="tertiary"
    state="disabled"
  />
);

export const PrimaryMediumDisabled = () => (
  <Button onPress={() => {}} title="Click me" size="medium" state="disabled" />
);

export const SecondaryMediumDisabled = () => (
  <Button
    onPress={() => {}}
    title="Click me"
    variant="secondary"
    size="medium"
    state="disabled"
  />
);

export const TertiaryMediumDisabled = () => (
  <Button
    onPress={() => {}}
    title="Click me"
    variant="tertiary"
    size="medium"
    state="disabled"
  />
);

export const PrimaryLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onPressed = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2800 + (Math.random() - 0.5) * 1000);
  };

  return (
    <Button
      onPress={onPressed}
      title="Click me"
      variant="primary"
      state={isLoading ? 'loading' : 'enabled'}
    />
  );
};
