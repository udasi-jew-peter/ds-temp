import {
  BoxProps,
  backgroundColor,
  border,
  composeRestyleFunctions,
  createBox,
  createText,
  shadow,
  spacing,
  spacingShorthand,
  useRestyle,
} from '@shopify/restyle';
import React, {PropsWithChildren} from 'react';
import {
  GestureResponderEvent,
  ImageProps,
  PressableProps,
  Image as RNImage,
  Pressable as RNPressable,
  TextInput as RNTextInput,
  ScrollViewProps,
  TextInputProps,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {JsonMap} from './utils';
import {Theme} from '@jupitermoney/io-theme';

const {ScrollView: RNScrollView} = Animated;

const restyleFunctions = composeRestyleFunctions([
  spacing,
  spacingShorthand,
  border,
  backgroundColor,
  shadow,
]);

/**
 * Components
 */
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const Image = React.forwardRef<RNImage, ImageProps>((props, ref) => (
  <RNImage {...props} ref={ref} />
));

export const SafeBottomSpace = React.memo(() => {
  const {bottom} = useSafeAreaInsets();
  return <Box height={bottom} />;
});

export const SafeTopSpace = React.memo(() => {
  const {top} = useSafeAreaInsets();
  return <Box height={top} />;
});

export const ScrollView = React.forwardRef<
  typeof RNScrollView,
  PropsWithChildren<BoxProps<Theme, true> & Omit<ScrollViewProps, 'style'>>
>((props, ref) => {
  // @ts-ignore
  const innerProps = useRestyle(restyleFunctions, props);
  return (
    <RNScrollView
      keyboardShouldPersistTaps="handled"
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...innerProps}
      ref={ref as any}
    />
  );
});

export const Pressable = React.forwardRef<
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

export const TextInput = React.forwardRef<
  RNTextInput,
  BoxProps<Theme, true> & Omit<TextInputProps, 'style'>
>(({children, ...props}, ref) => {
  // @ts-ignore
  const innerProps = useRestyle(restyleFunctions, props);
  return (
    <RNTextInput {...innerProps} ref={ref}>
      {children}
    </RNTextInput>
  );
});

// TODO Add Hr
// export const Hr = ({
//   borderColor = 'black20',
// }: {
//   borderColor?: 'black20' | 'white' | 'jbg' | 'black95';
// }) => <Box borderTopWidth={0.5} borderColor={borderColor} />;

// TODO Add Icon
