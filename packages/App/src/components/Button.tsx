import React from 'react';
import {Box, Pressable, Text} from '../foundation';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@jupitermoney/io-theme';
import Icon, {IconProps} from './Icon';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  // TODO implement state
  state?: 'enabled' | 'disabled' | 'pressed' | 'loading';
  size?: 'large' | 'medium';
  behavior?: 'hug' | 'expand';
  trailingIcon?: IconProps['name'];
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  onPress,
  behavior = 'expand',
  size = 'medium',
  trailingIcon,
}) => {
  const {sizing, borderWidths} = useTheme<Theme>();

  return (
    <Pressable onPress={onPress}>
      <Box
        bg={variant === 'primary' ? 'lightBackgroundsInteractive' : undefined}
        borderRadius="small"
        borderColor={variant === 'primary' ? undefined : 'lightBordersPrimary'}
        borderWidth={variant === 'secondary' ? borderWidths.default : undefined}
        borderBottomWidth={
          variant === 'tertiary' ? borderWidths.default : undefined
        }
        minWidth={120}
        width={behavior === 'expand' ? '100%' : undefined}
        height={
          size === 'large'
            ? sizing.buttonHeightLarge
            : sizing.buttonHeightMedium
        }
        justifyContent="center"
        alignItems="center">
        <Text
          variant={
            size === 'large' ? 'componentButtonLarge' : 'componentButtonMedium'
          }
          color={
            variant === 'primary'
              ? 'lightContentInverseInteractive'
              : 'lightContentPrimary'
          }>
          {title}
        </Text>
        {trailingIcon !== undefined ? (
          <Icon
            color={
              variant === 'primary'
                ? 'lightContentInverseInteractive'
                : 'lightContentPrimary'
            }
            name={trailingIcon}
            // TODO make it iconXSmall
            size={size === 'large' ? 'iconSmall' : 'iconSmall'}
          />
        ) : null}
      </Box>
    </Pressable>
  );
};

export default Button;
