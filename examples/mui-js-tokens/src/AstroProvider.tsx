import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';
import * as all from '@astrouxds/tokens/dist/js/tokens.module';
import * as light from '@astrouxds/tokens/dist/js/theme.light.module';

type AstroTokens = typeof all;

type AstroTheme = {
  astro: AstroTokens;
};

declare module '@mui/material' {
  interface Theme extends AstroTheme {}

  interface ThemeOptions extends AstroTheme {}

  interface TypographyVariantsOptions {
    body1Bold: TypographyStyleOptions;
    h1Bold: TypographyStyleOptions;
  }

  interface TypographyPropsVariantOverrides {
    body1Bold: true;
    h1Bold: true;
  }
}

type Mode = 'dark' | 'light';

type AstroThemeOptions = {
  mode?: Mode;
};

const astroTheme = ({ mode }: AstroThemeOptions) => {
  let astro: AstroTokens = { ...all };

  if (mode === 'light') {
    astro = { ...all, ...light };
  }

  return createTheme({
    astro,
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            body1Bold: 'p',
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
      return rems.slice(0, 4).join().replace(/[,]/g, ' ');
    },
    typography: {
      fontFamily: astro.FontFamilySans,
      // fontSize: Number(astro.FontSizeBase.split('rem')[0]) * 16,
      fontWeightBold: astro.FontWeightsBold,
      fontWeightLight: astro.FontWeightsLight,
      fontWeightMedium: astro.FontWeightsMedium,
      fontWeightRegular: astro.FontWeightsRegular,
      body1: {
        fontFamily: astro.FontBody1FontFamily,
        fontWeight: astro.FontBody1FontWeight,
        lineHeight: astro.FontBody1LineHeight,
        fontSize: astro.FontBody1FontSize,
        letterSpacing: astro.FontBody1LetterSpacing,
        textDecoration: astro.FontBody1TextDecoration,
        // textTransform: astro.FontBody1TextCase,
        // marginBottom: astro.FontBody1ParagraphSpacing,
      },
      body1Bold: {
        fontFamily: astro.FontBody1BoldFontFamily,
        fontWeight: astro.FontBody1BoldFontWeight,
        lineHeight: astro.FontBody1BoldLineHeight,
        fontSize: astro.FontBody1BoldFontSize,
        letterSpacing: astro.FontBody1BoldLetterSpacing,
        textDecoration: astro.FontBody1BoldTextDecoration,
        // textTransform: astro.FontBody1BoldTextCase,
        // marginBottom: astro.FontBody1BoldParagraphSpacing,
      },
      h1: {
        fontFamily: astro.FontHeading1FontFamily,
        fontWeight: astro.FontHeading1FontWeight,
        lineHeight: astro.FontHeading1LineHeight,
        fontSize: astro.FontHeading1FontSize,
        letterSpacing: astro.FontHeading1LetterSpacing,
        textDecoration: astro.FontHeading1TextDecoration,
        // textTransform: astro.FontHeading1TextCase,
        // marginBottom: astro.FontHeading1ParagraphSpacing,
      },
      h1Bold: {
        fontFamily: astro.FontHeading1BoldFontFamily,
        fontWeight: astro.FontHeading1BoldFontWeight,
        lineHeight: astro.FontHeading1BoldLineHeight,
        fontSize: astro.FontHeading1BoldFontSize,
        letterSpacing: astro.FontHeading1BoldLetterSpacing,
        textDecoration: astro.FontHeading1BoldTextDecoration,
        // textTransform: astro.FontHeading1BoldTextCase,
        // marginBottom: astro.FontHeading1BoldParagraphSpacing,
      },
    },
  });
};

type AstroProviderProps = AstroThemeOptions & {
  children: React.ReactNode;
};

const AstroProvider = ({ children, mode }: AstroProviderProps) => {
  return (
    <ThemeProvider theme={astroTheme({ mode })}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AstroProvider;
