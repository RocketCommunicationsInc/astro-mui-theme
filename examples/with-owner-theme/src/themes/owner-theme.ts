import { createTheme, Theme } from '@mui/material';
import { astroTokens, Mode } from '@astrouxds/mui-theme';

export const ownerTheme = (mode: Mode): Theme => {
  const {
    color: { background, border },
    radius,
    spacing,
    ...astro
  } = astroTokens({ mode });

  return createTheme({
    // Owner cannot override any palette.
    palette: {
      // This will not work.
      background: {
        default: 'lightgreen',
      },
    },
    // Owner cannot override shape.
    shape: {
      // This will not work.
      borderRadius: 10,
    },
    // Owner cannot override any typography.
    typography: {
      // This will not work.
      fontSize: 24,
    },
    // Uses the astro spacing formula on all MUI theme spacing
    spacing,
    // All MUI components can be overwritten except TextField, if you
    // need to override the TextField it can be done at the component
    // level on the sx prop.
    components: {
      MuiList: {
        styleOverrides: {
          root: {
            backgroundColor: background.surface.default,
          },
        },
        defaultProps: {
          disablePadding: true,
        },
      },
      MuiListItemButton: {
        defaultProps: {
          disableRipple: true,
          divider: true,
        },
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: background.surface.hover,
            },
            '&.Mui-selected': {
              paddingLeft: spacing(3),
              borderLeftStyle: 'solid',
              borderLeftWidth: astro.border.width.lg,
              borderLeftColor: border.interactive.default,
              backgroundColor: background.surface.selected,
            },
            '&.MuiListItemButton-divider': {
              borderBottom: 'none',
              boxShadow: `0 -1px 0 0 ${background.base.default}`,
            },
            paddingRight: spacing(4),
            paddingLeft: spacing(4),
          },
        },
      },
      MuiListItemText: {
        defaultProps: {
          primaryTypographyProps: {
            noWrap: true,
            ...astro.typography.h3,
          },
          secondaryTypographyProps: {
            noWrap: true,
            ...astro.typography.h6,
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          disableGutters: true,
        },
      },
      MuiLink: {
        defaultProps: {
          underline: 'none',
        },
        styleOverrides: {
          underlineNone: {
            '&:hover': {
              textDecoration: 'none',
            },
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            borderRadius: 0,
          },
        },
      },
    },
  });
};
