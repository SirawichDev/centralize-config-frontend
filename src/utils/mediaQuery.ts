import useMediaQuery from '@mui/material/useMediaQuery';

export const useIsMobile = () => {
  return useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
};

export const useIsTablet = () => {
  return useMediaQuery((theme: any) => theme.breakpoints.down('md'));
};

export const useIsLaptop = () => {
  return useMediaQuery((theme: any) => theme.breakpoints.up('sm'));
};

export const useIsDesktop = () => {
  return useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
};
