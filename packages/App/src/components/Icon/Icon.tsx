/**
 * Icon icon set component.
 * Usage: <Icon name="icon-name" size="iconXSmall" color="colorLightContentPrimary" />
 */

import React from 'react';
import { Theme } from '@src/theme';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '@assets/fonts/icons-config.json';
import { useTheme } from '@shopify/restyle';
const _Icon = createIconSetFromIcoMoon(icoMoonConfig);

export interface IconProps {
  name: 'shooting-star';
  color: keyof Theme['colors'];
  // TODO redo sizing keys
  size: keyof Theme['sizing'];
}

const Icon: React.FC<IconProps> = ({ name, color, size }) => {
  const { colors, sizing } = useTheme<Theme>();
  return <_Icon name={name} size={sizing[size]} color={colors[color]} />;
};

export default Icon;
