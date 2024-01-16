import { Box } from '@src/components';
import React, { memo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SafeTopSpace = memo(() => {
  const { top } = useSafeAreaInsets();
  return <Box height={top} />;
});
