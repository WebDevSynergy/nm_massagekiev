'use client';

import { RotatingLines } from 'react-loader-spinner';

import { SpinnerProps } from './types';

export const Spinner: React.FC<SpinnerProps> = ({
  visible = true,
  width = '20',
  color = 'grey',
  strokeWidth = '5',
}) => {
  return (
    <RotatingLines
      visible={visible}
      width={width}
      strokeColor={color}
      strokeWidth={strokeWidth}
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
    />
  );
};
