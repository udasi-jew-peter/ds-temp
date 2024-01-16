import { Box } from '@src/components';
import React, { memo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SafeBottomSpace = memo(() => {
  const { bottom } = useSafeAreaInsets();
  return <Box height={bottom} />;
});
