import React from 'react';
import type { TTypography } from './typography.interface';
import { Skeleton, Typography as BaseTypography } from '@mui/material';

/**
 * Primary UI component for user interaction
 */
export const Typography = ({
  isLoading,
  skeletonProps,
  ...props
}: TTypography) => {
  return (
    <>
      {isLoading ? (
        <Skeleton variant='text' {...skeletonProps} />
      ) : (
        <BaseTypography {...props}>{props?.children}</BaseTypography>
      )}
    </>
  );
};
