export interface AstroTheme {
  astro: {
    border: {
      width: {
        none: number;
        xs: string;
        sm: string;
        lg: string;
      };
    };
    color: {
      background: {
        base: {
          default: string;
          header: string;
          hover: string;
          selected: string;
        };
        surface: {
          default: string;
          header: string;
          hover: string;
          selected: string;
        };
        interactive: {
          default: string;
          hover: string;
        };
      };
      border: {
        error: string;
        interactive: {
          default: string;
          hover: string;
          muted: string;
        };
      };
      classification: {
        topsecretsci: string;
        topsecret: string;
        secret: string;
        confidential: string;
        cui: string;
        unclassified: string;
      };
      text: {
        primary: string;
        secondary: string;
        placeholder: string;
        inverse: string;
        interactive: {
          default: string;
          hover: string;
        };
        white: string;
        black: string;
        error: string;
      };
      status: {
        critical: string;
        serious: string;
        caution: string;
        normal: string;
        standby: string;
        off: string;
      };
    };
    opacity: {
      '25': string;
      '35': string;
      '40': string;
      '45': string;
      '50': string;
      disabled: string;
    };
    palette: {
      neutral: {
        '1000': string;
        '000': string;
      };
      darkblue: PaletteFull & {
        '950': string;
      };
      brightblue: PaletteFull & {
        '850': string;
      };
      grey: PaletteFull & {
        '250': string;
      };
      red: PaletteHalf;
      orange: PaletteHalf;
      yellow: PaletteHalf;
      green: PaletteHalf;
      cyan: PaletteHalf;
      violet: {
        '800': string;
      };
      blue: {
        '800': string;
      };
      teal: PaletteFull;
      purple: PaletteFull;
      pink: PaletteFull;
      hotorange: PaletteFull;
    };
    radius: {
      base: string;
      circle: string;
    };
    shadow: {
      base: string;
    };
    spacing: Spacing;
    typography: {
      fontFamily: string;
      body1: FontControl;
      body2: FontControl;
      body3: FontControl;
      h1: FontControl;
      h2: FontControl;
      h3: FontControl;
      h4: FontControl;
      h5: FontControl;
      h6: FontControl;
      monospace: FontControl;
      display1: FontControl;
      display2: FontControl;
      lineHeight: {
        '2xs': string;
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
      };
      fontWeight: {
        light: string;
        regular: string;
        medium: string;
        bold: string;
      };
      fontSize: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
      };
      letterSpacing: {
        '2xl': string;
        xl: string;
        base: string;
        lg: string;
        sm: string;
      };
    };
  };
}

type PaletteFull = {
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
};

type PaletteHalf = {
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
};

export type FontControl = {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  fontSize: string;
  letterSpacing: string;
  textDecoration: string;
  // paragraphSpacing: number;
  // textCase: string;
};

interface Spacing {
  /**
   * Uses a factor of 4 formula i.e... (0.25 * factor)
   *
   * Examples:
   *
   * spacing(4) => 1rem
   *
   * spacing(2, 6) => 0.5rem 1.5rem
   *
   * spacing(0.5, 1, 0.25) => 0.125rem 1rem 0.0625rem
   *
   * spacing(1, 1, 4, 2.75) => 0.25rem 0.25rem 1rem 0.6875rem
   *
   */
  (factor: number): string;
  (topBottom: number, rightLeft: number): string;
  (top: number, rightLeft: number, bottom: number): string;
  (top: number, right: number, bottom: number, left: number): string;
}
