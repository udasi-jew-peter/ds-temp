import React from 'react';
import Icon from '@components/Icon';
import { Theme } from '@src/theme';

interface IconButtonProps {
  size?: 'small' | 'medium' | 'large';
  state?: 'enabled' | 'disabled';
}

const IconButton: React.FC<IconButtonProps> = ({ size: iconSize = 'medium', state = 'enabled' }) => {
  let size: keyof Theme['sizing'] =
    iconSize === 'small' ? 'iconSmall' : iconSize === 'medium' ? 'iconMedium' : 'iconLarge';

  return (
    <Icon
      name="shooting-star"
      size={size}
      color={state === 'enabled' ? 'lightContentPrimary' : 'lightContentDisabled'}
    />
  );
};

export default IconButton;
