import type { TTypography } from './typography.interface';
import Skeleton from '@mui/material/Skeleton';
import BaseTypography from '@mui/material/Typography';

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
