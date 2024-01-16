import { useTheme } from '@shopify/restyle';
import { Theme } from '@src/theme';
import { MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';
import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@components/foundation';
import { LoadingIndicator } from './LoadingIndicator';
import Icon, { IconProps } from '@components/Icon';

export interface ButtonProps {
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
  size = 'large',
  state = 'enabled',
  trailingIcon,
}) => {
  const { sizing, borderWidths, borderRadii, colors, spacing, motion } = useTheme<Theme>();

  let backgroundColor = variant === 'primary' ? colors.lightBackgroundsInteractive : 'transparent';
  let borderColor = variant === 'primary' ? undefined : colors.lightBordersPrimary;
  let borderWidth = variant === 'secondary' ? borderWidths.default : undefined;
  let textColor: keyof Theme['colors'] =
    variant === 'primary' ? 'lightContentInverseInteractive' : 'lightContentPrimary';
  const height =
    variant !== 'tertiary' ? (size === 'large' ? sizing.buttonHeightLarge : sizing.buttonHeightMedium) : undefined;

  if (state === 'disabled') {
    backgroundColor = variant === 'tertiary' ? 'transparent' : colors.lightBackgroundsDisabled;
    borderColor = variant === 'tertiary' ? colors.lightBordersSecondary : undefined;
    borderWidth = undefined;
    textColor = 'lightContentDisabled';
  }

  const styles = useMemo(
    () =>
      StyleSheet.create({
        pressableContainerStyle: {
          width: behavior === 'expand' && variant !== 'tertiary' ? '100%' : undefined,
        },
        pressable: {
          justifyContent: 'center',
          alignItems: 'center',
          height,
          minWidth: variant !== 'tertiary' ? 120 : undefined,
          paddingVertical: variant === 'tertiary' ? spacing.xxTight : undefined,
          borderRadius: borderRadii.small,
          borderColor,
          borderWidth,
          borderBottomWidth: variant === 'tertiary' ? borderWidths.default : undefined,
        },
        textContainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: spacing.xxTight,
        },
      }),
    [behavior, borderColor, borderRadii.small, borderWidth, borderWidths.default, height, spacing.xxTight, variant],
  );

  return (
    <MotiPressable
      onPress={state !== 'loading' ? onPress : undefined}
      containerStyle={styles.pressableContainerStyle}
      style={styles.pressable}
      from={{ scale: 1, backgroundColor }}
      transition={useMemo(
        () =>
          ({}) => {
            'worklet';

            return {
              duration: motion.durations.duration0,
              delay: motion.delays.delay0,
              type: 'timing',
            };
          },
        [motion.delays.delay0, motion.durations.duration0],
      )}
      animate={useMemo(
        () =>
          ({ pressed }) => {
            'worklet';

            return {
              scale: pressed ? 0.95 : 1,
              backgroundColor: pressed ? colors.lightBackgroundsPressedA : backgroundColor,
            };
          },
        [backgroundColor, colors.lightBackgroundsPressedA],
      )}
    >
      <MotiView
        style={styles.textContainer}
        from={{
          opacity: 1,
          scale: 1,
        }}
        animate={{
          opacity: state === 'loading' ? 0 : 1,
          scale: state === 'loading' ? 0.5 : 1,
        }}
        transition={{
          duration: motion.durations.duration1,
          delay: motion.delays.delay1,
          easing: motion.easings.standardEffective,
        }}
      >
        <Text variant={size === 'large' ? 'componentButtonLarge' : 'componentButtonMedium'} color={textColor}>
          {title}
        </Text>
        {trailingIcon !== undefined ? (
          <Icon
            color={variant === 'primary' ? 'lightContentInverseInteractive' : 'lightContentPrimary'}
            name={'shooting-star'}
            size={size === 'large' ? 'iconSmall' : 'iconXSmall'}
          />
        ) : null}
      </MotiView>
      <LoadingIndicator show={state === 'loading'} />
    </MotiPressable>
  );
};

export default Button;
