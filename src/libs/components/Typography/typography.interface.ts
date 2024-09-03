import type { SkeletonProps, TypographyProps } from '@mui/material';

export type TTypography = {
  isLoading?: boolean;
  skeletonProps: SkeletonProps;
} & TypographyProps;
