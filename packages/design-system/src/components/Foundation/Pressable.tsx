import { JsonMap } from '@components/utils';
import { BoxProps } from '@shopify/restyle';
import { Theme } from '@src/theme';
import React, { forwardRef } from 'react';
import { View, PressableProps, GestureResponderEvent, Pressable as RNPressable } from 'react-native';

export const Pressable = forwardRef<
  View,
  BoxProps<Theme, true> &
    Omit<PressableProps, 'style'> & {
      analyticsProps?: JsonMap;
      analyticsEventName?: string;
      analyticsLabel?: string;
    }
>(
  (
    {
      children,
      onPress,
      analyticsEventName,
      analyticsLabel,
      // analyticsProps,
      ...props
    },
    ref,
  ) => {
    // @ts-ignore
    const innerProps = useRestyle(restyleFunctions, props);
    // TODO add provider for analytics
    // const { trackEvent } = useAnalytics();
    const handlePress = (e: GestureResponderEvent) => {
      if (onPress) {
        onPress(e);
        if (analyticsEventName && analyticsLabel) {
          // trackEvent(analyticsEventName, analyticsLabel, analyticsProps);
        }
      }
    };
    return (
      <RNPressable {...innerProps} onPress={handlePress} ref={ref}>
        {children}
      </RNPressable>
    );
  },
);
