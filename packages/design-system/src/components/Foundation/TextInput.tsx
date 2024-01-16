import { BoxProps } from '@shopify/restyle';
import { Theme } from '@src/theme';
import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';

export const TextInput = React.forwardRef<RNTextInput, BoxProps<Theme, true> & Omit<TextInputProps, 'style'>>(
  ({ children, ...props }, ref) => {
    // @ts-ignore
    const innerProps = useRestyle(restyleFunctions, props);
    return (
      <RNTextInput {...innerProps} ref={ref}>
        {children}
      </RNTextInput>
    );
  },
);
