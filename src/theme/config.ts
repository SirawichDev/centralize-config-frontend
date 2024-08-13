import { alpha, getContrastRatio } from '@mui/material';
import { Noto_Sans_Thai, Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

const noto_sans_thai = Noto_Sans_Thai({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin']
});

export const DEFAULT_THEME_FONTS = `${poppins.style.fontFamily} , ${noto_sans_thai.style.fontFamily}`;

function generateAlphaColor(color: string) {
  return {
    main: alpha(color, 0.7),
    light: alpha(color, 0.5),
    dark: alpha(color, 0.9),
    contrastText: getContrastRatio(color, '#fff') > 4.5 ? '#fff' : '#111'
  };
}

type TThemeConfig = {
  themeFont?: string;
};

export const themeConfig = ({ themeFont }: TThemeConfig) => {
  return {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1000,
        lg: 1200,
        1440: 1440,
        xl: 1920
      }
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#ffffff',
            color: '#00072B'
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#ffffff',
            color: '#00072B'
          }
        }
      },
      MuiFormLabel: {
        styleOverrides: {
          root: { zIndex: '0 !important' },
          asterisk: { color: 'red' }
        }
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            '& .MuiButtonBase-root': {
              minHeight: 56
            }
          },
          indicator: {
            height: '5px'
          }
        }
      },
      MuiTab: {
        styleOverrides: {
          root: {
            fontSize: 16,
            paddingLeft: 24,
            paddingRight: 24
          }
        },
        variants: [
          {
            props: { selected: true },
            style: {
              fontWeight: 'bold'
            }
          }
        ]
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: '10px',
            legend: { width: 'auto' }
          }
        }
      },
      MuiInputBase: {
        variants: [
          {
            props: { readOnly: true },
            style: {
              pointerEvents: 'none'
            }
          },
          {
            props: { disabled: true },
            style: {
              borderRadius: '10px',
              background: '#b8b8b826'
            }
          }
        ]
      },
      MuiChip: {
        styleOverrides: {
          root: { borderRadius: '10px' }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 'bold',
            borderRadius: 12
          }
        },
        variants: [
          {
            props: { size: 'semiLarge' },
            style: {
              height: 46,
              fontSize: 16
            }
          },
          {
            props: { variant: 'outlined' },
            style: {
              borderWidth: 2,
              ':hover': {
                borderWidth: 2
              }
            }
          },
          {
            props: { variant: 'text' },
            style: {
              fontWeight: 'normal'
            }
          },
          {
            props: { rounded: true },
            style: {
              borderRadius: 32
            }
          },
          {
            props: { size: 'tiny' },
            style: {
              fontSize: 13
            }
          }
        ]
      },
      MuiStepLabel: {
        styleOverrides: {
          labelContainer: ({ theme }: any) => ({
            '.MuiStepLabel-label': {
              fontWeight: 'bold',
              color: 'black'
            },
            '.Mui-active.MuiStepLabel-label': {
              fontWeight: 'bold',
              color: theme.palette.primary.main
            },
            '.Mui-completed.MuiStepLabel-label': {
              fontWeight: 'bold',
              color: theme.palette.success.main
            },
            '.Mui-error.MuiStepLabel-label': {
              fontWeight: 'bold',
              color: theme.palette.warning.main
            },
            '.Mui-disabled.MuiStepLabel-label': {
              fontWeight: 'bold',
              color: 'grey.500'
            }
          }),
          iconContainer: ({ theme }: any) => ({
            '.Mui-completed.MuiSvgIcon-root': {
              color: theme.palette.success.main
            },
            '.Mui-error.MuiSvgIcon-root': {
              color: theme.palette.warning.main
            }
          })
        },
        variants: [
          {
            props: { active: true },
            style: {
              fontWeight: 'bold'
            }
          },
          {
            props: { completed: true },
            style: {
              fontWeight: 'bold'
            }
          }
        ]
      },
      MuiTypography: {
        defaultProps: {
          fontFamily: themeFont || DEFAULT_THEME_FONTS,
          display: 'block',
          lineHeight: 2
        }
      }
    },

    typography: {
      fontFamily: themeFont || DEFAULT_THEME_FONTS,
      display: {
        fontSize: '16px',
        fontWeight: 'bold',
        display: 'block',
        lineHeight: 2
      },
      'title-24': {
        fontWeight: 'bold',
        fontSize: 24,
        display: 'block',
        lineHeight: 2
      },
      'title-20': {
        fontWeight: 'bold',
        fontSize: 20,
        display: 'block',
        lineHeight: 2
      },
      h5: {
        fontWeight: 'bold'
      },
      h6: {
        fontWeight: 'bold'
      }
    },
    introText: {
      fontFamily: themeFont || DEFAULT_THEME_FONTS,
      color: '#ffffff'
    },
    palette: {
      lightBlue: {
        main: '#5B97E5',
        dark: '#2D4B72',
        light: '#3F69A0',
        contrastText: '#ffffff'
      },
      grey: { ...generateAlphaColor('#F6F6F6'), contrastText: '#888888' },
      gray: {
        main: '#A7A7A7',
        dark: '#E8E8E8',
        light: '#F9F9F9',
        contrastText: '#888888'
      },
      primary: {
        main: '#30A8B7',
        50: '#EFFDFF',
        dark: '#019590',
        light: '#34c8c3',
        contrastText: '#ffffff',
        text: '#2B2B2B'
      },
      success: {
        main: '#00A743'
      },
      warning: {
        main: '#F6A050',
        contrastText: '#ffffff'
      },
      red: {
        main: '#E91010',
        dark: '#A90B0B',
        light: '#FFE1E1',
        contrastText: '#ffffff'
      },
      blue: {
        main: '#1555E4',
        dark: '#0F3894',
        light: '#DBE6FF',
        contrastText: '#ffffff'
      },
      green: {
        main: '#02B474',
        dark: '#10885D',
        light: '#E9FFF7',
        contrastText: '#ffffff'
      },
      yellow: {
        main: '#DEB047',
        dark: '#b18c38',
        light: '#EDEDED',
        contrastText: '#ffffff'
      },
      orange: {
        main: '#F6A050',
        dark: '#e88847',
        light: '#fabb72',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#F6F6F6',
        light: '#fafafa',
        dark: '#e2e2e2',
        contrastText: '#888888'
      },
      draft: {
        main: '#F9BE00',
        contrastText: '#FFFFFF'
      },
      primary_alt: {
        main: '#EFFDFF',
        contrastText: '#268692'
      },
      success_alt: {
        main: '#E9FFF7',
        contrastText: '#02B474'
      },
      info_alt: {
        main: '#DBE6FF',
        contrastText: '#1555E4'
      },
      warning_alt: {
        main: '#FFF1E9',
        contrastText: '#F4742C'
      },
      error: {
        main: '#F65050',
        contrastText: '#ffffff'
      },
      error_alt: {
        main: '#FFE1E1',
        contrastText: '#F65050'
      }
    },
    shape: {
      borderRadius: 8
    },
    shadows: [
      'none',
      '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
      '0px 1px 2px rgba(100, 116, 139, 0.12)',
      '0px 1px 4px rgba(100, 116, 139, 0.12)',
      '0px 1px 5px rgba(100, 116, 139, 0.12)',
      '0px 1px 6px rgba(100, 116, 139, 0.12)',
      '0px 2px 6px rgba(100, 116, 139, 0.12)',
      '0px 3px 6px rgba(100, 116, 139, 0.12)',
      '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
      '0px 5px 12px rgba(100, 116, 139, 0.12)',
      '0px 5px 14px rgba(100, 116, 139, 0.12)',
      '0px 5px 15px rgba(100, 116, 139, 0.12)',
      '0px 6px 15px rgba(100, 116, 139, 0.12)',
      '0px 7px 15px rgba(100, 116, 139, 0.12)',
      '0px 8px 15px rgba(100, 116, 139, 0.12)',
      '0px 9px 15px rgba(100, 116, 139, 0.12)',
      '0px 10px 15px rgba(100, 116, 139, 0.12)',
      '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
      '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
      '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
      '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
      '0px 25px 50px rgba(100, 116, 139, 0.25)',
      '0px 25px 50px rgba(100, 116, 139, 0.25)',
      '0px 25px 50px rgba(100, 116, 139, 0.25)',
      '0px 25px 50px rgba(100, 116, 139, 0.25)'
    ]
  };
};
