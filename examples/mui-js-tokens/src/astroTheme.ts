import { createTheme } from '@mui/material';
import type { TypographyStyleOptions } from '@mui/material/styles/createTypography';
import * as all from '@astrouxds/tokens/dist/js/tokens.module';
import * as light from '@astrouxds/tokens/dist/js/theme.light.module';

type AstroTokens = typeof all;
type Size = 'small' | 'medium' | 'large';

declare module '@mui/material' {
  interface Theme {
    astro: AstroTokens;
  }

  interface ThemeOptions {
    astro: AstroTokens;
  }

  interface TypographyVariantsOptions {
    body1Bold: TypographyStyleOptions;
    body2Bold: TypographyStyleOptions;
    body3: TypographyStyleOptions;
    body3Bold: TypographyStyleOptions;
    controlBody1: TypographyStyleOptions;
    controlBody1Bold: TypographyStyleOptions;
    display1: TypographyStyleOptions;
    display2: TypographyStyleOptions;
    h1Bold: TypographyStyleOptions;
  }

  interface TypographyPropsVariantOverrides {
    body1Bold: true;
    body2Bold: true;
    body3: true;
    body3Bold: true;
    controlBody1: true;
    controlBody1Bold: true;
    display1: true;
    display2: true;
    h1Bold: true;
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

export type AstroThemeOptions = {
  mode?: 'dark' | 'light';
};

export const astroTheme = ({ mode }: AstroThemeOptions) => {
  let astro: AstroTokens = { ...all };

  if (mode === 'light') {
    astro = { ...all, ...light };
  }

  return createTheme({
    astro,
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
          disableRipple: true,
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontFamily: astro.FontControlBody1FontFamily,
            fontWeight: astro.FontControlBody1FontWeight,
            lineHeight: astro.FontControlBody1LineHeight,
            fontSize: astro.FontControlBody1FontSize,
            letterSpacing: astro.FontControlBody1LetterSpacing,
            borderRadius: astro.ButtonRadius,
            '&.Mui-focusVisible': {
              outline: `1px solid ${astro.ColorBorderFocusDefault}`,
              outlineOffset: '0.125rem',
            },
          },
          contained: {
            color: astro.ButtonColorTextPrimary,
            backgroundColor: astro.ButtonColorBackgroundPrimaryDefault,
            '&:hover': {
              backgroundColor: astro.ButtonColorBackgroundPrimaryHover,
            },
          },
          outlined: {
            color: astro.ButtonColorTextSecondaryDefault,
            border: 'none',
            boxShadow: `0 0 0 ${astro.ButtonBorderWidth} ${astro.ButtonColorBorderSecondaryDefault} inset`,
            '&:hover': {
              color: astro.ButtonColorTextSecondaryHover,
              border: 'none',
              backgroundColor: 'transparent',
              boxShadow: `0 0 0 ${astro.ButtonBorderWidth} ${astro.ButtonColorBorderSecondaryHover} inset`,
            },
          },
          text: {
            color: astro.ButtonColorTextBorderlessDefault,
            '&:hover': {
              color: astro.ButtonColorTextBorderlessHover,
              backgroundColor: 'transparent',
            },
          },
          sizeSmall: {
            padding: `${astro.ButtonPaddingYSmall} ${astro.ButtonPaddingXSmall}`,
          },
          sizeMedium: {
            padding: `${astro.ButtonPaddingYMedium} ${astro.ButtonPaddingXMedium}`,
          },
          sizeLarge: {
            padding: `${astro.ButtonPaddingYLarge} ${astro.ButtonPaddingXLarge}`,
          },
        },
      },
      MuiIconButton: {
        defaultProps: { disableRipple: true },
        styleOverrides: {
          root: {
            padding: 0,
            borderRadius: 0,
            '&.Mui-focusVisible': {
              outline: `1px solid ${astro.ColorBorderFocusDefault}`,
              outlineOffset: '0.125rem',
            },
          },
        },
      },
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
              color: astro.InputColorTextDefault,
              fontFamily: astro.FontControlBody1FontFamily,
              fontWeight: astro.FontControlBody1FontWeight,
              lineHeight: astro.FontControlBody1LineHeight,
              fontSize: astro.FontControlBody1FontSize,
              letterSpacing: astro.FontControlBody1LetterSpacing,
              '&.Mui-focused, &.Mui-error': {
                color: astro.InputColorTextDefault,
              },
              '&.Mui-disabled': {
                color: astro.InputColorTextPlaceholder,
              },
              '& + .MuiOutlinedInput-root': {
                marginTop: astro.Spacing8,
              },
            },
            '& .MuiOutlinedInput-root': {
              backgroundColor: astro.InputColorBackgroundDefault,
              borderRadius: astro.InputRadius,
              '& fieldset': {
                border: 'none',
                boxShadow: `${astro.InputColorBorderDefault} 0 0 0 1px`,
              },
              '&:hover fieldset': {
                boxShadow: `${astro.InputColorBorderHover} 0 0 0 1px`,
              },
              '&.Mui-focused fieldset': {
                boxShadow: `${astro.InputColorBorderHover} 0 0 0 1px`,
              },
              '&.Mui-focused': {
                outline: `1px solid ${astro.ColorBorderFocusDefault}`,
                outlineOffset: '0.1875rem',
                '&:hover': { outline: 'none' },
              },
              '&.Mui-error fieldset': {
                boxShadow: `${astro.InputColorBorderInvalid} 0 0 0 1px`,
              },
              '&.Mui-disabled fieldset': {
                opacity: astro.OpacityDisabled,
                boxShadow: `${astro.InputColorBorderDefault} 0 0 0 1px`,
                cursor: 'not-allowed',
              },
            },
            '& .MuiInputBase-input': {
              '&.Mui-disabled': {
                WebkitTextFillColor: astro.InputColorTextPlaceholder,
                cursor: 'not-allowed',
              },
            },
            '& .MuiFormHelperText-root': {
              margin: `${astro.Spacing2} ${astro.Spacing0} ${astro.Spacing0}`,
              fontFamily: astro.FontBody2FontFamily,
              fontWeight: astro.FontBody2FontWeight,
              lineHeight: astro.FontBody2LineHeight,
              fontSize: astro.FontBody2FontSize,
              letterSpacing: astro.FontBody2LetterSpacing,
              '&.Mui-disabled': {
                color: astro.InputColorTextPlaceholder,
              },
              '&.Mui-error': {
                color: astro.ColorTextError,
                fill: astro.ColorTextError,
                fontWeight: astro.FontBody2BoldFontWeight,
              },
            },
            '& .MuiInputBase-adornedStart': {
              paddingLeft: astro.InputPrefixMarginRight,
            },
            '& .MuiInputBase-adornedEnd': {
              paddingRight: astro.InputSuffixMarginLeft,
            },
          },
        },
        variants: [
          {
            props: { size: 'small' },
            style: {
              '& .MuiInputBase-input': {
                height: '1.25rem',
                padding: `${astro.Spacing1} ${astro.Spacing2}`,
                // TODO: Y and X seem to be reversed
                // padding: `${astro.InputPaddingYSmall} ${astro.InputPaddingXSmall}`,
              },
            },
          },
          {
            props: { size: 'medium' },
            style: {
              '& .MuiInputBase-input': {
                height: '1.25rem',
                padding: `${astro.InputPaddingYMedium} ${astro.InputPaddingXMedium}`,
              },
            },
          },
          {
            props: { size: 'large' },
            style: {
              '& .MuiInputBase-input': {
                height: '1.25rem',
                padding: `${astro.Spacing3} ${astro.Spacing2}`,
                // TODO: Y and X seem to be reversed
                // padding: `${astro.InputPaddingYLarge} ${astro.InputPaddingXLarge}`,
              },
            },
          },
        ],
      },
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            body1Bold: 'p',
            body2Bold: 'p',
            body3: 'p',
            body3Bold: 'p',
            controlBody1: 'p',
            controlBody1Bold: 'p',
            display1: 'h1',
            display2: 'h2',
            h1Bold: 'h1',
          },
        },
      },
    },
    palette: {
      background: {
        default: astro.ColorBackgroundBaseDefault,
        paper: astro.ColorBackgroundSurfaceDefault,
      },
      divider: astro.MenuDividerColorFill,
      mode,
      text: {
        disabled: astro.ColorTextPlaceholder,
        primary: astro.ColorTextPrimary,
        secondary: astro.ColorTextSecondary,
      },
    },
    spacing: (...factors: number[]): string => {
      // astro spacing formula
      const rems = factors.map((factor) => `${0.25 * factor}rem`);
      return rems.join();
    },
    typography: {
      fontFamily: astro.FontFamilySans,
      fontWeightBold: astro.FontWeightsBold,
      fontWeightLight: astro.FontWeightsLight,
      fontWeightMedium: astro.FontWeightsMedium,
      fontWeightRegular: astro.FontWeightsRegular,
      body1: {
        color: astro.ColorTextPrimary,
        fontFamily: astro.FontBody1FontFamily,
        fontWeight: astro.FontBody1FontWeight,
        lineHeight: astro.FontBody1LineHeight,
        fontSize: astro.FontBody1FontSize,
        letterSpacing: astro.FontBody1LetterSpacing,
      },
      body1Bold: {
        color: astro.ColorTextPrimary,
        fontFamily: astro.FontBody1BoldFontFamily,
        fontWeight: astro.FontBody1BoldFontWeight,
        lineHeight: astro.FontBody1BoldLineHeight,
        fontSize: astro.FontBody1BoldFontSize,
        letterSpacing: astro.FontBody1BoldLetterSpacing,
      },
      body2: {
        color: astro.ColorTextPrimary,
        fontFamily: astro.FontBody2FontFamily,
        fontWeight: astro.FontBody2FontWeight,
        lineHeight: astro.FontBody2LineHeight,
        fontSize: astro.FontBody2FontSize,
        letterSpacing: astro.FontBody2LetterSpacing,
      },
      body2Bold: {
        color: astro.ColorTextPrimary,
        fontFamily: astro.FontBody2BoldFontFamily,
        fontWeight: astro.FontBody2BoldFontWeight,
        lineHeight: astro.FontBody2BoldLineHeight,
        fontSize: astro.FontBody2BoldFontSize,
        letterSpacing: astro.FontBody2BoldLetterSpacing,
      },
      body3: {
        color: astro.ColorTextPrimary,
        fontFamily: astro.FontBody3FontFamily,
        fontWeight: astro.FontBody3FontWeight,
        lineHeight: astro.FontBody3LineHeight,
        fontSize: astro.FontBody3FontSize,
        letterSpacing: astro.FontBody3LetterSpacing,
      },
      body3Bold: {
        color: astro.ColorTextPrimary,
        fontFamily: astro.FontBody3BoldFontFamily,
        fontWeight: astro.FontBody3BoldFontWeight,
        lineHeight: astro.FontBody3BoldLineHeight,
        fontSize: astro.FontBody3BoldFontSize,
        letterSpacing: astro.FontBody3BoldLetterSpacing,
      },
      controlBody1: {
        color: astro.ColorTextPrimary,
        fontFamily: astro.FontControlBody1FontFamily,
        fontWeight: astro.FontControlBody1FontWeight,
        lineHeight: astro.FontControlBody1LineHeight,
        fontSize: astro.FontControlBody1FontSize,
        letterSpacing: astro.FontControlBody1LetterSpacing,
      },
      controlBody1Bold: {
        color: astro.ColorTextPrimary,
        fontFamily: astro.FontControlBody1BoldFontFamily,
        fontWeight: astro.FontControlBody1BoldFontWeight,
        lineHeight: astro.FontControlBody1BoldLineHeight,
        fontSize: astro.FontControlBody1BoldFontSize,
        letterSpacing: astro.FontControlBody1BoldLetterSpacing,
      },
      display1: {
        color: astro.ColorTextPrimary,
        fontFamily: astro.FontDisplay1FontFamily,
        fontWeight: astro.FontDisplay1FontWeight,
        lineHeight: astro.FontDisplay1LineHeight,
        fontSize: astro.FontDisplay1FontSize,
        letterSpacing: astro.FontDisplay1LetterSpacing,
      },
      display2: {
        color: astro.ColorTextPrimary,
        fontFamily: astro.FontDisplay2FontFamily,
        fontWeight: astro.FontDisplay2FontWeight,
        lineHeight: astro.FontDisplay2LineHeight,
        fontSize: astro.FontDisplay2FontSize,
        letterSpacing: astro.FontDisplay2LetterSpacing,
      },
      h1: {
        color: astro.ColorTextPrimary,
        fontFamily: astro.FontHeading1FontFamily,
        fontWeight: astro.FontHeading1FontWeight,
        lineHeight: astro.FontHeading1LineHeight,
        fontSize: astro.FontHeading1FontSize,
        letterSpacing: astro.FontHeading1LetterSpacing,
      },
      h1Bold: {
        color: astro.ColorTextPrimary,
        fontFamily: astro.FontHeading1BoldFontFamily,
        fontWeight: astro.FontHeading1BoldFontWeight,
        lineHeight: astro.FontHeading1BoldLineHeight,
        fontSize: astro.FontHeading1BoldFontSize,
        letterSpacing: astro.FontHeading1BoldLetterSpacing,
      },
      h2: {
        color: astro.ColorTextPrimary,
        fontFamily: astro.FontHeading2FontFamily,
        fontWeight: astro.FontHeading2FontWeight,
        lineHeight: astro.FontHeading2LineHeight,
        fontSize: astro.FontHeading2FontSize,
        letterSpacing: astro.FontHeading2LetterSpacing,
      },
      h3: {
        color: astro.ColorTextPrimary,
        fontFamily: astro.FontHeading3FontFamily,
        fontWeight: astro.FontHeading3FontWeight,
        lineHeight: astro.FontHeading3LineHeight,
        fontSize: astro.FontHeading3FontSize,
        letterSpacing: astro.FontHeading3LetterSpacing,
      },
      h4: {
        color: astro.ColorTextPrimary,
        fontFamily: astro.FontHeading4FontFamily,
        fontWeight: astro.FontHeading4FontWeight,
        lineHeight: astro.FontHeading4LineHeight,
        fontSize: astro.FontHeading4FontSize,
        letterSpacing: astro.FontHeading4LetterSpacing,
      },
      h5: {
        color: astro.ColorTextPrimary,
        fontFamily: astro.FontHeading5FontFamily,
        fontWeight: astro.FontHeading5FontWeight,
        lineHeight: astro.FontHeading5LineHeight,
        fontSize: astro.FontHeading5FontSize,
        letterSpacing: astro.FontHeading5LetterSpacing,
      },
      h6: {
        color: astro.ColorTextPrimary,
        fontFamily: astro.FontHeading6FontFamily,
        fontWeight: astro.FontHeading6FontWeight,
        lineHeight: astro.FontHeading6LineHeight,
        fontSize: astro.FontHeading6FontSize,
        letterSpacing: astro.FontHeading6LetterSpacing,
      },
    },
  });
};
