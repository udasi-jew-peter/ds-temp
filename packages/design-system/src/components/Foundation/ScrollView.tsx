import { BoxProps, useRestyle } from '@shopify/restyle';
import { Theme } from '@src/theme';

import React, { PropsWithChildren } from 'react';
import Animated from 'react-native-reanimated';

import { ScrollViewProps } from 'react-native';

const { ScrollView: RNScrollView } = Animated;

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
