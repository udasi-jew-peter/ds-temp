import { Theme } from '@src/theme';
import { useTheme } from '@shopify/restyle';
import React, { useEffect, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

interface LoadingIndicatorProps {
  show: boolean;
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ show }) => {
  const { colors, spacing, borderRadii, motion } = useTheme<Theme>();
  const visibilityTweener = useSharedValue(0);
  const dot1Tweener = useSharedValue(0);
  const dot2Tweener = useSharedValue(0);
  const dot3Tweener = useSharedValue(0);

  useEffect(() => {
    if (show) {
      visibilityTweener.value = withDelay(
        motion.delays.delay1,
        withTiming(1, {
          duration: motion.durations.duration1,
          easing: motion.easings.standardEffective,
        }),
      );
      dot1Tweener.value = withRepeat(
        withSequence(
          withDelay(
            motion.delays.delay1 * 2,
            withTiming(-10, {
              duration: motion.durations.duration1,
              easing: motion.easings.standardAttentive,
            }),
          ),
          withTiming(0, {
            duration: motion.durations.duration1,
            easing: motion.easings.standardAttentive,
          }),
        ),
        -1,
      );
      dot2Tweener.value = withDelay(
        motion.delays.delay0 / 2,
        withRepeat(
          withSequence(
            withDelay(
              motion.delays.delay1 * 2,
              withTiming(-10, {
                duration: motion.durations.duration1,
                easing: motion.easings.standardAttentive,
              }),
            ),
            withTiming(0, {
              duration: motion.durations.duration1,
              easing: motion.easings.standardAttentive,
            }),
          ),
          -1,
        ),
      );
      dot3Tweener.value = withDelay(
        motion.delays.delay0,
        withRepeat(
          withSequence(
            withDelay(
              motion.delays.delay1 * 2,
              withTiming(-10, {
                duration: motion.durations.duration1,
                easing: motion.easings.standardAttentive,
              }),
            ),
            withTiming(0, {
              duration: motion.durations.duration1,
              easing: motion.easings.standardAttentive,
            }),
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
  }, [motion, show, dot1Tweener, visibilityTweener, dot2Tweener, dot3Tweener]);

  const containerStyle = useAnimatedStyle(() => ({
    zIndex: 10,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.xxTight,
    opacity: visibilityTweener.value,
  }));

  const dot1Style = useAnimatedStyle(() => ({
    transform: [{ translateX: (visibilityTweener.value - 1) * 15 }, { translateY: dot1Tweener.value }],
  }));

  const dot2Style = useAnimatedStyle(() => ({
    transform: [{ translateY: dot2Tweener.value }],
  }));

  const dot3Style = useAnimatedStyle(() => ({
    transform: [{ translateX: (visibilityTweener.value - 1) * -15 }, { translateY: dot3Tweener.value }],
  }));

  const styles = useMemo(
    () =>
      StyleSheet.create({
        dot: {
          width: 8,
          height: 8,
          backgroundColor: colors.lightContentInverseInteractive,
          borderRadius: borderRadii.circular,
        },
      }),
    [borderRadii.circular, colors.lightContentInverseInteractive],
  );

  return (
    <Animated.View style={containerStyle}>
      <Animated.View style={[styles.dot, dot1Style]} />
      <Animated.View style={[styles.dot, dot2Style]} />
      <Animated.View style={[styles.dot, dot3Style]} />
    </Animated.View>
  );
};
