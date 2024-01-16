import React from 'react';
import {Box} from '..';

const Divider: React.FC = () => {
  return (
    <Box
      width="100%"
      height={1}
      borderTopWidth={1}
      borderStyle="dashed"
      borderColor="lightBordersSecondary"
    />
  );
};

export default Divider;
