import system from '@astrouxds/tokens/dist/json/base.system.json';
import reference from '@astrouxds/tokens/dist/json/base.reference.json';
import component from '@astrouxds/tokens/dist/json/base.component.json';
import lightTheme from '@astrouxds/tokens/dist/json/theme.light.json';
import type { AstroTheme } from '../types/astro-theme';
import type { Mode } from '../types/global';

export const astroTokens = (mode: Mode = 'dark'): AstroTheme['astro'] => {
  const isLightTheme = mode === 'light';

  let theme: typeof lightTheme = {
    'gsb-icon-color-fill-default': component['gsb-icon-color-fill-default'],
    'gsb-icon-color-fill-hover': component['gsb-icon-color-fill-hover'],
    'gsb-color-background': component['gsb-color-background'],
    'gsb-color-text': component['gsb-color-text'],
    'scrollbar-shadow-inner-vertical': component['scrollbar-shadow-inner-vertical'],
    'scrollbar-shadow-inner-horizontal': component['scrollbar-shadow-inner-horizontal'],
    'tag-shadow-inner-pass': component['tag-shadow-inner-pass'],
    'tag-shadow-inner-fail': component['tag-shadow-inner-fail'],
    'tag-shadow-inner-unknown': component['tag-shadow-inner-unknown'],
    'color-background-base-default': system['color-background-base-default'],
    'color-background-base-header': system['color-background-base-header'],
    'color-background-base-hover': system['color-background-base-hover'],
    'color-background-base-selected': system['color-background-base-selected'],
    'color-background-surface-default': system['color-background-surface-default'],
    'color-background-surface-header': system['color-background-surface-header'],
    'color-background-surface-hover': system['color-background-surface-hover'],
    'color-background-surface-selected': system['color-background-surface-selected'],
    'color-background-interactive-default': system['color-background-interactive-default'],
    'color-background-interactive-hover': system['color-background-interactive-hover'],
    'color-text-primary': system['color-text-primary'],
    'color-text-secondary': system['color-text-secondary'],
    'color-text-placeholder': system['color-text-placeholder'],
    'color-text-inverse': system['color-text-inverse'],
    'color-text-interactive-default': system['color-text-interactive-default'],
    'color-text-interactive-hover': system['color-text-interactive-hover'],
    'color-text-error': system['color-text-error'],
    'color-border-interactive-default': system['color-border-interactive-default'],
    'color-border-interactive-hover': system['color-border-interactive-hover'],
    'color-border-interactive-muted': system['color-border-interactive-muted'],
    'color-border-error': system['color-border-error'],
    'shadow-overlay': system['shadow-overlay'],
  };

  if (isLightTheme) {
    theme['gsb-icon-color-fill-default'] = lightTheme['gsb-icon-color-fill-default'];
    theme['gsb-icon-color-fill-hover'] = lightTheme['gsb-icon-color-fill-hover'];
    theme['gsb-color-background'] = lightTheme['gsb-color-background'];
    theme['gsb-color-text'] = lightTheme['gsb-color-text'];
    theme['scrollbar-shadow-inner-vertical'] = lightTheme['scrollbar-shadow-inner-vertical'];
    theme['scrollbar-shadow-inner-horizontal'] = lightTheme['scrollbar-shadow-inner-horizontal'];
    theme['tag-shadow-inner-pass'] = lightTheme['tag-shadow-inner-pass'];
    theme['tag-shadow-inner-fail'] = lightTheme['tag-shadow-inner-fail'];
    theme['tag-shadow-inner-unknown'] = lightTheme['tag-shadow-inner-unknown'];
    theme['color-background-base-default'] = lightTheme['color-background-base-default'];
    theme['color-background-base-header'] = lightTheme['color-background-base-header'];
    theme['color-background-base-hover'] = lightTheme['color-background-base-hover'];
    theme['color-background-base-selected'] = lightTheme['color-background-base-selected'];
    theme['color-background-surface-default'] = lightTheme['color-background-surface-default'];
    theme['color-background-surface-header'] = lightTheme['color-background-surface-header'];
    theme['color-background-surface-hover'] = lightTheme['color-background-surface-hover'];
    theme['color-background-surface-selected'] = lightTheme['color-background-surface-selected'];
    theme['color-background-interactive-default'] = lightTheme['color-background-interactive-default'];
    theme['color-background-interactive-hover'] = lightTheme['color-background-interactive-hover'];
    theme['color-text-primary'] = lightTheme['color-text-primary'];
    theme['color-text-secondary'] = lightTheme['color-text-secondary'];
    theme['color-text-placeholder'] = lightTheme['color-text-placeholder'];
    theme['color-text-inverse'] = lightTheme['color-text-inverse'];
    theme['color-text-interactive-default'] = lightTheme['color-text-interactive-default'];
    theme['color-text-interactive-hover'] = lightTheme['color-text-interactive-hover'];
    theme['color-text-error'] = lightTheme['color-text-error'];
    theme['color-border-interactive-default'] = lightTheme['color-border-interactive-default'];
    theme['color-border-interactive-hover'] = lightTheme['color-border-interactive-hover'];
    theme['color-border-interactive-muted'] = lightTheme['color-border-interactive-muted'];
    theme['color-border-error'] = lightTheme['color-border-error'];
    theme['shadow-overlay'] = lightTheme['shadow-overlay'];
  }

  return {
    border: {
      width: {
        none: reference['border-width-none'],
        xs: reference['border-width-xs'],
        sm: reference['border-width-sm'],
        lg: reference['border-width-lg'],
      },
    },
    color: {
      background: {
        base: {
          default: theme['color-background-base-default'],
          header: theme['color-background-base-header'],
          hover: theme['color-background-base-hover'],
          selected: theme['color-background-base-selected'],
        },
        surface: {
          default: theme['color-background-surface-default'],
          header: theme['color-background-surface-header'],
          hover: theme['color-background-surface-hover'],
          selected: theme['color-background-surface-selected'],
        },
        interactive: {
          default: theme['color-background-interactive-default'],
          hover: theme['color-background-interactive-hover'],
        },
      },
      text: {
        primary: theme['color-text-primary'],
        secondary: theme['color-text-secondary'],
        placeholder: theme['color-text-placeholder'],
        inverse: theme['color-text-inverse'],
        interactive: {
          default: theme['color-text-interactive-default'],
          hover: theme['color-text-interactive-hover'],
        },
        white: system['color-text-white'],
        black: system['color-text-black'],
        error: system['color-text-error'],
      },
      border: {
        error: theme['color-border-error'],
        interactive: {
          default: theme['color-border-interactive-default'],
          hover: theme['color-border-interactive-hover'],
          muted: theme['color-border-interactive-muted'],
        },
      },
      status: {
        critical: system['color-status-critical'],
        serious: system['color-status-serious'],
        caution: system['color-status-caution'],
        normal: system['color-status-normal'],
        standby: system['color-status-standby'],
        off: system['color-status-off'],
      },
      classification: {
        topsecretsci: component['classification-banner-color-background-topsecretsci'],
        topsecret: component['classification-banner-color-background-topsecretsci'],
        secret: component['classification-banner-color-background-secret'],
        confidential: component['classification-banner-color-background-confidential'],
        cui: component['classification-banner-color-background-cui'],
        unclassified: component['classification-banner-color-background-unclassified'],
      },
    },
    opacity: {
      '25': reference['opacity-25'],
      '35': reference['opacity-35'],
      '40': reference['opacity-40'],
      '45': reference['opacity-45'],
      '50': reference['opacity-50'],
      disabled: system['opacity-disabled'],
    },
    palette: {
      neutral: {
        '1000': reference['color-palette-neutral-1000'],
        '000': reference['color-palette-neutral-000'],
      },
      darkblue: {
        '100': reference['color-palette-darkblue-100'],
        '200': reference['color-palette-darkblue-200'],
        '300': reference['color-palette-darkblue-300'],
        '400': reference['color-palette-darkblue-400'],
        '500': reference['color-palette-darkblue-500'],
        '600': reference['color-palette-darkblue-600'],
        '700': reference['color-palette-darkblue-700'],
        '800': reference['color-palette-darkblue-800'],
        '900': reference['color-palette-darkblue-900'],
        '950': reference['color-palette-darkblue-950'],
      },
      brightblue: {
        '100': reference['color-palette-brightblue-100'],
        '200': reference['color-palette-brightblue-200'],
        '300': reference['color-palette-brightblue-300'],
        '400': reference['color-palette-brightblue-400'],
        '500': reference['color-palette-brightblue-500'],
        '600': reference['color-palette-brightblue-600'],
        '700': reference['color-palette-brightblue-700'],
        '800': reference['color-palette-brightblue-800'],
        '850': reference['color-palette-brightblue-850'],
        '900': reference['color-palette-brightblue-900'],
      },
      grey: {
        '100': reference['color-palette-grey-100'],
        '200': reference['color-palette-grey-200'],
        '250': reference['color-palette-grey-250'],
        '300': reference['color-palette-grey-300'],
        '400': reference['color-palette-grey-400'],
        '500': reference['color-palette-grey-500'],
        '600': reference['color-palette-grey-600'],
        '700': reference['color-palette-grey-700'],
        '800': reference['color-palette-grey-800'],
        '900': reference['color-palette-grey-900'],
      },
      red: {
        '400': reference['color-palette-red-400'],
        '500': reference['color-palette-red-500'],
        '600': reference['color-palette-red-600'],
        '700': reference['color-palette-red-700'],
        '800': reference['color-palette-red-800'],
        '900': reference['color-palette-red-900'],
      },
      orange: {
        '400': reference['color-palette-orange-400'],
        '500': reference['color-palette-orange-500'],
        '600': reference['color-palette-orange-600'],
        '700': reference['color-palette-orange-700'],
        '800': reference['color-palette-orange-800'],
        '900': reference['color-palette-orange-900'],
      },
      yellow: {
        '400': reference['color-palette-yellow-400'],
        '500': reference['color-palette-yellow-500'],
        '600': reference['color-palette-yellow-600'],
        '700': reference['color-palette-yellow-700'],
        '800': reference['color-palette-yellow-800'],
        '900': reference['color-palette-yellow-900'],
      },
      green: {
        '400': reference['color-palette-green-400'],
        '500': reference['color-palette-green-500'],
        '600': reference['color-palette-green-600'],
        '700': reference['color-palette-green-700'],
        '800': reference['color-palette-green-800'],
        '900': reference['color-palette-green-900'],
      },
      cyan: {
        '400': reference['color-palette-cyan-400'],
        '500': reference['color-palette-cyan-500'],
        '600': reference['color-palette-cyan-600'],
        '700': reference['color-palette-cyan-700'],
        '800': reference['color-palette-cyan-800'],
        '900': reference['color-palette-cyan-900'],
      },
      violet: {
        '800': reference['color-palette-violet-800'],
      },
      blue: {
        '800': reference['color-palette-blue-800'],
      },
      teal: {
        '100': reference['color-palette-teal-100'],
        '200': reference['color-palette-teal-200'],
        '300': reference['color-palette-teal-300'],
        '400': reference['color-palette-teal-400'],
        '500': reference['color-palette-teal-500'],
        '600': reference['color-palette-teal-600'],
        '700': reference['color-palette-teal-700'],
        '800': reference['color-palette-teal-800'],
        '900': reference['color-palette-teal-900'],
      },
      purple: {
        '100': reference['color-palette-purple-100'],
        '200': reference['color-palette-purple-200'],
        '300': reference['color-palette-purple-300'],
        '400': reference['color-palette-purple-400'],
        '500': reference['color-palette-purple-500'],
        '600': reference['color-palette-purple-600'],
        '700': reference['color-palette-purple-700'],
        '800': reference['color-palette-purple-800'],
        '900': reference['color-palette-purple-900'],
      },
      pink: {
        '100': reference['color-palette-pink-100'],
        '200': reference['color-palette-pink-200'],
        '300': reference['color-palette-pink-300'],
        '400': reference['color-palette-pink-400'],
        '500': reference['color-palette-pink-500'],
        '600': reference['color-palette-pink-600'],
        '700': reference['color-palette-pink-700'],
        '800': reference['color-palette-pink-800'],
        '900': reference['color-palette-pink-900'],
      },
      hotorange: {
        '100': reference['color-palette-hotorange-100'],
        '200': reference['color-palette-hotorange-200'],
        '300': reference['color-palette-hotorange-300'],
        '400': reference['color-palette-hotorange-400'],
        '500': reference['color-palette-hotorange-500'],
        '600': reference['color-palette-hotorange-600'],
        '700': reference['color-palette-hotorange-700'],
        '800': reference['color-palette-hotorange-800'],
        '900': reference['color-palette-hotorange-900'],
      },
    },
    radius: {
      base: reference['radius-base'],
      circle: reference['radius-circle'],
    },
    shadow: {
      base: theme['shadow-overlay'],
    },
    spacing: (...factors: number[]): string => {
      // astro spacing formula
      const rems = factors.map((factor) => `${0.25 * factor}rem`);
      return rems.slice(0, 4).join().replace(/[,]/g, ' ');
    },
    typography: {
      fontFamily: reference['font-family-sans'],
      body1: {
        fontFamily: reference['font-body-1-font-family'],
        fontSize: reference['font-body-1-font-size'],
        fontWeight: reference['font-body-1-font-weight'],
        lineHeight: reference['font-body-1-line-height'],
        letterSpacing: reference['font-body-1-letter-spacing'],
        textDecoration: reference['font-body-1-text-decoration'],
        // paragraphSpacing: reference['font-body-1-paragraph-spacing'],
        // textCase: reference['font-body-1-text-case'],
      },
      body2: {
        fontFamily: reference['font-body-2-font-family'],
        fontSize: reference['font-body-2-font-size'],
        fontWeight: reference['font-body-2-font-weight'],
        lineHeight: reference['font-body-2-line-height'],
        letterSpacing: reference['font-body-2-letter-spacing'],
        textDecoration: reference['font-body-2-text-decoration'],
        // paragraphSpacing: reference['font-body-2-paragraph-spacing'],
        // textCase: reference['font-body-2-text-case'],
      },
      body3: {
        fontFamily: reference['font-body-3-font-family'],
        fontSize: reference['font-body-3-font-size'],
        fontWeight: reference['font-body-3-font-weight'],
        lineHeight: reference['font-body-3-line-height'],
        letterSpacing: reference['font-body-3-letter-spacing'],
        textDecoration: reference['font-body-3-text-decoration'],
        // paragraphSpacing: reference['font-body-3-paragraph-spacing'],
        // textCase: reference['font-body-3-text-case'],
      },
      display1: {
        fontFamily: reference['font-display-1-font-family'],
        fontSize: reference['font-display-1-font-size'],
        fontWeight: reference['font-display-1-font-weight'],
        lineHeight: reference['font-display-1-line-height'],
        letterSpacing: reference['font-display-1-letter-spacing'],
        textDecoration: reference['font-display-1-text-decoration'],
        // paragraphSpacing: reference['font-display-1-paragraph-spacing'],
        // textCase: reference['font-display-1-text-case'],
      },
      display2: {
        fontFamily: reference['font-display-2-font-family'],
        fontSize: reference['font-display-2-font-size'],
        fontWeight: reference['font-display-2-font-weight'],
        lineHeight: reference['font-display-2-line-height'],
        letterSpacing: reference['font-display-2-letter-spacing'],
        textDecoration: reference['font-display-2-text-decoration'],
        // paragraphSpacing: reference['font-display-2-paragraph-spacing'],
        // textCase: reference['font-display-2-text-case'],
      },
      h1: {
        fontFamily: reference['font-heading-1-font-family'],
        fontSize: reference['font-heading-1-font-size'],
        fontWeight: reference['font-heading-1-font-weight'],
        lineHeight: reference['font-heading-1-line-height'],
        letterSpacing: reference['font-heading-1-letter-spacing'],
        textDecoration: reference['font-heading-1-text-decoration'],
        // paragraphSpacing: reference['font-heading-1-paragraph-spacing'],
        // textCase: reference['font-heading-1-text-case'],
      },
      h2: {
        fontFamily: reference['font-heading-2-font-family'],
        fontSize: reference['font-heading-2-font-size'],
        fontWeight: reference['font-heading-2-font-weight'],
        lineHeight: reference['font-heading-2-line-height'],
        letterSpacing: reference['font-heading-2-letter-spacing'],
        textDecoration: reference['font-heading-2-text-decoration'],
        // paragraphSpacing: reference['font-heading-2-paragraph-spacing'],
        // textCase: reference['font-heading-2-text-case'],
      },
      h3: {
        fontFamily: reference['font-heading-3-font-family'],
        fontSize: reference['font-heading-3-font-size'],
        fontWeight: reference['font-heading-3-font-weight'],
        lineHeight: reference['font-heading-3-line-height'],
        letterSpacing: reference['font-heading-3-letter-spacing'],
        textDecoration: reference['font-heading-3-text-decoration'],
        // paragraphSpacing: reference['font-heading-3-paragraph-spacing'],
        // textCase: reference['font-heading-3-text-case'],
      },
      h4: {
        fontFamily: reference['font-heading-4-font-family'],
        fontSize: reference['font-heading-4-font-size'],
        fontWeight: reference['font-heading-4-font-weight'],
        lineHeight: reference['font-heading-4-line-height'],
        letterSpacing: reference['font-heading-4-letter-spacing'],
        textDecoration: reference['font-heading-4-text-decoration'],
        // paragraphSpacing: reference['font-heading-4-paragraph-spacing'],
        // textCase: reference['font-heading-4-text-case'],
      },
      h5: {
        fontFamily: reference['font-heading-5-font-family'],
        fontSize: reference['font-heading-5-font-size'],
        fontWeight: reference['font-heading-5-font-weight'],
        lineHeight: reference['font-heading-5-line-height'],
        letterSpacing: reference['font-heading-5-letter-spacing'],
        textDecoration: reference['font-heading-5-text-decoration'],
        // paragraphSpacing: reference['font-heading-5-paragraph-spacing'],
        // textCase: reference['font-heading-5-text-case'],
      },
      h6: {
        fontFamily: reference['font-heading-6-font-family'],
        fontSize: reference['font-heading-6-font-size'],
        fontWeight: reference['font-heading-6-font-weight'],
        lineHeight: reference['font-heading-6-line-height'],
        letterSpacing: reference['font-heading-6-letter-spacing'],
        textDecoration: reference['font-heading-6-text-decoration'],
        // paragraphSpacing: reference['font-heading-6-paragraph-spacing'],
        // textCase: reference['font-heading-6-text-case'],
      },
      monospace: {
        fontFamily: reference['font-monospace-1-font-family'],
        fontSize: reference['font-monospace-1-font-size'],
        fontWeight: reference['font-monospace-1-font-weight'],
        lineHeight: reference['font-monospace-1-line-height'],
        letterSpacing: reference['font-monospace-1-letter-spacing'],
        textDecoration: reference['font-monospace-1-text-decoration'],
        // paragraphSpacing: reference['font-monospace-1-paragraph-spacing'],
        // textCase: reference['font-monospace-1-text-case'],
      },
      lineHeight: {
        '2xs': reference['line-height-2xs'],
        xs: reference['line-height-xs'],
        sm: reference['line-height-sm'],
        base: reference['line-height-base'],
        lg: reference['line-height-lg'],
        xl: reference['line-height-xl'],
        '2xl': reference['line-height-2xl'],
        '3xl': reference['line-height-3xl'],
        '4xl': reference['line-height-4xl'],
      },
      fontWeight: {
        light: reference['font-weights-light'],
        regular: reference['font-weights-regular'],
        medium: reference['font-weights-medium'],
        bold: reference['font-weights-bold'],
      },
      fontSize: {
        xs: reference['font-size-xs'],
        sm: reference['font-size-sm'],
        base: reference['font-size-base'],
        lg: reference['font-size-lg'],
        xl: reference['font-size-xl'],
        '2xl': reference['font-size-2xl'],
        '3xl': reference['font-size-3xl'],
        '4xl': reference['font-size-4xl'],
        '5xl': reference['font-size-5xl'],
        '6xl': reference['font-size-6xl'],
      },
      letterSpacing: {
        '2xl': reference['letter-spacing-2xl'],
        xl: reference['letter-spacing-xl'],
        base: reference['letter-spacing-base'],
        lg: reference['letter-spacing-lg'],
        sm: reference['letter-spacing-sm'],
      },
    },
  };
};
