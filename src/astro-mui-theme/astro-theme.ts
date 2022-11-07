import { createTheme } from '@mui/material';
import type { TypographyStyleOptions } from '@mui/material/styles/createTypography';
import type { AstroTokensOptions } from '../types/global';
import type { AstroTheme } from '../types/astro-theme';
import { astroTokens } from './astro-tokens';

type Size = 'small' | 'medium' | 'large';

// allow configuration in the createTheme() below
declare module '@mui/material' {
  interface ThemeOptions extends AstroTheme {}

  interface TypographyVariantsOptions {
    body3?: TypographyStyleOptions;
    display1?: TypographyStyleOptions;
    display2?: TypographyStyleOptions;
  }

  interface StandardTextFieldProps {
    size?: Size;
  }
  interface FilledTextFieldProps {
    size?: Size;
  }
  interface OutlinedTextFieldProps {
    size?: Size;
  }
}

export const astroTheme = (options: AstroTokensOptions) => {
  const astro = astroTokens(options);

  return createTheme({
    astro,
    palette: {
      common: {
        black: astro.color.text.black,
        white: astro.color.text.white,
      },
      /* -- throws unsupported format error for var() -- */
      primary: {
        main: astro.color.text.interactive.default,
      },
      secondary: {
        main: astro.color.text.interactive.hover,
      },
      error: {
        main: astro.color.text.error,
      },
      warning: {
        main: astro.color.status.caution,
      },
      info: {
        main: astro.color.status.standby,
      },
      success: {
        main: astro.color.status.normal,
      },
      text: {
        primary: astro.color.text.primary,
        // does NOT throw
        secondary: astro.color.text.secondary,
      },
      /* -- end unsupported errors -- */
      divider: astro.color.text.primary,
      background: {
        default: astro.color.background.base.default,
        paper: astro.color.background.surface.default,
      },
      action: {
        hover: astro.color.background.base.default,
        selected: astro.color.background.base.selected,
      },
    },
    shape: {
      borderRadius: parseInt(astro.radius.base.charAt(0)),
    },
    typography: {
      fontFamily: astro.typography.fontFamily,
      button: astro.typography.body1,
      body1: astro.typography.body1,
      body2: astro.typography.body2,
      body3: astro.typography.body3,
      display1: astro.typography.display1,
      display2: astro.typography.display2,
      h1: astro.typography.h1,
      h2: astro.typography.h2,
      h3: astro.typography.h3,
      h4: astro.typography.h4,
      h5: astro.typography.h5,
      h6: astro.typography.h6,
    },
    components: {
      MuiTextField: {
        defaultProps: {
          size: 'medium',
          InputLabelProps: { shrink: true },
        },
        styleOverrides: {
          root: {
            '& label': {
              transform: 'none',
              transition: 'none',
              color: astro.color.text.primary,
              ...astro.typography.body1,
              '&.Mui-focused, &.Mui-error': {
                color: astro.color.text.primary,
              },
              '&.Mui-disabled': {
                color: astro.color.text.placeholder,
              },
              '& + .MuiOutlinedInput-root': {
                marginTop: astro.spacing(8),
              },
            },
            '& .MuiOutlinedInput-root': {
              backgroundColor: astro.color.background.base.default,
              borderRadius: astro.radius.base,
              '& fieldset': {
                border: 'none',
                boxShadow: `${astro.color.border.interactive.muted} 0 0 0 1px inset`,
              },
              '&:hover fieldset': {
                boxShadow: `${astro.color.border.interactive.hover} 0 0 0 1px inset`,
              },
              '&.Mui-focused fieldset': {
                boxShadow: `${astro.color.border.interactive.hover} 0 0 0 1px inset`,
              },
              '&.Mui-error fieldset': {
                boxShadow: `${astro.color.border.error} 0 0 0 1px inset`,
              },
              '&.Mui-disabled fieldset': {
                opacity: astro.opacity.disabled,
                boxShadow: `${astro.color.border.interactive.muted} 0 0 0 1px inset`,
              },
            },
            '& .MuiInputBase-input': {
              '&.Mui-disabled': {
                WebkitTextFillColor: astro.color.text.placeholder,
              },
            },
            '& .MuiFormHelperText-root': {
              margin: astro.spacing(2, 0, 0),
              ...astro.typography.body2,
              '&.Mui-disabled': {
                color: astro.color.text.placeholder,
              },
            },
            '& .MuiInputBase-adornedStart': {
              paddingLeft: astro.spacing(2),
            },
            '& .MuiInputBase-adornedEnd': {
              paddingRight: astro.spacing(2),
            },
          },
        },
        variants: [
          {
            props: { size: 'small' },
            style: {
              '& .MuiInputBase-input': {
                height: '1.25rem',
                padding: astro.spacing(1, 2),
              },
            },
          },
          {
            props: { size: 'medium' },
            style: {
              '& .MuiInputBase-input': {
                height: '1.25rem',
                padding: astro.spacing(2),
              },
            },
          },
          {
            props: { size: 'large' },
            style: {
              '& .MuiInputBase-input': {
                height: '1.25rem',
                padding: astro.spacing(3, 2),
              },
            },
          },
        ],
      },
    },
  });
};
