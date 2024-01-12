import React, {useEffect, useMemo} from 'react';
import {Box, Pressable, Text} from '../foundation';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@jupitermoney/io-theme';
import Icon, {IconProps} from './Icon';
import {MotiPressable} from 'moti/interactions';
import {MotiView} from 'moti';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';

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

interface LoadingIndicatorProps {
  show: boolean;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({show}) => {
  const {colors, spacing, borderRadii, durations, delays} = useTheme<Theme>();
  const visibilityTweener = useSharedValue(0);
  const dot1Tweener = useSharedValue(0);
  const dot2Tweener = useSharedValue(0);
  const dot3Tweener = useSharedValue(0);

  useEffect(() => {
    if (show) {
      visibilityTweener.value = withDelay(
        delays.delay1,
        withTiming(1, {duration: durations.duration1}),
      );
      dot1Tweener.value = withRepeat(
        withSequence(
          withDelay(
            delays.delay1 * 2,
            withTiming(-10, {duration: durations.duration1}),
          ),
          withTiming(0, {duration: durations.duration1}),
        ),
        -1,
      );
      dot2Tweener.value = withDelay(
        delays.delay0 / 2,
        withRepeat(
          withSequence(
            withDelay(
              delays.delay1 * 2,
              withTiming(-10, {duration: durations.duration1}),
            ),
            withTiming(0, {duration: durations.duration1}),
          ),
          -1,
        ),
      );
      dot3Tweener.value = withDelay(
        delays.delay0,
        withRepeat(
          withSequence(
            withDelay(
              delays.delay1 * 2,
              withTiming(-10, {duration: durations.duration1}),
            ),
            withTiming(0, {duration: durations.duration1}),
          ),
          -1,
        ),
      );
    } else {
      visibilityTweener.value = withTiming(0);
      dot1Tweener.value = withTiming(0);
      dot2Tweener.value = withTiming(0);
      dot3Tweener.value = withTiming(0);
    }
  }, [
    delays,
    durations,
    show,
    dot1Tweener,
    visibilityTweener,
    dot2Tweener,
    dot3Tweener,
  ]);

  const styles = StyleSheet.create({
    dot: {
      width: 8,
      height: 8,
      backgroundColor: colors.lightContentInverseInteractive,
      borderRadius: borderRadii.circular,
    },
  });

  const dot1Style = useAnimatedStyle(() => ({
    transform: [
      {translateX: (visibilityTweener.value - 1) * 15},
      {translateY: dot1Tweener.value},
    ],
  }));

  const dot2Style = useAnimatedStyle(() => ({
    transform: [{translateY: dot2Tweener.value}],
  }));

  const dot3Style = useAnimatedStyle(() => ({
    transform: [
      {translateX: (visibilityTweener.value - 1) * -15},
      {translateY: dot3Tweener.value},
    ],
  }));

  const containerStyle = useAnimatedStyle(() => ({
    zIndex: 10,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.xxTight,
    opacity: visibilityTweener.value,
  }));

  return (
    <Animated.View style={containerStyle}>
      <Animated.View style={[styles.dot, dot1Style]} />
      <Animated.View style={[styles.dot, dot2Style]} />
      <Animated.View style={[styles.dot, dot3Style]} />
    </Animated.View>
  );
};

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  onPress,
  behavior = 'expand',
  size = 'large',
  state = 'enabled',
  trailingIcon,
}) => {
  const {
    sizing,
    borderWidths,
    borderRadii,
    colors,
    spacing,
    durations,
    delays,
  } = useTheme<Theme>();

  let backgroundColor =
    variant === 'primary' ? colors.lightBackgroundsInteractive : undefined;
  let borderColor =
    variant === 'primary' ? undefined : colors.lightBordersPrimary;
  let borderWidth = variant === 'secondary' ? borderWidths.default : undefined;
  let textColor: keyof Theme['colors'] =
    variant === 'primary'
      ? 'lightContentInverseInteractive'
      : 'lightContentPrimary';
  const height =
    variant !== 'tertiary'
      ? size === 'large'
        ? sizing.buttonHeightLarge
        : sizing.buttonHeightMedium
      : undefined;

  if (state === 'disabled') {
    backgroundColor =
      variant === 'tertiary' ? undefined : colors.lightBackgroundsDisabled;
    borderColor =
      variant === 'tertiary' ? colors.lightBordersSecondary : undefined;
    borderWidth = undefined;
    textColor = 'lightContentDisabled';
  }

  return (
    <MotiPressable
      onPress={onPress}
      containerStyle={{
        width: behavior === 'expand' ? '100%' : undefined,
      }}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height,
        minWidth: variant !== 'tertiary' ? 120 : undefined,
        paddingVertical: variant === 'tertiary' ? spacing.xxTight : undefined,
        borderRadius: borderRadii.small,
        borderColor,
        borderWidth,
        borderBottomWidth:
          variant === 'tertiary' ? borderWidths.default : undefined,
      }}
      from={{scale: 1, backgroundColor}}
      transition={useMemo(
        () =>
          ({}) => {
            'worklet';

            return {
              duration: durations.duration0,
              delay: delays.delay0,
              type: 'timing',
            };
          },
        [delays.delay0, durations.duration0],
      )}
      animate={useMemo(
        () =>
          ({pressed}) => {
            'worklet';

            return {
              scale: pressed ? 0.95 : 1,
              backgroundColor: pressed
                ? colors.lightBackgroundsPressedA
                : backgroundColor,
            };
          },
        [backgroundColor, colors.lightBackgroundsPressedA],
      )}>
      <MotiView
        from={{
          opacity: 1,
          scale: 1,
        }}
        animate={{
          opacity: state === 'loading' ? 0 : 1,
          scale: state === 'loading' ? 0.5 : 1,
        }}
        transition={{
          duration: durations.duration1,
          delay: delays.delay1,
        }}>
        <Text
          variant={
            size === 'large' ? 'componentButtonLarge' : 'componentButtonMedium'
          }
          color={textColor}>
          {title}
        </Text>
      </MotiView>
      <LoadingIndicator show={state === 'loading'} />
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
    </MotiPressable>
  );
};

export default Button;
