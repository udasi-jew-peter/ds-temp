import React from 'react';
import { Box, Pressable, Text } from '..';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@src/theme';

interface RadioProps {
  label: string;
  status: 'on' | 'off';
  state?: 'enabled' | 'disabled';
  onPress: () => void;
}

const Radio: React.FC<RadioProps> = ({ label, state = 'enabled', status, onPress }) => {
  const { sizing } = useTheme<Theme>();

  return (
    <Pressable onPress={onPress} flexDirection="row" alignItems="center">
      <Box
        borderRadius="circular"
        borderColor={
          state === 'enabled'
            ? status === 'on'
              ? 'lightBackgroundsInteractive'
              : 'lightContentSecondary'
            : 'lightBordersSecondary'
        }
        borderWidth={status === 'off' ? 2 : 5}
        height={sizing.iconSmall}
        width={sizing.iconSmall}
      />
      <Text variant="bodyLarge" color="lightContentSecondary" ml="xxTight">
        {label}
      </Text>
    </Pressable>
  );
};

export default Radio;
