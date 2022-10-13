import type { AstroTheme } from './astro-theme';

export type AstroThemeClasses = 'dark-theme' | 'light-theme';
export type Mode = 'light' | 'dark';

// Add Astro's Theme to the owner's default theme
declare module '@mui/material' {
  interface Theme extends AstroTheme {}
}

// Add Astro's Typography variants to the owner's TypographyProps
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    display1: true;
    display2: true;
  }
}
