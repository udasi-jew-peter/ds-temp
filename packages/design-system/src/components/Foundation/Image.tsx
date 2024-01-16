import React, { forwardRef } from 'react';
import { ImageProps, Image as RNImage } from 'react-native';

export const Image = forwardRef<RNImage, ImageProps>((props, ref) => <RNImage {...props} ref={ref} />);
